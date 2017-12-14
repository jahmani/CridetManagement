var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
var AuthService = (function () {
    function AuthService(afAuth, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState
            .switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Observable.of(null);
            }
        });
        this.user.subscribe(function (user) {
            console.log("Currently Loged in : ", user);
        });
    }
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.afAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWithEmail = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            return _this.signInWithEmail(email, password)
                .then(function (credential) {
                _this.updateUserData(credential);
            });
        });
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var uid = user.uid, email = user.email, displayName = user.displayName, photoURL = user.photoURL;
        var data = { uid: uid, email: email, displayName: displayName, photoURL: photoURL };
        return userRef.set(data);
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut().then(function () {
            //todo: add after logout logic here
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireAuth,
        AngularFirestore])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.js.map