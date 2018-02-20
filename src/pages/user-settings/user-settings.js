var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Optional } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MessagingService } from '../../providers/messaging-service/messaging-service';
import { Alert } from 'ionic-angular/components/alert/alert';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
/**
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsPage = /** @class */ (function () {
    function UserSettingsPage(messagingService, navCtrl, titleService) {
        this.messagingService = messagingService;
        this.navCtrl = navCtrl;
        this.titleService = titleService;
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
    UserSettingsPage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("User Settings ");
        }
    };
    /**
     * Generated class for the UserSettingsPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    UserSettingsPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [MessagingService,
            NavController,
            TitleServiceProvider])
    ], UserSettingsPage);
    return UserSettingsPage;
}());
export { UserSettingsPage };
//# sourceMappingURL=user-settings.js.map