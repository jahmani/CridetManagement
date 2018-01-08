var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { database } from 'firebase/app';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionServiceProvider = /** @class */ (function () {
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
    ConnectionServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ConnectionServiceProvider);
    return ConnectionServiceProvider;
}());
export { ConnectionServiceProvider };
//# sourceMappingURL=connection-service.js.map