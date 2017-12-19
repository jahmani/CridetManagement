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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
/**
 * Generated class for the EditAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAccountPage = (function () {
    function EditAccountPage(navCtrl, afsr, viewController, navParams) {
        this.navCtrl = navCtrl;
        this.afsr = afsr;
        this.viewController = viewController;
        this.navParams = navParams;
        this.accSnapshot = this.navParams.get('accSnapshot');
        console.log(this.accSnapshot);
        this.accountId = this.accSnapshot.id;
    }
    EditAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAccountPage');
    };
    EditAccountPage.prototype.dismiss = function (data) {
        // let data = { account: this.account };
        this.viewController.dismiss(data);
    };
    EditAccountPage.prototype.onCancel = function () {
        return this.dismiss(null);
    };
    EditAccountPage.prototype.onSave = function (accSnapshot) {
        if (!this.accountId) {
            this.afsr.saveNew(accSnapshot).catch(function (err) {
                throw "Error saving";
            });
            this.dismiss(accSnapshot);
        }
        else {
            this.afsr.saveOld(accSnapshot).catch(function (error) {
                throw "Error saving";
            });
            this.dismiss(accSnapshot);
        }
    };
    EditAccountPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-account',
            templateUrl: 'edit-account.html',
        }),
        __metadata("design:paramtypes", [NavController,
            AccountsFsRepository,
            ViewController,
            NavParams])
    ], EditAccountPage);
    return EditAccountPage;
}());
export { EditAccountPage };
//# sourceMappingURL=edit-account.js.map