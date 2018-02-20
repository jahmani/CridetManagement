import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountsListPage } from '../pages/accounts-list/accounts-list';
import { TabServiceProvider } from '../providers/tab-service/tab-service';
import { AuthService } from './core/auth';
import { UserStoresService } from '../FireStoreData/user-stores-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest } from 'rxjs/operators/combineLatest';
var MyApp = /** @class */ (function () {
    function MyApp(tabService, authService, userStoresService, activeStoreService) {
        var _this = this;
        this.tabService = tabService;
        this.authService = authService;
        this.userStoresService = userStoresService;
        this.activeStoreService = activeStoreService;
        this.activeStoreService.activeStoreKey$.subscribe(function (key) { return _this.hasActiveStore = !!key; });
        this.subscription = this.authService.user.subscribe(function (user) {
            if (user) {
                _this.autherised = true;
                var extUserStore = _this.activeStoreService.activeStoreKey;
                if (extUserStore) {
                    _this.haseDefaultStore = true;
                    _this.hasActiveStore = true;
                    _this.activeStoreService.setActiveStoreKey(extUserStore.id);
                    _this.rootPage = "TabsPage";
                }
                else {
                    _this.haseDefaultStore = false;
                    _this.hasActiveStore = false;
                    _this.rootPage = "UserStoresPage";
                }
            }
            else {
                _this.autherised = false;
                _this.haseDefaultStore = false;
                _this.hasActiveStore = false;
                _this.activeStoreService.clearActiveStoreKey();
                _this.rootPage = "LoginPage";
            }
        });
        // used for an example of ngFor and navigation
        this.storePages = [
            //  { title: 'StoreUsersPage', component: "StoreUsersPage" , icon:"people" },
            { title: 'Accounts', component: "AccountsListPage", icon: "contacts" },
            { title: "StoreSettingsPage", component: "StoreSettingsPage", icon: "settings" },
            { title: "ImageGalleryPage", component: "ImageGalleryPage" }
        ];
        this.noUserPages = [
            { title: 'Login', component: "LoginPage", icon: "log-in" },
            { title: 'Signup', component: "SignupPage" }
        ];
        this.userPages = [
            { title: 'SignOut', component: "LoginPage", icon: "log-out" },
            { title: "UserStoresPage", component: "UserStoresPage" },
            { title: "ImageCropperPage", component: "ImageCropperPage", icon: "pricetags" },
        ];
        this.zombiedOwnerId = localStorage.getItem("firestore/[DEFAULT]/cridetmanagement/zombiedOwnerId");
    }
    MyApp.prototype.openStorePage = function (page) {
        // if have child naves (Tabs Navigation)
        if (this.nav.getActiveChildNavs().length != 0) {
            this.tabService.setTab(page);
        }
        else
            this.nav.setRoot("TabsPage", page);
    };
    MyApp.prototype.openNoUserPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openUserPage = function (page) {
        if (page.title == 'SignOut') {
            this.authService.signOut();
        }
        else
            this.nav.setRoot(page.component);
    };
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map