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
import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../interfaces/data-models";
import { first } from "rxjs/operators/first";
var UsersFsRepository = /** @class */ (function (_super) {
    __extends(UsersFsRepository, _super);
    function UsersFsRepository(afs) {
        var _this = _super.call(this, afs, "users") || this;
        _this.afs = afs;
        console.log('Hello StoreUsersFsRepository Provider');
        return _this;
    }
    UsersFsRepository.prototype.getByEmail = function (email) {
        var encodedEmal = email.replace('.', '|');
        return this.afs.doc("usersByEmail/" + encodedEmal).valueChanges().pipe(first()).toPromise();
    };
    return UsersFsRepository;
}(FsRepository));
export { UsersFsRepository };
//# sourceMappingURL=users-fs-repository.js.map