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
var MyApp = (function () {
    function MyApp() {
        this.rootPage = HomePage;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'StoreUsersPage', component: "StoreUsersPage" },
            { title: 'Home', component: HomePage },
            { title: 'Login', component: "LoginPage" },
            { title: 'Signup', component: "SignupPage" },
            { title: 'Accounts', component: "AccountsListPage" },
            { title: "Cats", component: "TransactionCatsPage" },
            { title: "UserSettingsPage", component: "UserSettingsPage" }
            //  { title: "UserSettingsPage", component: "UserSettingsPage" }
            //  { title: "UserSettingsPage", component: "UserSettingsPage" }
            //  { title: "UserSettingsPage", component: "UserSettingsPage" }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map