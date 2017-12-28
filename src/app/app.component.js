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
import { HomePage } from '../pages/home/home';
import { TabServiceProvider } from '../providers/tab-service/tab-service';
var MyApp = /** @class */ (function () {
    function MyApp(tabService) {
        this.tabService = tabService;
        this.rootPage = "TabsPage";
        // used for an example of ngFor and navigation
        this.storePages = [
            { title: 'StoreUsersPage', component: "StoreUsersPage", icon: "people" },
            { title: 'Home', component: HomePage, icon: "home" },
            { title: 'Accounts', component: "AccountsListPage", icon: "contacts" },
            { title: "Cats", component: "TransactionCatsPage", icon: "pricetags" },
            { title: "UserSettingsPage", component: "UserSettingsPage", icon: "settings" },
        ];
        this.userPages = [
            { title: 'Login', component: "LoginPage" },
            { title: 'Signup', component: "SignupPage" },
            { title: "UserStoresPage", component: "UserStoresPage" }
            //  { title: "UserSettingsPage", component: "UserSettingsPage" }
            //  { title: "UserSettingsPage", component: "UserSettingsPage" }
        ];
        this.zombiedOwnerId = localStorage.getItem("firestore/[DEFAULT]/cridetmanagement/zombiedOwnerId");
    }
    MyApp.prototype.openStorePage = function (page) {
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNavs()) {
            this.tabService.setTab(page);
        }
        else
            this.nav.setRoot("TabsPage", page);
    };
    MyApp.prototype.openUserPage = function (page) {
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
        __metadata("design:paramtypes", [TabServiceProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map