var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { TabServiceProvider } from '../providers/tab-service/tab-service';
import { AuthService } from './core/auth';
import { UserStoresService } from '../FireStoreData/user-stores-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
var MyApp = /** @class */ (function () {
    function MyApp(tabService, authService, userStoresService, activeStoreService) {
        var _this = this;
        this.tabService = tabService;
        this.authService = authService;
        this.userStoresService = userStoresService;
        this.activeStoreService = activeStoreService;
        this.autherised = false;
        this.haseDefaultStore = false;
        this.hasActiveStore = false;
        this.activeStoreService.activeStoreKey$.subscribe(function (key) { return _this.hasActiveStore = !!key; });
        this.subscription = this.authService.user.subscribe(function (user) {
            if (user) {
                _this.autherised = true;
                var extUserStoreKey = _this.activeStoreService.getDefaultStoreKey();
                if (extUserStoreKey) {
                    _this.haseDefaultStore = true;
                    _this.hasActiveStore = true;
                    _this.activeStoreService.setActiveStoreKey(extUserStoreKey);
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
            { title: 'OrdersListPage', component: "OrdersListPage", icon: "people" },
            { title: 'ProductsListPage', component: "ProductsListPage", icon: "people" },
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
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [TabServiceProvider,
            AuthService,
            UserStoresService,
            ActiveStoreService])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map