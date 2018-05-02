var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsFsRepository } from "./accounts-fb-repository";
import { TransactionsFsRepository } from "./transactions-fs-repository";
import { TCatigoriesFsRepositoryProvider } from "./t-catigories-fs-repository";
import { StoreUsersFsRepository } from "./store-users-fb-repository";
import { AccountsBalanceFBRepository } from "./account-balance-fb-repository";
import { ImagesFsRepository } from "./images-fs-repository";
import { ProductsFsRepository } from "./products-fs-repository";
var StoreDataModule = /** @class */ (function () {
    function StoreDataModule() {
    }
    StoreDataModule = __decorate([
        NgModule({
            declarations: [],
            imports: [CommonModule],
            exports: [],
            providers: [
                AccountsFsRepository,
                AccountsBalanceFBRepository,
                TransactionsFsRepository,
                ImagesFsRepository,
                TCatigoriesFsRepositoryProvider,
                StoreUsersFsRepository,
                ProductsFsRepository
            ]
        })
    ], StoreDataModule);
    return StoreDataModule;
}());
export { StoreDataModule };
//# sourceMappingURL=storeData.module.js.map