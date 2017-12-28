






import { database } from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { environment } from '../../environments/index';

/*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectionServiceProvider {
  private fbConnectionObservable : Observable<boolean>
  constructor() {
    console.log('Hello ConnectionServiceProvider Provider');
    firebase.initializeApp(environment.firebase)
    this.fbConnectionObservable = new Observable(observer => {
      database().ref(".info/connected").on("value", snap => {
        observer.next(snap.val())
        console.log("fbConnectionObservable", snap.toJSON())
        console.log(" navigator.onLine", navigator.onLine)
        
      }, err => {
        console.log("fbConnectionObservable",err)
        observer.error(err)
      })
    }
    )
  }
  get fbConnectionStatus(){
    return this.fbConnectionObservable
  }

}
