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
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { UsersFsRepository } from '../FireStoreData/users-fs-repository';
import { mergeMap } from 'rxjs/Operators/mergeMap';
/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var StoreUsersFsRepository = /** @class */ (function (_super) {
    __extends(StoreUsersFsRepository, _super);
    function StoreUsersFsRepository(afs, activeStoreService, usersFsRepository) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.UsersInfo) || this;
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
                extStoreUser.data.user = user.data;
                return extStoreUser;
            });
        });
    };
    StoreUsersFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            ActiveStoreService,
            UsersFsRepository])
    ], StoreUsersFsRepository);
    return StoreUsersFsRepository;
}(StoreDataFsRepository));
export { StoreUsersFsRepository };
//# sourceMappingURL=store-users-fb-repository.js.map