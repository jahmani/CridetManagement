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
import { StorePathConfig } from './StorePathConfig';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider } from './t-catigories-fs-repository';
import 'rxjs/add/observable/combineLatest';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { AccountsBalanceFBRepository } from './account-balance-fb-repository';
import { ImagesFsRepository } from './images-fs-repository';
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var TransactionsFsRepository = /** @class */ (function (_super) {
    __extends(TransactionsFsRepository, _super);
    function TransactionsFsRepository(afs, activeStoreService, accountsRep, imagesFsRepository, tCatFsRep, balanceFsRep) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.Transactions) || this;
        _this.accountsRep = accountsRep;
        _this.imagesFsRepository = imagesFsRepository;
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
        var extendedTranses = Observable.combineLatest(transactionsMap, this.tCatFsRep.dataMap, this.imagesFsRepository.dataMap, function (transs, cats, images) {
            transs.forEach(function (trans) {
                trans.ext = trans.ext || {};
                trans.ext.catigory = cats.get(trans.data.catigoryId);
                if (trans.data.imageSrc && !trans.data.imageSrc.includes("//"))
                    trans.ext.imageFile = images.get(trans.data.imageSrc);
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
    TransactionsFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            ActiveStoreService,
            AccountsFsRepository,
            ImagesFsRepository,
            TCatigoriesFsRepositoryProvider,
            AccountsBalanceFBRepository])
    ], TransactionsFsRepository);
    return TransactionsFsRepository;
}(StoreDataFsRepository));
export { TransactionsFsRepository };
//# sourceMappingURL=transactions-fs-repository.js.map