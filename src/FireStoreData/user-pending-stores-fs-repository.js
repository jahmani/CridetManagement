import { Injectable } from '@angular/core';
import { FsRepository } from './fs-repository';
import { UserStore, Extended } from '../interfaces/data-models';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../app/core/auth';
import { StoresFsRepository } from './stores-fs-repository';
import { conatctPaths } from './util';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/Operators/mergeMap';
import { map } from 'rxjs/operators/map';
/*
  Generated class for the UserPendingStoresFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var /*
  Generated class for the UserPendingStoresFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
UserPendingStoresFsRepositoryProvider = /** @class */ (function () {
    function UserPendingStoresFsRepositoryProvider(afs, auth, storeInfoFsRepository) {
        //   super(afs, conatctPaths("users", auth.currentUser.uid, "pendingStores"));
        this.storeInfoFsRepository = storeInfoFsRepository;
        console.log('Hello UserPendingStoresFsRepositoryProvider Provider');
        this.fsRep$ = auth.user.pipe(map(function (user) {
            if (user)
                return new FsRepository(afs, conatctPaths("users", user.uid, "pendingStores"));
            else
                return null;
        }));
    }
    UserPendingStoresFsRepositoryProvider.prototype.List = function () {
        return this.fsRep$.pipe(mergeMap(function (fsRep) { return fsRep && fsRep.List(); }));
    };
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
    return UserPendingStoresFsRepositoryProvider;
}());
/*
  Generated class for the UserPendingStoresFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export { UserPendingStoresFsRepositoryProvider };
//# sourceMappingURL=user-pending-stores-fs-repository.js.map