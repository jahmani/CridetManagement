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
import { IonicPage, NavController } from 'ionic-angular';
import { UserStoresFsRepository } from '../../FireStoreData/user-stores-fs-repository';
import { StoresFsRepository } from '../../FireStoreData/stores-fs-repository';
import { AuthService } from '../../app/core/index';
/**
 * Generated class for the UserStoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserStoresPage = (function () {
    function UserStoresPage(navCtrl, auth, userStoresFsRepository, storesFsRepository) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.userStoresFsRepository = userStoresFsRepository;
        this.storesFsRepository = storesFsRepository;
        this.userStores = this.userStoresFsRepository.FormatedList;
    }
    UserStoresPage.prototype.createNewStore = function () {
        var _this = this;
        return this.auth.user.take(1).subscribe(function (user) {
            return _this.storesFsRepository.createNewStore(user.uid);
        });
    };
    UserStoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserStoresPage');
    };
    return UserStoresPage;
}());
UserStoresPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-stores',
        templateUrl: 'user-stores.html',
    }),
    __metadata("design:paramtypes", [NavController,
        AuthService,
        UserStoresFsRepository,
        StoresFsRepository])
], UserStoresPage);
export { UserStoresPage };
//# sourceMappingURL=user-stores.js.map