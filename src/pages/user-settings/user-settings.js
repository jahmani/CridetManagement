var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MessagingService } from '../../providers/messaging-service/messaging-service';
/**
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsPage = (function () {
    function UserSettingsPage(messagingService) {
        this.messagingService = messagingService;
        this.notificationChecked = false;
        this.notificationDenied = false;
        this.init();
    }
    UserSettingsPage.prototype.init = function () {
        if (Notification['permission'] == 'denied') {
            this.notificationDenied = true;
        }
        else {
            var token = this.messagingService.getFcmTokenLocal();
            if (token)
                this.notificationChecked = true;
        }
        console.log('ionViewDidLoad UserSettingsPage');
    };
    UserSettingsPage.prototype.onChange = function ($event) {
        console.log("Enable Notification Toggle Changed to : ", $event.checked);
        if ($event.checked)
            this.messagingService.enableNotifications();
        else
            this.messagingService.disableNotifications();
    };
    return UserSettingsPage;
}());
UserSettingsPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-settings',
        templateUrl: 'user-settings.html',
    }),
    __metadata("design:paramtypes", [MessagingService])
], UserSettingsPage);
export { UserSettingsPage };
//# sourceMappingURL=user-settings.js.map