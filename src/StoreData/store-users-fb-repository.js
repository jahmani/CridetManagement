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
import { AccountBalance, StoreUser, UserStore } from './../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { AccountInfo, User, Extended } from '../interfaces/data-models';
import { Injectable } from '@angular/core';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { FsRepository } from '../FireStoreData/fs-repository';
import { UsersFsRepository } from '../FireStoreData/users-fs-repository';
import { mergeMap } from 'rxjs/Operators/mergeMap';
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
StoreUsersFsRepository = /** @class */ (function (_super) {
    __extends(StoreUsersFsRepository, _super);
    function StoreUsersFsRepository(afs, activeStoreService, usersFsRepository) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.Users) || this;
        _this.usersFsRepository = usersFsRepository;
        console.log('Hello StoreUsersFsRepository Provider');
        return _this;
    }
    Object.defineProperty(StoreUsersFsRepository.prototype, "FormatedList", {
        get: function () {
            var _this = this;
            return this.List().pipe(mergeMap(function (users) {
                return Promise.all(_this.getUsers(users));
            }));
        },
        enumerable: true,
        configurable: true
    });
    StoreUsersFsRepository.prototype.getUsers = function (extUsers) {
        var _this = this;
        return extUsers.map(function (extStoreUser) {
            return _this.usersFsRepository.getOnce(extStoreUser.id).then(function (user) {
                extStoreUser.ext = extStoreUser.ext || {};
                extStoreUser.ext.user = user.data;
                return extStoreUser;
            });
        });
    };
    return StoreUsersFsRepository;
}(StoreDataFsRepository));
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export { StoreUsersFsRepository };
//# sourceMappingURL=store-users-fb-repository.js.map