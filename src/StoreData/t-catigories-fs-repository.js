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
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { TransactionCatigory, Extended, ExtMap } from '../interfaces/data-models';
import { mapToTree } from './util';
import { Observable } from 'rxjs/Observable';
import { publishReplay } from 'rxjs/operators/publishReplay';
import { refCount } from 'rxjs/operators/refCount';
import { map } from 'rxjs/operators/map';
import { ActiveStoreService } from '../FireStoreData/activeStore';
/*
  Generated class for the TCatigoriesFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var /*
  Generated class for the TCatigoriesFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
TCatigoriesFsRepositoryProvider = /** @class */ (function (_super) {
    __extends(TCatigoriesFsRepositoryProvider, _super);
    function TCatigoriesFsRepositoryProvider(afs, activeStoreService) {
        var _this = _super.call(this, afs, activeStoreService, StorePathConfig.TransactionCatigories) || this;
        _this.treeRoot = _this.dataMap.pipe(map(function (tCatigoriesMap) {
            return mapToTree(tCatigoriesMap);
        }), publishReplay(1), refCount());
        console.log('Helloooooo TCatigoriesFsRepositoryProvider FBRepository Provider');
        return _this;
    }
    return TCatigoriesFsRepositoryProvider;
}(StoreDataFsRepository));
/*
  Generated class for the TCatigoriesFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export { TCatigoriesFsRepositoryProvider };
//# sourceMappingURL=t-catigories-fs-repository.js.map