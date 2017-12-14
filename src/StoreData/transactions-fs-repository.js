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
import { StoreDataFsRepository } from './store-data-fs-repository';
import { AccountsFsRepository } from './accounts-fb-repository';
import { ActiveStoreService } from './activeStore';
import { StorePathConfig } from './StorePathConfig';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider } from './t-catigories-fs-repository';
import 'rxjs/add/observable/combineLatest';
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var TransactionsFsRepository = (function (_super) {
    __extends(TransactionsFsRepository, _super);
    function TransactionsFsRepository(afs, activeStoreService, accountsRep, tCatFsRep) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.Transactions) || this;
        _this.accountsRep = accountsRep;
        _this.tCatFsRep = tCatFsRep;
        console.log('Hello TransactionsFsRepository Provider');
        return _this;
    }
    TransactionsFsRepository.prototype.forAccount = function (accountKey) {
        var transactionsColl = this.afs.collection(this.collection.ref.path, function (ref) { return ref.where('accountId', '==', accountKey); });
        // const transactionsList = super.snapList(transactionsColl);
        var transactionsMap = _super.prototype.snapshotMap.call(this, transactionsColl);
        //return transactionsMap
        return this.extendedDataMap(transactionsMap);
    };
    /*
    FormateList(list:Observable<DataSnapshot<Transaction>[]>): Observable<any[]> {
      const self = this;
      Observable.combineLatest(list,this.tCatFsRep.list,(transs,cats)=>{
        transs.map((trans)=>{
          trans.data.$ext.catigory = cats.get(trans.data.catigoryId)
        })
      })
      const res = list;
      return res;
    }
  */
    TransactionsFsRepository.prototype.extendedDataMap = function (transactionsMap) {
        var extendedTranses = Observable.combineLatest(transactionsMap, this.tCatFsRep.dataMap, function (transs, cats) {
            transs.forEach(function (trans) {
                trans.ext = trans.ext || {};
                trans.ext.catigory = cats.get(trans.data.catigoryId);
            });
            return transs;
        });
        return extendedTranses;
    };
    return TransactionsFsRepository;
}(StoreDataFsRepository));
TransactionsFsRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFirestore,
        ActiveStoreService,
        AccountsFsRepository,
        TCatigoriesFsRepositoryProvider])
], TransactionsFsRepository);
export { TransactionsFsRepository };
//# sourceMappingURL=transactions-fs-repository.js.map