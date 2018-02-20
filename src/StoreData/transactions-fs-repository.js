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
import { Injectable } from '@angular/core';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { AccountsFsRepository } from './accounts-fb-repository';
import { StorePathConfig } from './StorePathConfig';
import { Transaction, Extended, ExtMap, CatTreeNodeExtension, ExtType } from '../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider } from './t-catigories-fs-repository';
import 'rxjs/add/observable/combineLatest';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { AccountsBalanceFBRepository } from './account-balance-fb-repository';
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
TransactionsFsRepository = /** @class */ (function (_super) {
    __extends(TransactionsFsRepository, _super);
    function TransactionsFsRepository(afs, activeStoreService, accountsRep, tCatFsRep, balanceFsRep) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.Transactions) || this;
        _this.accountsRep = accountsRep;
        _this.tCatFsRep = tCatFsRep;
        _this.balanceFsRep = balanceFsRep;
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
    TransactionsFsRepository.prototype.beforeTransactionUpdated = function (oldTransaction, newTransaction, newId) {
        var accountId = oldTransaction ? oldTransaction.data.accountId : newTransaction.data.accountId;
        var transactionId = oldTransaction ? oldTransaction.id : newId;
        var deltaAmmount = this.computeDeltaAmmount(oldTransaction, newTransaction);
        if (deltaAmmount != 0)
            return this.balanceFsRep.setAccountBalanceDirty(accountId, transactionId);
        else
            return Promise.resolve();
    };
    TransactionsFsRepository.prototype.saveNew = function (newItem, id) {
        var _this = this;
        id = id || this.getNewDocId();
        return this.beforeTransactionUpdated(null, newItem, id).then(function () {
            return _super.prototype.saveNew.call(_this, newItem, id).then(function () {
                return _this.afterTransactionUpdated(null, newItem);
            });
        });
    };
    TransactionsFsRepository.prototype.saveOld = function (editedItem) {
        var _this = this;
        return this.getOnce(editedItem.id).then(function (oldItem) {
            return _this.beforeTransactionUpdated(oldItem, editedItem).then(function () {
                return _super.prototype.saveOld.call(_this, editedItem).then(function () {
                    return _this.afterTransactionUpdated(oldItem, editedItem);
                });
            });
        });
    };
    TransactionsFsRepository.prototype.remove = function (removedItem) {
        var _this = this;
        return this.beforeTransactionUpdated(removedItem, null).then(function () {
            return _super.prototype.remove.call(_this, removedItem).then(function () {
                return _this.afterTransactionUpdated(removedItem, null);
            });
        });
    };
    TransactionsFsRepository.prototype.afterTransactionUpdated = function (oldTransaction, newTransaction) {
        var accountId = oldTransaction ? oldTransaction.data.accountId : newTransaction.data.accountId;
        var deltaAmmount = this.computeDeltaAmmount(oldTransaction, newTransaction);
        if (deltaAmmount != 0)
            return this.balanceFsRep.updateAccountBalanceAmmount(accountId, deltaAmmount);
        else
            return Promise.resolve();
    };
    TransactionsFsRepository.prototype.computeDeltaAmmount = function (oldTransaction, newTransaction) {
        var oldAmmount = oldTransaction ? oldTransaction.data.ammount * oldTransaction.data.type : 0;
        var newAmmount = newTransaction ? newTransaction.data.ammount * newTransaction.data.type : 0;
        var deltaAmmount = newAmmount - oldAmmount;
        return deltaAmmount;
    };
    return TransactionsFsRepository;
}(StoreDataFsRepository));
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export { TransactionsFsRepository };
//# sourceMappingURL=transactions-fs-repository.js.map