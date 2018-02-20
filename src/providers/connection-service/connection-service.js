import { database } from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
/*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var /*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
ConnectionServiceProvider = /** @class */ (function () {
    function ConnectionServiceProvider() {
        console.log('Hello ConnectionServiceProvider Provider');
        //firebase.initializeApp(environment.firebase)
        this.fbConnectionObservable = new Observable(function (observer) {
            database().ref(".info/connected").on("value", function (snap) {
                observer.next(snap.val());
                console.log("fbConnectionObservable", snap.toJSON());
                console.log(" navigator.onLine", navigator.onLine);
            }, function (err) {
                console.log("fbConnectionObservable", err);
                observer.error(err);
            });
        });
    }
    Object.defineProperty(ConnectionServiceProvider.prototype, "fbConnectionStatus", {
        get: function () {
            return this.fbConnectionObservable;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionServiceProvider;
}());
/*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export { ConnectionServiceProvider };
//# sourceMappingURL=connection-service.js.map