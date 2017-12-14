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
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
/**
 * Generated class for the AccountsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsListPage = (function () {
    function AccountsListPage(navCtrl, afsr, modalController, alertController) {
        this.navCtrl = navCtrl;
        this.afsr = afsr;
        this.modalController = modalController;
        this.alertController = alertController;
        this.accounts = this.afsr.List();
        // this.accounts.subscribe(console.log)
    }
    AccountsListPage.prototype.showAccountTransactions = function (accSnapshot) {
        this.navCtrl.push("AccountTransactionsPage", { accountId: accSnapshot.id });
    };
    AccountsListPage.prototype.presentEditAccountModal = function (accSnapshot) {
        var editAcountModal = this.modalController.create("EditAccountPage", { accSnapshot: accSnapshot });
        editAcountModal.onDidDismiss(function (data) {
            console.log(data);
        });
        editAcountModal.present();
    };
    AccountsListPage.prototype.presentNewAccountModal = function () {
        return this.presentEditAccountModal({ id: null, data: {} });
    };
    AccountsListPage.prototype.onDelete = function (accSnapshot) {
        var _this = this;
        var alert = this.alertController.create({
            message: "Are u sure. deleting " + accSnapshot.data.name + " information",
            title: "Deleting Account Info",
            buttons: [{
                    text: "Ok",
                    handler: function () { _this.afsr.remove(accSnapshot); }
                },
                {
                    text: "Cancel"
                }]
        });
        alert.present();
    };
    AccountsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsListPage');
    };
    return AccountsListPage;
}());
AccountsListPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-accounts-list',
        templateUrl: 'accounts-list.html',
    }),
    __metadata("design:paramtypes", [NavController,
        AccountsFsRepository,
        ModalController,
        AlertController])
], AccountsListPage);
export { AccountsListPage };
//# sourceMappingURL=accounts-list.js.map