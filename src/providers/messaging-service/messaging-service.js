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
import * as firebase from "firebase";
import { UserService } from '../user-service/user-service';
/*
  Generated class for the MessagingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessagingService = (function () {
    function MessagingService(userService) {
        this.userService = userService;
        this.unsubscribeOnTokenRefresh = function () { };
        this.messaging = firebase.messaging();
    }
    MessagingService.prototype.enableNotifications = function () {
        var _this = this;
        console.log('Requesting permission...');
        return this.messaging.requestPermission().then(function () {
            console.log('Permission granted');
            return _this.messaging.getToken().then(function (token) {
                // token might change - we need to listen for changes to it and update it
                _this.setupOnTokenRefresh();
                return _this.updateToken(token);
            });
        });
    };
    MessagingService.prototype.disableNotifications = function () {
        var _this = this;
        this.unsubscribeOnTokenRefresh();
        this.unsubscribeOnTokenRefresh = function () { };
        //    return this.userService.removeFcmToken().then();
        return this.userService.getFcmTokenLocal().then(function (token) {
            var proms1;
            if (token)
                proms1 = _this.messaging.deleteToken(token);
            var proms2 = _this.userService.removeFcmToken(token);
            return Promise.all([proms1, proms2]);
        });
    };
    MessagingService.prototype.updateToken = function (currentToken) {
        if (currentToken) {
            // we've got the token from Firebase, now let's store it in the database
            try {
                this.userService.removeFcmToken();
            }
            finally {
                return this.userService.setFcmToken(currentToken);
            }
        }
        else {
            console.log('No Instance ID token available. Request permission to generate one.');
        }
    };
    MessagingService.prototype.getFcmTokenLocal = function () {
        return this.userService.getFcmTokenLocal();
    };
    MessagingService.prototype.setupOnTokenRefresh = function () {
        var _this = this;
        this.unsubscribeOnTokenRefresh = this.messaging.onTokenRefresh(function () {
            console.log("Token refreshed");
            _this.messaging.getToken().then(function (token) {
                _this.updateToken(token);
            });
        });
    };
    MessagingService = __decorate([
        Injectable()
        // based on https://github.com/firebase/quickstart-js/
        ,
        __metadata("design:paramtypes", [UserService])
    ], MessagingService);
    return MessagingService;
}());
export { MessagingService };
//# sourceMappingURL=messaging-service.js.map