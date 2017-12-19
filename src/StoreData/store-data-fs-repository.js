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
import { StorePathConfig } from './StorePathConfig';
import { FsRepository } from '../FireStoreData/fs-repository';
import { conatctPaths } from '../FireStoreData/util';
/*
  Generated class for the StoreDataLoggableFbRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
///@Injectable()
var StoreDataFsRepository = (function (_super) {
    __extends(StoreDataFsRepository, _super);
    function StoreDataFsRepository(afs, ass, dataSubPath) {
        var _this = _super.call(this, afs, conatctPaths(StorePathConfig.basePath, ass.activeStoreKey, dataSubPath)) || this;
        /* activeStoreInfoService.storeChange$.subscribe(()=>{
           super.initialize( activeStoreInfoService.ActiveStoreReference.child(dataSubPath));
         });
         */
        console.log('Hellooooo StoreDataLoggableFbRepository Provider');
        return _this;
    }
    return StoreDataFsRepository;
}(FsRepository));
export { StoreDataFsRepository };
//# sourceMappingURL=store-data-fs-repository.js.map