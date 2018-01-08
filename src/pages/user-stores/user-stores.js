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
import { UserStoresService } from '../../FireStoreData/user-stores-fs-repository';
import { StoresFsRepository } from '../../FireStoreData/stores-fs-repository';
import { ActiveStoreService } from '../../FireStoreData/activeStore';
import { NavController, IonicPage } from 'ionic-angular';
import { take } from 'rxjs/operators/take';
import { AuthService } from '../../app/core/auth';
import { UserPendingStoresFsRepositoryProvider } from '../../FireStoreData/user-pending-stores-fs-repository';
import { InvitesFsRepository } from '../../FireStoreData/invites-fs-repository';
/**
 * Generated class for the UserStoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserStoresPage = /** @class */ (function () {
    function UserStoresPage(navCtrl, auth, userStoresFsRepository, userPendingStoresFsRepository, storesFsRepository, invitesFsRepository, activeStoreServise) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.userStoresFsRepository = userStoresFsRepository;
        this.userPendingStoresFsRepository = userPendingStoresFsRepository;
        this.storesFsRepository = storesFsRepository;
        this.invitesFsRepository = invitesFsRepository;
        this.activeStoreServise = activeStoreServise;
        this.userStores = this.userStoresFsRepository.FormatedList;
        this.userPendingStores = this.userPendingStoresFsRepository.FormatedList;
    }
    UserStoresPage.prototype.createNewStore = function () {
        var _this = this;
        return this.auth.user.pipe(take(1)).subscribe(function (user) {
            return _this.storesFsRepository.createNewStore(user.uid);
        });
    };
    UserStoresPage.prototype.onStoreSelected = function (extStore) {
        this.activeStoreServise.activeStoreKey = extStore.id;
        var accountsPage = { title: 'Accounts', component: 'AccountsListPage' };
        this.navCtrl.setRoot("TabsPage", accountsPage);
    };
    UserStoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserStoresPage');
    };
    UserStoresPage.prototype.accept = function (inviteId) {
        this.invitesFsRepository.accpetInvite(inviteId);
    };
    UserStoresPage.prototype.reject = function (inviteId) {
        this.invitesFsRepository.rejectInvite(inviteId);
    };
    UserStoresPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-stores',
            templateUrl: 'user-stores.html',
        }),
        __metadata("design:paramtypes", [NavController,
            AuthService,
            UserStoresService,
            UserPendingStoresFsRepositoryProvider,
            StoresFsRepository,
            InvitesFsRepository,
            ActiveStoreService])
    ], UserStoresPage);
    return UserStoresPage;
}());
export { UserStoresPage };
//# sourceMappingURL=user-stores.js.map