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
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/operators/combineLatest';
import { map } from 'rxjs/operators/map';
import { AccountInfo, CatTreeNodeExtension, ExtType, Extended, AccountBalance } from '../interfaces/data-models';
import { Injectable } from '@angular/core';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { AccountsBalanceFBRepository } from './account-balance-fb-repository';
import { DatePipe } from '@angular/common';
import { compareTimeStamp } from '../Util/compareDateString';
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
AbstarctAccountsRepository = /** @class */ (function () {
    function AbstarctAccountsRepository() {
    }
    return AbstarctAccountsRepository;
}());
var AccountsFsRepository = /** @class */ (function (_super) {
    __extends(AccountsFsRepository, _super);
    function AccountsFsRepository(datePipe, afs, activeStoreService, accountsBalanceFBRepository) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.AccountsInfo) || this;
        _this.datePipe = datePipe;
        _this.accountsBalanceFBRepository = accountsBalanceFBRepository;
        console.log('Hello AccountsFBRepository Provider');
        return _this;
    }
    Object.defineProperty(AccountsFsRepository.prototype, "FormatedList", {
        get: function () {
            return this.List().pipe(/*  */
            combineLatest(this.accountsBalanceFBRepository.dataMap, function (accounts, balancesMap) {
                accounts.forEach(function (account) {
                    account.ext = account.ext || {};
                    account.ext.$balance = 0;
                    account.ext.$computedLastEditedOn = account.data.lastEditedOn;
                    var balanceObj = balancesMap.get(account.id);
                    if (balanceObj) {
                        account.ext.$balanceObj = balanceObj;
                        account.ext.$balance = balanceObj.data.balance;
                        if (compareTimeStamp(account.ext.$computedLastEditedOn, balanceObj.data.lastEditedOn) > 0)
                            account.ext.$computedLastEditedOn = balanceObj.data.lastEditedOn;
                        //   if (balanceObj.lastEditedDate > account.$computedLastEditDate)
                        //     account.$computedLastEditDate = balanceObj.lastEditedDate;
                    }
                });
                return accounts;
            })).pipe(map(function (accountsArray) {
                return accountsArray.sort(function (a, b) {
                    return compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn);
                });
            }));
        },
        enumerable: true,
        configurable: true
    });
    AccountsFsRepository.prototype.getExtended = function (accountId) {
        var account = _super.prototype.get.call(this, accountId);
        var balance = this.accountsBalanceFBRepository.get(accountId);
        var extended = account.pipe(combineLatest(balance, function (extAccount, extBalance) {
            extAccount.ext = extAccount.ext || {};
            extAccount.ext.$balanceObj = extBalance;
            return extAccount;
        }));
        return extended;
    };
    return AccountsFsRepository;
}(StoreDataFsRepository));
export { AccountsFsRepository };
//# sourceMappingURL=accounts-fb-repository.js.map