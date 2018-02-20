import { Extended, UserStore } from "../interfaces/data-models";
import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../app/core/auth";
import { conatctPaths } from "./util";
import { StoresFsRepository } from "./stores-fs-repository";
import { Observable } from "rxjs/Observable";
import { mergeMap } from 'rxjs/Operators/mergeMap';
import { map } from "rxjs/operators/map";
var UserStoresService = /** @class */ (function () {
    function UserStoresService(afs, auth, storeInfoFsRepository) {
        this.storeInfoFsRepository = storeInfoFsRepository;
        console.log('Hello UserStoresFsRepository Provider');
        this.fsRep$ = auth.user.pipe(map(function (user) {
            if (user)
                return new FsRepository(afs, conatctPaths("users", user.uid, "stores"));
            else
                return null;
        }));
    }
    UserStoresService.prototype.List = function () {
        return this.fsRep$.pipe(mergeMap(function (fsRep) { return fsRep && fsRep.List(); }));
    };
    Object.defineProperty(UserStoresService.prototype, "FormatedList", {
        get: function () {
            var _this = this;
            return this.List().pipe(mergeMap(function (stores) {
                return Promise.all(stores && _this.getStores(stores));
            }));
        },
        enumerable: true,
        configurable: true
    });
    UserStoresService.prototype.getStores = function (extUserStores) {
        var _this = this;
        return extUserStores.map(function (extUserStore) {
            return _this.storeInfoFsRepository.getOnce(extUserStore.id).then(function (store) {
                extUserStore.ext.store = store.data;
                return extUserStore;
            });
        });
    };
    UserStoresService.prototype.getSingleOrDefault = function () {
        return this.FormatedList.map(function (extUserStores) {
            if (extUserStores.length == 1)
                return extUserStores[0];
            extUserStores.forEach(function (extUserStore) {
                if (extUserStore.data.isDefault)
                    return extUserStore;
            });
            return null;
        });
    };
    return UserStoresService;
}());
export { UserStoresService };
//# sourceMappingURL=user-stores-fs-repository.js.map