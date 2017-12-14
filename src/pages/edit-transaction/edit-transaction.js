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
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/index';
/**
 * Generated class for the EditTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTransactionPage = (function () {
    function EditTransactionPage(navCtrl, afsr, viewController, navParams, tCatsFSR) {
        this.navCtrl = navCtrl;
        this.afsr = afsr;
        this.viewController = viewController;
        this.navParams = navParams;
        this.tCatsFSR = tCatsFSR;
        this.transSnapshot = this.navParams.get('transSnapshot');
        this.transCatsRoot = this.tCatsFSR.treeRoot;
        this.transCatsMap = this.tCatsFSR.dataMap;
        console.log("LLLLLLLLLLLLLLLLLLLLLL");
        this.transCatsRoot.subscribe(console.log);
        this.accountId = this.transSnapshot.data.accountId;
    }
    EditTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTransactionPage');
    };
    EditTransactionPage.prototype.dismiss = function (data) {
        this.viewController.dismiss(data);
    };
    EditTransactionPage.prototype.onCancel = function () {
        return this.dismiss(null);
    };
    EditTransactionPage.prototype.onSave = function (transaction) {
        transaction.accountId = this.accountId;
        this.transSnapshot.data = transaction;
        if (!this.transSnapshot.id) {
            this.afsr.saveNew(this.transSnapshot).catch(function (err) {
                throw "Error saving";
            });
            this.dismiss(this.transSnapshot);
        }
        else {
            this.afsr.saveOld(this.transSnapshot).catch(function (error) {
                throw "Error saving";
            });
            this.dismiss(this.transSnapshot);
        }
    };
    return EditTransactionPage;
}());
EditTransactionPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-edit-transaction',
        templateUrl: 'edit-transaction.html',
    }),
    __metadata("design:paramtypes", [NavController,
        TransactionsFsRepository,
        ViewController,
        NavParams,
        TCatigoriesFsRepositoryProvider])
], EditTransactionPage);
export { EditTransactionPage };
//# sourceMappingURL=edit-transaction.js.map