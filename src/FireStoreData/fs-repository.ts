//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ExtendedData, ExtMap } from '../interfaces/data-models';

import {publishReplay} from 'rxjs/operators/publishReplay'
import {refCount} from 'rxjs/operators/refCount'
import {map} from 'rxjs/operators/map'
import {first} from 'rxjs/operators/first';
import {share} from 'rxjs/operators/share';

/*
  Generated class for the FBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class FsRepository<T>  {

  get FormatedList(): Observable<any[]>{
    return this.dataList;
  };
  dataList: Observable<ExtendedData<T>[]>;
  protected collection : AngularFirestoreCollection<T>
  protected dataSnapshot
  dataMap : Observable<ExtMap<ExtendedData<T>>>

  constructor(
    protected afs: AngularFirestore,
    protected path: string) {
     // super()
    console.log('Hello FBRepository Provider');
    this.initialize(path);
  }

  initialize(path: string){
    this.path = path;
    console.log(`path : ${path} `)
    
    this.collection = this.afs.collection(path);
    this.dataSnapshot = this.collection.snapshotChanges()
//    this.list = this.collection.snapshotChanges() as any;
    this.dataList = this.snapList(this.collection).pipe(publishReplay(1),refCount())
    this.dataMap = this.snapshotMap(this.collection).pipe(publishReplay(1),refCount())
  }
  snapList(coll:AngularFirestoreCollection<T>):Observable<ExtendedData<T>[]>{
    return coll.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as T;
        const id = a.payload.doc.id;
        const ret = {id,data}
        return ret;
      });
    }));
  }
  snapshotMap(coll:AngularFirestoreCollection<T>):Observable<ExtMap<ExtendedData<T>>>{
    let _map = new ExtMap<ExtendedData<T>>()
    
    return coll.snapshotChanges().pipe(share(),map(actions => {
      actions.forEach(a => {
        const data = a.payload.doc.data() as T;
        const id = a.payload.doc.id;
        _map.set(id,{id,data})
        //const ret = {id,data}
        //return ret;
      });
      
      return _map
    }));
  }
  List(): Observable<ExtendedData<T>[]> {
    return this.dataList.share();
  }
 
  get(key):  Observable<ExtendedData<T>> {
    return this.afs.doc<T>(this.path + `/${key}`).snapshotChanges().pipe(map(
      (action)=>{ 
        let d = action.payload.data()
        return {id:action.payload.id, data : action.payload.data() as T }}
    ));
  }
  getOnce(key):Promise<ExtendedData<T>> {
    return this.get(key).pipe(first()).toPromise()
  }


  public parseBeforeSave(obj: ExtendedData<T>) {
    return { id : obj.id, data : this.remove$Properties(obj.data)};
  }
  protected remove$Properties(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (key.startsWith('$'))
        delete obj[key];
    })
  }


  saveNew(item: ExtendedData<T>, key?) {
    this.parseBeforeSave(item);
      return this.collection.add(item.data);
  }

  public remove(item: ExtendedData<T>) {
    // this.parseBeforeSave(item);
    return this.collection.doc(item.id).delete() ;
    //return this.fbLoggableSaver.remove(item, this.urlOrRef)
  }
  
  saveOld(editedItem:ExtendedData< T>) {
   // let key = editedItem.$key;
    let data = editedItem.data
   // this.parseBeforeSave(copy);
    return this.collection.doc(editedItem.id).update(data);
  }
  
}
