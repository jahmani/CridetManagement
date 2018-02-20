import { AuthService } from './../../app/core/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var HomePage = /** @class */ (function () {
    function HomePage(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goLogInPage = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map