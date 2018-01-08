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
import { Injectable } from '@angular/core';
import { FsRepository } from './fs-repository';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../app/core/auth';
import { StoresFsRepository } from './stores-fs-repository';
import { conatctPaths } from './util';
import { mergeMap } from 'rxjs/Operators/mergeMap';
/*
  Generated class for the UserPendingStoresFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserPendingStoresFsRepositoryProvider = /** @class */ (function (_super) {
    __extends(UserPendingStoresFsRepositoryProvider, _super);
    function UserPendingStoresFsRepositoryProvider(afs, auth, storeInfoFsRepository) {
        var _this = _super.call(this, afs, conatctPaths("users", auth.currentUser.uid, "pendingStores")) || this;
        _this.storeInfoFsRepository = storeInfoFsRepository;
        console.log('Hello UserPendingStoresFsRepositoryProvider Provider');
        return _this;
    }
    Object.defineProperty(UserPendingStoresFsRepositoryProvider.prototype, "FormatedList", {
        get: function () {
            var _this = this;
            return this.List().pipe(mergeMap(function (stores) {
                return Promise.all(_this.getStores(_this, stores));
            }));
        },
        enumerable: true,
        configurable: true
    });
    UserPendingStoresFsRepositoryProvider.prototype.getStores = function (self, extUserStores) {
        return extUserStores.map(function (extUserStore) {
            return self.storeInfoFsRepository.getOnce(extUserStore.id).then(function (store) {
                extUserStore.ext.store = store.data;
                return extUserStore;
            });
        });
    };
    UserPendingStoresFsRepositoryProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            AuthService,
            StoresFsRepository])
    ], UserPendingStoresFsRepositoryProvider);
    return UserPendingStoresFsRepositoryProvider;
}(FsRepository));
export { UserPendingStoresFsRepositoryProvider };
//# sourceMappingURL=user-pending-stores-fs-repository.js.map