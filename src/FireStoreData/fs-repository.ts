//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Extended, ExtMap, Editable } from '../interfaces/data-models';

import {publishReplay} from 'rxjs/operators/publishReplay'
import {refCount} from 'rxjs/operators/refCount'
import {map} from 'rxjs/operators/map'
import {first} from 'rxjs/operators/first';
import {share} from 'rxjs/operators/share';
import * as firebase from "firebase/app"
import { firestore } from 'firebase';

/*
  Generated class for the FBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class FsRepository<T extends Editable>  {

  get FormatedList(): Observable<any[]>{
    return this.dataList;
  };
  dataList: Observable<Extended<T>[]>;
  protected collection : AngularFirestoreCollection<T>
  dataMap : Observable<ExtMap<Extended<T>>>

  constructor(
    protected afs: AngularFirestore,
    protected path: string) {
    console.log('Hello FBRepository Provider');
    this.initialize(path);
  }

  initialize(path: string){
    this.path = path;
    console.log(`path : ${path} `)
    
    this.collection = this.afs.collection(path);
    this.dataList = this.snapList(this.collection).pipe(publishReplay(1),refCount())
    this.dataMap = this.snapshotMap(this.collection).pipe(publishReplay(1),refCount())
  }
  snapList(coll:AngularFirestoreCollection<T>):Observable<Extended<T>[]>{
    return coll.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const meta = a.payload.doc.metadata
        let data
        if(a.payload.doc.exists)
          data = a.payload.doc.data() as T;
        else 
          console.log("Empty doc DAta :",a.payload.doc)
        const id = a.payload.doc.id;
        const ret = {id,data,ext:{},meta}
        return ret;
      });
    }));
  }

  snapshotMap(coll:AngularFirestoreCollection<T>):Observable<ExtMap<Extended<T>>>{
    let _map = new ExtMap<Extended<T>>()
    
    return coll.snapshotChanges().pipe(share(),map(actions => {
      actions.forEach(a => {
        let data
        if(a.payload.doc.exists)
          data = a.payload.doc.data() as T;
        else 
          console.log("Empty doc DAta :",a.payload.doc)
        const id = a.payload.doc.id;
        _map.set(id,{id,data,meta:a.payload.doc.metadata,ext:{}})
        //const ret = {id,data}
        //return ret;
      });
      
      return _map
    }));
  }
  List(): Observable<Extended<T>[]> {
    return this.dataList.share();
  }
 
  get(key):  Observable<Extended<T>> {
    return this.afs.doc<T>(this.path + `/${key}`).snapshotChanges().pipe(map(
      (action)=>{ 
        let data
        if(action.payload.exists)
          data = action.payload.data() as T;
        else 
          console.log("Empty doc DAta :",action.payload)
        return {id:action.payload.id, data }}
    ));
  }
  
  getOnce(key):Promise<Extended<T>> {
    return this.get(key).pipe(first()).toPromise()
  }

  getOrCreate(key):Promise<Extended<T>> {
    return this.getOnce(key).then(val=>val).catch(err=>{
      console.log("getOrCreate err : " , err)
      return {id:key,data:null}
    })
  }


  public parseBeforeSave(obj: Extended<T>) {
    return { id : obj.id, data : this.remove$Properties(obj.data)};
  }
  protected remove$Properties(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (key.startsWith('$'))
        delete obj[key];
    })
  }

  catch(err){
    console.error("Error saving" ,err )
    throw err
  }

  saveNew(item: Extended<T>, key?) {
    this.parseBeforeSave(item);
    item.data.lastEditedOn = firebase.firestore.FieldValue.serverTimestamp() as string
    item.data.firstCreatedOn = firebase.firestore.FieldValue.serverTimestamp() as string
    if(key)
      return this.collection.doc(key).set(item.data).catch(this.catch)
    else
      return this.collection.add(item.data).then(()=>{
        return
      }).catch(this.catch);
  }

  public remove(item: Extended<T>) {
    // this.parseBeforeSave(item);
    return this.collection.doc(item.id).delete().catch(this.catch) ;
    //return this.fbLoggableSaver.remove(item, this.urlOrRef)
  }
  public getNewDocId():string{
    return firestore().collection(this.path).doc().id
  }
  saveOld(editedItem:Extended< T>) {
   // let key = editedItem.$key;
    let data = editedItem.data
    data.lastEditedOn = firebase.firestore.FieldValue.serverTimestamp() as string
   // this.parseBeforeSave(copy);
    return this.collection.doc(editedItem.id).update(data).catch(this.catch);
  }
  
}
