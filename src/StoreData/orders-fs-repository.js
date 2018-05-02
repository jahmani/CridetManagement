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
import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { AccountsFsRepository } from "./accounts-fb-repository";
import { StorePathConfig } from "./StorePathConfig";
import "rxjs/add/observable/combineLatest";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { ImagesFsRepository } from "./images-fs-repository";
import { combineLatest } from "rxjs/operators/combineLatest";
import { map } from "rxjs/operators/map";
import { compareTimeStamp } from "../Util/compareDateString";
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var OrdersFsRepository = /** @class */ (function (_super) {
    __extends(OrdersFsRepository, _super);
    function OrdersFsRepository(afs, activeStoreService, accountsRep, imagesFsRepository) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.Orders) || this;
        _this.accountsRep = accountsRep;
        _this.imagesFsRepository = imagesFsRepository;
        console.log("Hello TransactionsFsRepository Provider");
        return _this;
    }
    OrdersFsRepository.prototype.forAccount = function (accountKey) {
        var OrdersColl = this.afs.collection(this.collection.ref.path, function (ref) {
            return ref.where("accountId", "==", accountKey);
        });
        // const transactionsList = super.snapList(transactionsColl);
        var ordersMap = _super.prototype.snapshotMap.call(this, OrdersColl);
        //return transactionsMap
        return ordersMap;
    };
    Object.defineProperty(OrdersFsRepository.prototype, "FormatedList", {
        get: function () {
            return this.List().pipe(
            /*  */
            combineLatest(this.accountsRep.dataMap, function (orders, accountsMap) {
                orders.forEach(function (order) {
                    order.ext = order.ext || {};
                    order.ext.account = accountsMap.get(order.data.accountId);
                });
                return orders;
            }), map(function (ordersArray) {
                return ordersArray.sort(function (a, b) {
                    return compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn);
                });
            }));
        },
        enumerable: true,
        configurable: true
    });
    OrdersFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            ActiveStoreService,
            AccountsFsRepository,
            ImagesFsRepository])
    ], OrdersFsRepository);
    return OrdersFsRepository;
}(StoreDataFsRepository));
export { OrdersFsRepository };
//# sourceMappingURL=orders-fs-repository.js.map