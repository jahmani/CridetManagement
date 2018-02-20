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
import { StoreInfo, StoreUser, StoreDoc } from "../interfaces/data-models";
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
    return StoresFsRepository;
}(FsRepository));
export { StoresFsRepository };
//# sourceMappingURL=stores-fs-repository.js.map