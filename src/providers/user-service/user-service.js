var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import "rxjs/operator/take"
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../app/core/auth';
import { Injectable } from '@angular/core';
import { ActiveStoreService } from '../../FireStoreData/activeStore';
var UserService = (function () {
    function UserService(afs, auth, activeStore) {
        this.afs = afs;
        this.auth = auth;
        this.activeStore = activeStore;
        this.tokenKey = 'fcm_token';
        console.log('Hello UserServiceProvider Provider');
    }
    UserService.prototype.getUserSettingsPath = function (uid, storeId) {
        //return `/versions/v4/users/${uid}`
        return "/versions/v4/stores/" + storeId + "/users/" + uid;
    };
    UserService.prototype.getCurrentUserId = function () {
        return this.auth.user.filter((function (user) { return !!user; })).take(1).toPromise().then(function (user) { return user.uid; });
    };
    UserService.prototype.editUserFcmKey = function (currentToken, remove) {
        var _this = this;
        return this.getCurrentUserId().then(function (uid) {
            var userId = uid;
            var storeId = _this.activeStore.activeStoreKey;
            var fsPath = _this.getUserSettingsPath(userId, storeId);
            var fsRef = _this.afs.doc(fsPath);
            return fsRef;
        }).then(function (fsRef) {
            return fsRef.valueChanges().take(1).toPromise().then(function (userSettings) {
                var fcmTokens = userSettings ? __assign({}, (userSettings.fcmTokens)) : {};
                //let userProfile = { fcmTokens: (userSettings && userSettings.fcmTokens) || {} }
                if (remove) {
                    if (currentToken)
                        delete fcmTokens[currentToken];
                }
                else
                    fcmTokens[currentToken] = true;
                var newUserSettings = __assign({}, userSettings, { fcmTokens: fcmTokens });
                if (userSettings)
                    return fsRef.update(newUserSettings);
                else
                    return fsRef.set(newUserSettings);
            });
        });
    };
    UserService.prototype.setFcmToken = function (token) {
        var _this = this;
        return this.editUserFcmKey(token).then(function () {
            _this.setFcmTokenLocal(token);
        });
    };
    UserService.prototype.removeFcmToken = function (token) {
        var _this = this;
        var tokenPromis = token ? Promise.resolve(token) : this.getFcmTokenLocal();
        return tokenPromis.then(function (token) {
            return _this.editUserFcmKey(token, true).then(function () {
                return _this.removeFcmTokenLocal();
            });
        });
    };
    UserService.prototype.getFcmTokenLocal = function () {
        var _this = this;
        return this.getCurrentUserId().then(function (userId) {
            var userSettings = JSON.parse(localStorage.getItem(userId));
            return userSettings ? userSettings[_this.tokenKey] : undefined;
        });
        //return localStorage.getItem(this.tokenKey)
    };
    UserService.prototype.setFcmTokenLocal = function (token) {
        var userId = this.auth.currentUser.uid;
        var userSettings = JSON.parse(localStorage.getItem(userId));
        userSettings = userSettings || {};
        userSettings[this.tokenKey] = token;
        return localStorage.setItem(userId, JSON.stringify(userSettings));
    };
    UserService.prototype.removeFcmTokenLocal = function () {
        var userId = this.auth.currentUser.uid;
        var userSettings = JSON.parse(localStorage.getItem(userId));
        userSettings = userSettings || {};
        delete userSettings[this.tokenKey];
        return localStorage.setItem(userId, JSON.stringify(userSettings));
        //    return localStorage.removeItem(this.tokenKey);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFirestore,
        AuthService,
        ActiveStoreService])
], UserService);
export { UserService };
//# sourceMappingURL=user-service.js.map