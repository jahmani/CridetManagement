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
import { Injectable } from "@angular/core";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { StorePathConfig } from "./StorePathConfig";
import { compareTimeStamp } from "../Util/compareDateString";
import { map } from "rxjs/operators/map";
var ProductsFsRepository = /** @class */ (function (_super) {
    __extends(ProductsFsRepository, _super);
    function ProductsFsRepository(afs, activeStoreService) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.ProductsInfo) || this;
        console.log('Hello ProductsFBRepository Provider');
        return _this;
    }
    Object.defineProperty(ProductsFsRepository.prototype, "FormatedList", {
        get: function () {
            return this.List().pipe(map(function (productsArray) {
                return productsArray.sort(function (a, b) {
                    return compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn);
                });
            }));
        },
        enumerable: true,
        configurable: true
    });
    ProductsFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            ActiveStoreService])
    ], ProductsFsRepository);
    return ProductsFsRepository;
}(StoreDataFsRepository));
export { ProductsFsRepository };
//# sourceMappingURL=products-fs-repository.js.map