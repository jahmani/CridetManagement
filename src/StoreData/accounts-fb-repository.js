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
import { combineLatest } from 'rxjs/operators/combineLatest';
import { map } from 'rxjs/operators/map';
import { Injectable } from '@angular/core';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { AccountsBalanceFBRepository } from './account-balance-fb-repository';
import { DatePipe } from '@angular/common';
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AbstarctAccountsRepository = /** @class */ (function () {
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
            var _this = this;
            return this.List().pipe(
            /*  */
            combineLatest(this.accountsBalanceFBRepository.dataMap, function (accounts, balancesMap) {
                accounts.forEach(function (account) {
                    account.ext = account.ext || {};
                    account.ext.$balance = 0;
                    account.ext.$computedLastEditedOn = account.data.lastEditedOn;
                    var balanceObj = balancesMap.get(account.id);
                    if (balanceObj) {
                        account.ext.$balanceObj = balanceObj;
                        account.ext.$balance = balanceObj.data.balance;
                        if (_this.compareTimeStamp(account.ext.$computedLastEditedOn, balanceObj.data.lastEditedOn) > 0)
                            account.ext.$computedLastEditedOn = balanceObj.data.lastEditedOn;
                        //   if (balanceObj.lastEditedDate > account.$computedLastEditDate)
                        //     account.$computedLastEditDate = balanceObj.lastEditedDate;
                    }
                });
                return accounts;
            })).pipe(map(function (accountsArray) {
                return accountsArray.sort(function (a, b) {
                    return _this.compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn);
                });
            }));
        },
        enumerable: true,
        configurable: true
    });
    AccountsFsRepository.prototype.compareTimeStamp = function (d1, d2) {
        var firstDate = "";
        var secondDate = "";
        if (d1)
            firstDate = this.datePipe.transform(d1, "yyyy-MM-dd HH:mm:ss:SSS");
        if (d2)
            secondDate = this.datePipe.transform(d2, "yyyy-MM-dd HH:mm:ss:SSS");
        return secondDate.localeCompare(firstDate);
    };
    AccountsFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DatePipe,
            AngularFirestore,
            ActiveStoreService,
            AccountsBalanceFBRepository])
    ], AccountsFsRepository);
    return AccountsFsRepository;
}(StoreDataFsRepository));
export { AccountsFsRepository };
//# sourceMappingURL=accounts-fb-repository.js.map