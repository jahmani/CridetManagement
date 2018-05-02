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
import { StorePathConfig } from "./StorePathConfig";
import "rxjs/add/observable/combineLatest";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { combineLatest } from "rxjs/operators/combineLatest";
import { map } from "rxjs/operators/map";
import { compareTimeStamp } from "../Util/compareDateString";
import { OrdersFsRepository } from "./orders-fs-repository";
import { ProductsFsRepository } from "./products-fs-repository";
/*
  Generated class for the OrderPLLinesFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PLLinesFsRepository = /** @class */ (function (_super) {
    __extends(PLLinesFsRepository, _super);
    function PLLinesFsRepository(afs, activeStoreService, ordersRep, productsRep) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.OrderPLLines) || this;
        _this.ordersRep = ordersRep;
        _this.productsRep = productsRep;
        console.log("Hello OrderPLLinesPLLinesFsRepository Provider");
        return _this;
    }
    PLLinesFsRepository.prototype.forOrder = function (orderKey) {
        var OrderPLLinesColl = this.afs.collection(this.collection.ref.path, function (ref) {
            return ref.where("orderId", "==", orderKey);
        });
        // const transactionsList = super.snapList(transactionsColl);
        var orderPLLinesMap = _super.prototype.snapList.call(this, OrderPLLinesColl);
        //return transactionsMap
        return this.formateList(orderPLLinesMap);
    };
    Object.defineProperty(PLLinesFsRepository.prototype, "FormatedList", {
        get: function () {
            return this.formateList(this.List());
        },
        enumerable: true,
        configurable: true
    });
    PLLinesFsRepository.prototype.formateList = function (list) {
        return list.pipe(
        /*  */
        combineLatest(this.productsRep.dataMap, function (orderPLLines, productsMap) {
            orderPLLines.forEach(function (orderPLLine) {
                orderPLLine.ext = orderPLLine.ext || {};
                orderPLLine.ext.Product = productsMap.get(orderPLLine.data.productId);
            });
            return orderPLLines;
        }), map(function (orderPLLinesArray) {
            return orderPLLinesArray.sort(function (a, b) {
                return compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn);
            });
        }));
    };
    PLLinesFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            ActiveStoreService,
            OrdersFsRepository,
            ProductsFsRepository])
    ], PLLinesFsRepository);
    return PLLinesFsRepository;
}(StoreDataFsRepository));
export { PLLinesFsRepository };
//# sourceMappingURL=orderPLLines-fs-repository.js.map