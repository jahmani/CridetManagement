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
import { StorePathConfig } from "../StoreData/StorePathConfig";
import * as firebase from "firebase";
var StoresFsRepository = /** @class */ (function (_super) {
    __extends(StoresFsRepository, _super);
    function StoresFsRepository(afs) {
        var _this = _super.call(this, afs, StorePathConfig.basePath) || this;
        console.log('Hello StoreUsersFsRepository Provider');
        return _this;
    }
    StoresFsRepository.prototype.createNewStore = function (ownerUid, storeName) {
        if (storeName === void 0) { storeName = "new Store"; }
        var storeInfo = { name: storeName };
        var storeUser = {
            canRead: true,
            canWrite: true,
            isEnabled: true,
            role: "owner"
        };
        var batch = firebase.firestore().batch();
        var storeDoc = firebase.firestore().collection(StorePathConfig.basePath).doc();
        var storeId = storeDoc.id;
        var userDoc = firebase.firestore().doc("users/" + ownerUid);
        var storeUserDoc = storeDoc.collection("users").doc(ownerUid);
        var userStoreDoc = userDoc.collection("stores").doc(storeId);
        batch.set(storeDoc, { storeInfo: storeInfo });
        batch.set(storeUserDoc, storeUser);
        batch.set(userStoreDoc, {});
        var storeTransactionCatsColl = storeDoc.collection("transactionCats");
        var proms1 = this.getTransactionCatsData().then(function (docSnapshots) {
            for (var _i = 0, docSnapshots_1 = docSnapshots; _i < docSnapshots_1.length; _i++) {
                var docSnapshot = docSnapshots_1[_i];
                batch.set(storeTransactionCatsColl.doc(docSnapshot.id), docSnapshot.data());
            }
        });
        return proms1.then(function () {
            return batch.commit();
        });
    };
    StoresFsRepository.prototype.getTransactionCatsData = function () {
        var transCatsdataTemplatCollPath = "/versions/v4/dataTemplates/transactionCats/cats";
        var transCatsdataTemplatColl = firebase.firestore().collection(transCatsdataTemplatCollPath);
        return transCatsdataTemplatColl.get().then(function (querySnapshot) {
            return querySnapshot.docs;
        });
    };
    StoresFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], StoresFsRepository);
    return StoresFsRepository;
}(FsRepository));
export { StoresFsRepository };
//# sourceMappingURL=stores-fs-repository.js.map