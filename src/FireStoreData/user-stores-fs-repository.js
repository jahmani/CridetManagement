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
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../app/core/auth";
import { conatctPaths } from "./util";
import { StoresFsRepository } from "./stores-fs-repository";
import { mergeMap } from 'rxjs/Operators/mergeMap';
var UserStoresFsRepository = /** @class */ (function (_super) {
    __extends(UserStoresFsRepository, _super);
    function UserStoresFsRepository(afs, auth, storeInfoFsRepository) {
        var _this = _super.call(this, afs, conatctPaths("users", auth.currentUser.uid, "stores")) || this;
        _this.storeInfoFsRepository = storeInfoFsRepository;
        console.log('Hello UserStoresFsRepository Provider');
        return _this;
    }
    Object.defineProperty(UserStoresFsRepository.prototype, "FormatedList", {
        get: function () {
            var _this = this;
            return this.List().pipe(mergeMap(function (stores) {
                return Promise.all(_this.getStores(stores));
            }));
        },
        enumerable: true,
        configurable: true
    });
    UserStoresFsRepository.prototype.getStores = function (extUserStores) {
        var _this = this;
        return extUserStores.map(function (extUserStore) {
            return _this.storeInfoFsRepository.getOnce(extUserStore.id).then(function (store) {
                extUserStore.data.store = store.data.storeInfo;
                return extUserStore;
            });
        });
    };
    UserStoresFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore, AuthService, StoresFsRepository])
    ], UserStoresFsRepository);
    return UserStoresFsRepository;
}(FsRepository));
export { UserStoresFsRepository };
//# sourceMappingURL=user-stores-fs-repository.js.map