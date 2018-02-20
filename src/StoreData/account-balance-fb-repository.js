var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AngularFirestore } from 'angularfire2/firestore';
import { AccountBalance } from './../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { firestore } from 'firebase';
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var /*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
AccountsBalanceFBRepository = /** @class */ (function (_super) {
    __extends(AccountsBalanceFBRepository, _super);
    function AccountsBalanceFBRepository(afs, activeStoreService) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.AccountsBalance) || this;
        _this.activeStoreService = activeStoreService;
        //    super(af,activeStoreInfoService.ActiveStoreAccountsBalanceReference)
        console.log('Helloooooo AccountsBalance FBRepository Provider');
        return _this;
    }
    Object.defineProperty(AccountsBalanceFBRepository.prototype, "FormatedList", {
        get: function () {
            return this.List();
        },
        enumerable: true,
        configurable: true
    });
    AccountsBalanceFBRepository.prototype.setAccountBalanceInvalid = function (accountId) {
        var invalidFlagpath = "/versions/v4/stores/" + this.activeStoreService.activeStoreKey + "/accountsBalance/" + accountId + "/flags/invalid";
        var invalidFlagRef = firestore().doc(invalidFlagpath);
        firestore().runTransaction(function (dbTransaction) {
            return dbTransaction.get(invalidFlagRef).then(function (docSnapShot) {
                if (docSnapShot.exists)
                    return;
                else
                    dbTransaction.set(invalidFlagRef, { invalid: true });
            }).then(function () {
                console.log("setAccountBalanceInvalid Transaction successfully committed!");
            }).catch(function (error) {
                console.log("setAccountBalanceInvalid Transaction failed: ", error);
            });
        });
    };
    AccountsBalanceFBRepository.prototype.setAccountBalanceDirty = function (accountId, transactionID) {
        var _this = this;
        return this.getOrCreate(accountId).then(function (extBalance) {
            var isNewBalanceDoc = false;
            if (!extBalance.data) {
                extBalance.data = {};
                isNewBalanceDoc = true;
            }
            if (extBalance.data.isDirty)
                return Promise.reject("balance already dirty");
            extBalance.data.isDirty = true;
            extBalance.data.lastTransactionId = transactionID;
            return isNewBalanceDoc ? _this.saveNew(extBalance, extBalance.id) : _this.saveOld(extBalance);
        });
    };
    AccountsBalanceFBRepository.prototype.updateAccountBalanceAmmount = function (accountId, deltaAmmount) {
        var _this = this;
        return this.getOnce(accountId).then(function (extBalance) {
            if (!extBalance.data || !extBalance.data.isDirty)
                return Promise.reject("balance is not dirty");
            extBalance.data.isDirty = false;
            if (isNaN(extBalance.data.balance))
                extBalance.data.balance = 0;
            extBalance.data.balance += deltaAmmount;
            return _this.saveOld(extBalance);
        });
    };
    AccountsBalanceFBRepository.prototype.getUpdateBalanceObject = function (accountId, deltaAmmount, transactionID) {
        /*
            return this.get(accountId).first().toPromise().then(accountBalance => {
              let updatesObject = {};
              if (!(<any>accountBalance).$exists()) {
                accountBalance = new AccountBalance();
                accountBalance.balance = deltaAmmount;
                accountBalance.lastEditedTransactionId = transactionID;
                updatesObject = this.getSaveNewObject(accountBalance, accountId);
        
              }
              else {
                accountBalance.balance *= 1;
                accountBalance.balance += 1 * deltaAmmount;
                accountBalance.lastEditedTransactionId = transactionID;
                updatesObject = this.getSaveOldObject(accountBalance)
              }
              return updatesObject;
            })
            */
        throw "not implemented ";
    };
    return AccountsBalanceFBRepository;
}(StoreDataFsRepository));
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export { AccountsBalanceFBRepository };
//# sourceMappingURL=account-balance-fb-repository.js.map