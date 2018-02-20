import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { User } from '../../interfaces/user';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.user = this.afAuth.authState;
        /*.pipe(
              switchMap(user => {
                if (user) {
                  return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                } else {
                  return Observable.of(null)
                }
              })
            )
            */
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
                //   this.updateUserData(credential);
            });
        });
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            // this.updateUserData(credential.user)
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
export { AuthService };
//# sourceMappingURL=auth.js.map