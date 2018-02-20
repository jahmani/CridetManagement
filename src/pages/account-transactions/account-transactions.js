var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { Transaction, Extended, ExtMap, AccountInfo } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { map } from 'rxjs/Operators/map';
import { UTCToLocal } from '../../Util/dateTime';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/t-catigories-fs-repository';
import { combineLatest } from 'rxjs/operators/combineLatest';
import { compareTimeStamp } from '../../Util/compareDateString';
/**
 * Generated class for the AccountTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountTransactionsPage = /** @class */ (function () {
    function AccountTransactionsPage(navCtrl, navParams, alertController, transactionsRep, accountsRep, modalController, titleService, tCatigoriesFsRepositoryProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.transactionsRep = transactionsRep;
        this.accountsRep = accountsRep;
        this.modalController = modalController;
        this.titleService = titleService;
        this.accountId = this.navParams.get('accountId');
        this.transSnapshots = this.transactionsRep.forAccount(this.accountId);
        this.transSnapshotsArray = this.transSnapshots.pipe(map(function (m) {
            return m.toArray().sort(function (a, b) {
                return Date.parse(a.data.date) - Date.parse(b.data.date);
            });
        }));
        this.transSnapshotsArray.subscribe(console.log);
        this.extAccount = this.accountsRep.getExtended(this.accountId);
        this.transSnapshotsArray = this.transSnapshotsArray.pipe(combineLatest(this.extAccount, function (extTranses, extAccount) {
            var currentBalance = extAccount.ext.$balanceObj.data ? extAccount.ext.$balanceObj.data.balance : 0;
            var transes = extTranses.sort(function (a, b) {
                return compareTimeStamp(a.data.date, b.data.date);
            });
            transes.forEach(function (trans) {
                trans.ext.currentBalance = currentBalance;
                currentBalance -= (trans.data.type * trans.data.ammount);
            });
            return transes;
        }));
    }
    AccountTransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountTransactionsPage');
    };
    AccountTransactionsPage.prototype.presentEditTransactionModal = function (transSnapshot) {
        this.navCtrl.push("EditTransactionPage", { transSnapshot: transSnapshot });
    };
    AccountTransactionsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.accountsRep.getOnce(this.accountId).then(function (extAccount) {
            if (_this.titleService) {
                _this.titleService.setNav(_this.navCtrl);
                _this.titleService.setTitle("حساب " + extAccount.data.name);
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
    /**
     * Generated class for the AccountTransactionsPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    AccountTransactionsPage = __decorate([
        IonicPage(),
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