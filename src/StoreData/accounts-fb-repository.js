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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { ActiveStoreService } from './activeStore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AbstarctAccountsBalanceRepository = (function () {
    function AbstarctAccountsBalanceRepository() {
    }
    return AbstarctAccountsBalanceRepository;
}());
var AccountsBalanceFBRepository = (function (_super) {
    __extends(AccountsBalanceFBRepository, _super);
    function AccountsBalanceFBRepository(afs, activeStoreService) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.AccountsBalance) || this;
        //    super(af,activeStoreInfoService.ActiveStoreAccountsBalanceReference)
        console.log('Helloooooo AccountsBalance FBRepository Provider');
        return _this;
    }
    Object.defineProperty(AccountsBalanceFBRepository.prototype, "FormatedList", {
        get: function () {
            return this.List();
            /*
            .map(accountsArray => {
              return accountsArray.sort((a, b) => { return (b.lastEditedDate || 0) - (a.lastEditedDate || 0) })
            })
            */
        },
        enumerable: true,
        configurable: true
    });
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
AccountsBalanceFBRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFirestore,
        ActiveStoreService])
], AccountsBalanceFBRepository);
export { AccountsBalanceFBRepository };
var AbstarctAccountsRepository = (function () {
    function AbstarctAccountsRepository() {
    }
    return AbstarctAccountsRepository;
}());
var AccountsFsRepository = (function (_super) {
    __extends(AccountsFsRepository, _super);
    function AccountsFsRepository(afs, activeStoreService, accountsBalanceFBRepository) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.AccountsInfo) || this;
        _this.accountsBalanceFBRepository = accountsBalanceFBRepository;
        console.log('Hello AccountsFBRepository Provider');
        return _this;
    }
    Object.defineProperty(AccountsFsRepository.prototype, "FormatedList", {
        get: function () {
            return this.List();
            /*
            .combineLatest(this.accountsBalanceFBRepository.list, (accounts, balances) => {
              accounts.forEach(account => {
              //  account.$computedLastEditDate = account.lastEditedDate
                account.$balance = 0;
                let balanceObj = this.accountsBalanceFBRepository.getLoadedItem(account.$key);
                if (balanceObj) {
                  account.$balance = balanceObj.balance;
                  if (balanceObj.lastEditedDate > account.$computedLastEditDate)
                    account.$computedLastEditDate = balanceObj.lastEditedDate;
                }
              });
              return accounts;
            }).map(accountsArray => {
        
              return accountsArray.sort((a, b) => { return (b.$computedLastEditDate || 0) - (a.$computedLastEditDate || 0) })
            })
            */
        },
        enumerable: true,
        configurable: true
    });
    AccountsFsRepository.prototype.getUpdateBalanceObject = function (accountId, deltaAmmount, transactionId) {
        var updates = this.accountsBalanceFBRepository.getUpdateBalanceObject(accountId, deltaAmmount, transactionId);
        console.log(updates);
        return updates;
        /*
        return this.get(accountId).first().toPromise().then(account => {
          account.balance *= 1;
          account.balance += 1 * deltaAmmount;
          //return this.update(account);
          return this.getSaveOldObject(account)
        })
        */
    };
    return AccountsFsRepository;
}(StoreDataFsRepository));
AccountsFsRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFirestore,
        ActiveStoreService,
        AccountsBalanceFBRepository])
], AccountsFsRepository);
export { AccountsFsRepository };
//# sourceMappingURL=accounts-fb-repository.js.map