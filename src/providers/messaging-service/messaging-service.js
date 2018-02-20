import { Injectable, Inject } from '@angular/core';
import * as firebase from "firebase";
import { UserService } from '../user-service/user-service';
/*
  Generated class for the MessagingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// based on https://github.com/firebase/quickstart-js/
var /*
  Generated class for the MessagingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// based on https://github.com/firebase/quickstart-js/
MessagingService = /** @class */ (function () {
    function MessagingService(userService) {
        this.userService = userService;
        this.messaging = firebase.messaging();
    }
    MessagingService.prototype.enableNotifications = function () {
        var _this = this;
        console.log('Requesting permission...');
        return this.messaging.requestPermission().then(function () {
            console.log('Permission granted');
            return _this.messaging.getToken().then(function (token) {
                // token might change - we need to listen for changes to it and update it
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
    return MessagingService;
}());
/*
  Generated class for the MessagingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// based on https://github.com/firebase/quickstart-js/
export { MessagingService };
//# sourceMappingURL=messaging-service.js.map