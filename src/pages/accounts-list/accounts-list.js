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
import { IonicPage, NavController, ModalController, AlertController, ViewController, NavParams } from 'ionic-angular';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { combineLatest } from "rxjs/observable/combineLatest";
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { FormControl } from '@angular/forms';
/**
 * Generated class for the AccountsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsListPage = /** @class */ (function () {
    function AccountsListPage(navCtrl, viewCtrl, navParams, accountsFsRepository, modalController, alertController, titleService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.accountsFsRepository = accountsFsRepository;
        this.modalController = modalController;
        this.alertController = alertController;
        this.titleService = titleService;
        this.accountsFsRepository =
            this.accountsFsRepository || this.navParams.get("accountsFsRepository");
        this.accounts = this.accountsFsRepository.FormatedList;
        this.searchControl = new FormControl();
        // this.accounts.subscribe(console.log)
    }
    AccountsListPage.prototype.ionViewDidLoad = function () {
        //searchControl.valueChanges will not emit values untill the user make input
        //combineLatest will not emit values untill both ovseravables emit values
        //
        var initializedValueChanges = this.searchControl.valueChanges.pipe(debounceTime(700)).pipe(startWith(null));
        /*
        merged.subscribe(searcTerm => {
          console.log("merge Eimit", searcTerm)
        })
        */
        this.filteredAccounts = combineLatest(initializedValueChanges, this.accounts, function (searcTerm, extAccounts) {
            if (!searcTerm || !searcTerm.length)
                return extAccounts;
            return extAccounts.filter(function (extAccount) {
                return extAccount.data.name.includes(searcTerm)
                    || extAccount.data.city.includes(searcTerm);
            });
        });
        this.totalBalanceObj = this.filteredAccounts.pipe(map(function (extAccounts) {
            return extAccounts.reduce(function (prev, curr) {
                prev.balance += curr.ext.$balance ? curr.ext.$balance : 0;
                if (curr.ext.$balanceObj && curr.ext.$balanceObj.data.isDirty)
                    prev.isDirty = true;
                return prev;
            }, { balance: 0, isDirty: false });
        }));
    };
    AccountsListPage.prototype.onClick = function (extAccount) {
        var canSelect = this.navParams.get("canSelect");
        if (canSelect)
            this.selectAccount(extAccount);
        else
            this.showAccountTransactions(extAccount);
    };
    AccountsListPage.prototype.showAccountTransactions = function (accSnapshot) {
        this.navCtrl.push("AccountTransactionsPage", { accountId: accSnapshot.id });
    };
    AccountsListPage.prototype.selectAccount = function (extAccount) {
        this.viewCtrl.dismiss(extAccount);
    };
    AccountsListPage.prototype.invalidateBalance = function (accSnapshot) {
        if (accSnapshot.ext.$balanceObj.data.isDirty)
            return this.accountsFsRepository.setAccountBalanceInvalid(accSnapshot.id);
    };
    AccountsListPage.prototype.presentEditAccountModal = function (accSnapshot) {
        this.navCtrl.push("EditAccountPage", { accSnapshot: accSnapshot });
    };
    AccountsListPage.prototype.presentNewAccountModal = function () {
        return this.presentEditAccountModal({ id: null, data: {} });
    };
    AccountsListPage.prototype.onDelete = function (accSnapshot) {
        var _this = this;
        var alert = this.alertController.create({
            message: "Are u sure. deleting " + accSnapshot.data.name + " information",
            title: "Deleting AccountInfo Info",
            buttons: [{
                    text: "Ok",
                    handler: function () { _this.accountsFsRepository.remove(accSnapshot); }
                },
                {
                    text: "Cancel"
                }]
        });
        alert.present();
    };
    AccountsListPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad AccountsListPage');
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("حساب ");
        }
    };
    AccountsListPage = __decorate([
        IonicPage({ segment: 'accounts-list' }),
        Component({
            selector: 'page-accounts-list',
            templateUrl: 'accounts-list.html',
        }),
        __param(3, Optional()),
        __param(6, Optional()),
        __metadata("design:paramtypes", [NavController,
            ViewController,
            NavParams,
            AccountsFsRepository,
            ModalController,
            AlertController,
            TitleServiceProvider])
    ], AccountsListPage);
    return AccountsListPage;
}());
export { AccountsListPage };
//# sourceMappingURL=accounts-list.js.map