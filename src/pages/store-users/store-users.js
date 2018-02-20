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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { Observable } from 'rxjs/Observable';
import { Extended, User, StoreUser, Invite } from '../../interfaces/data-models';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { InvitesFsRepository } from '../../FireStoreData/invites-fs-repository';
import { ActiveStoreService } from '../../FireStoreData/activeStore';
import { UsersFsRepository } from '../../FireStoreData/users-fs-repository';
import { FormGroup, FormBuilder } from '@angular/forms';
/**
 * Generated class for the StoreUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoreUsersPage = /** @class */ (function () {
    function StoreUsersPage(navCtrl, titleService, usersFsRepository, fb, storeUsersFsRepository, invitesFsRepository, activeStoreService) {
        this.navCtrl = navCtrl;
        this.titleService = titleService;
        this.usersFsRepository = usersFsRepository;
        this.fb = fb;
        this.storeUsersFsRepository = storeUsersFsRepository;
        this.invitesFsRepository = invitesFsRepository;
        this.activeStoreService = activeStoreService;
        this.form = this.fb.group({
            email: '',
        });
        this.storeUsers = this.storeUsersFsRepository.FormatedList;
        this.storeInvites = this.invitesFsRepository.getStoreInvites(this.activeStoreService.activeStoreKey);
    }
    StoreUsersPage.prototype.onSubmit = function (form) {
        var _this = this;
        var email = form.value.email;
        this.usersFsRepository.getByEmail(email).then(function (val) {
            console.log("uid : ", val.uid);
            _this.invitesFsRepository.invite(val.uid, _this.activeStoreService.activeStoreKey);
        }).catch(function (err) {
            console.log("Error , cnat find uder of email ", email);
            console.log(err);
        });
    };
    StoreUsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoreUsersPage');
    };
    StoreUsersPage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("store users ");
        }
    };
    StoreUsersPage.prototype.invite = function (userId) {
        this.invitesFsRepository.invite(userId, this.activeStoreService.activeStoreKey);
    };
    /**
     * Generated class for the StoreUsersPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    StoreUsersPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            TitleServiceProvider,
            UsersFsRepository,
            FormBuilder,
            StoreUsersFsRepository,
            InvitesFsRepository,
            ActiveStoreService])
    ], StoreUsersPage);
    return StoreUsersPage;
}());
export { StoreUsersPage };
//# sourceMappingURL=store-users.js.map