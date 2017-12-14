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
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/index';
/**
 * Generated class for the AccountTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountTransactionsPage = (function () {
    function AccountTransactionsPage(navCtrl, navParams, transactionsRep, modalController, tCatigoriesFsRepositoryProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionsRep = transactionsRep;
        this.modalController = modalController;
        this.accountId = this.navParams.get('accountId');
        this.transSnapshots = this.transactionsRep.forAccount(this.accountId);
        this.transSnapshotsArray = this.transSnapshots.map(function (m) { return m.toArray(); });
        this.transSnapshotsArray.subscribe(console.log);
    }
    AccountTransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountTransactionsPage');
    };
    AccountTransactionsPage.prototype.presentEditTransactionModal = function (transSnapshot) {
        var editTransactionModal = this.modalController.create("EditTransactionPage", { transSnapshot: transSnapshot });
        editTransactionModal.onDidDismiss(function (data) {
            console.log(data);
        });
        editTransactionModal.present();
    };
    AccountTransactionsPage.prototype.presentNewTransactionModal = function (type) {
        var newTransaction = {
            type: type,
            accountId: this.accountId,
            date: new Date(Date.now())
        };
        return this.presentEditTransactionModal({ id: null, data: newTransaction });
    };
    return AccountTransactionsPage;
}());
AccountTransactionsPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-account-transactions',
        templateUrl: 'account-transactions.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        TransactionsFsRepository,
        ModalController,
        TCatigoriesFsRepositoryProvider])
], AccountTransactionsPage);
export { AccountTransactionsPage };
//# sourceMappingURL=account-transactions.js.map