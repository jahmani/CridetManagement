var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { TCatigoriesFsRepositoryProvider, AccountsFsRepository } from '../../StoreData/index';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { map } from 'rxjs/Operators/map';
/**
 * Generated class for the AccountTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountTransactionsPage = /** @class */ (function () {
    function AccountTransactionsPage(navCtrl, navParams, alertController, transactionsRep, accountsRep, modalController, titleService, tCatigoriesFsRepositoryProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.transactionsRep = transactionsRep;
        this.accountsRep = accountsRep;
        this.modalController = modalController;
        this.titleService = titleService;
        this.accountId = this.navParams.get('accountId');
        this.transSnapshots = this.transactionsRep.forAccount(this.accountId);
        this.transSnapshotsArray = this.transSnapshots.pipe(map(function (m) { return m.toArray(); }));
        this.transSnapshotsArray.subscribe(console.log);
        this.accountsRep.getOnce(this.accountId).then(function (extAccount) {
            _this.account = extAccount.data;
        });
    }
    AccountTransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountTransactionsPage');
    };
    AccountTransactionsPage.prototype.presentEditTransactionModal = function (transSnapshot) {
        this.navCtrl.push("EditTransactionPage", { transSnapshot: transSnapshot });
        /*
            let editTransactionModal = this.modalController.create("EditTransactionPage", { transSnapshot });
            editTransactionModal.onDidDismiss(data => {
              console.log(data);
            });
             editTransactionModal.present();
             */
    };
    AccountTransactionsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.accountsRep.getOnce(this.accountId).then(function (extAccount) {
            if (_this.titleService) {
                _this.titleService.setNav(_this.navCtrl);
                _this.titleService.setTitle("حساب " + _this.account.name);
            }
        });
    };
    AccountTransactionsPage.prototype.onDelete = function (transSnapshot) {
        var _this = this;
        var alert = this.alertController.create({
            message: "Are u sure. deleting " + transSnapshot.data.ammount + " Transaction",
            title: "Deleting Transaction",
            buttons: [{
                    text: "Ok",
                    handler: function () { _this.transactionsRep.remove(transSnapshot); }
                },
                {
                    text: "Cancel"
                }]
        });
        alert.present();
    };
    AccountTransactionsPage.prototype.presentNewTransactionModal = function (type) {
        var date = new Date().toISOString();
        //    date = UTCToLocal(date)
        var newTransaction = {
            type: type,
            accountId: this.accountId,
            date: date
        };
        return this.presentEditTransactionModal({ id: null, data: newTransaction });
    };
    AccountTransactionsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-account-transactions',
            templateUrl: 'account-transactions.html',
        }),
        __param(6, Optional()),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            TransactionsFsRepository,
            AccountsFsRepository,
            ModalController,
            TitleServiceProvider,
            TCatigoriesFsRepositoryProvider])
    ], AccountTransactionsPage);
    return AccountTransactionsPage;
}());
export { AccountTransactionsPage };
//# sourceMappingURL=account-transactions.js.map