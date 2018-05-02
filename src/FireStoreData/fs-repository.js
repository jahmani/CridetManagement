import { ExtMap } from '../interfaces/data-models';
import { publishReplay } from 'rxjs/operators/publishReplay';
import { refCount } from 'rxjs/operators/refCount';
import { map } from 'rxjs/operators/map';
import { first } from 'rxjs/operators/first';
import { share } from 'rxjs/operators/share';
import * as firebase from "firebase/app";
import { firestore } from 'firebase';
import { compareTimeStamp } from '../Util/compareDateString';
/*
  Generated class for the FBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var FsRepository = /** @class */ (function () {
    function FsRepository(afs, path) {
        this.afs = afs;
        this.path = path;
        console.log('Hello FBRepository Provider');
        this.initialize(path);
    }
    Object.defineProperty(FsRepository.prototype, "FormatedList", {
        get: function () {
            return this.dataList;
        },
        enumerable: true,
        configurable: true
    });
    ;
    FsRepository.prototype.initialize = function (path) {
        this.path = path;
        console.log("path : " + path + " ");
        this.collection = this.afs.collection(path);
        this.dataList = this.snapList(this.collection).pipe(publishReplay(1), refCount());
        this.dataMap = this.snapshotMap(this.collection).pipe(publishReplay(1), refCount());
    };
    FsRepository.prototype.snapList = function (coll) {
        return coll.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var meta = a.payload.doc.metadata;
                var data;
                if (a.payload.doc.exists)
                    data = a.payload.doc.data();
                else
                    console.log("Empty doc DAta :", a.payload.doc);
                var id = a.payload.doc.id;
                var ret = { id: id, data: data, ext: {}, meta: meta };
                return ret;
            }).sort(function (a, b) {
                return compareTimeStamp(a.data.lastEditedOn, b.data.lastEditedOn);
            });
        }));
    };
    FsRepository.prototype.snapshotMap = function (coll) {
        var _map = new ExtMap();
        return coll.snapshotChanges().pipe(share(), map(function (actions) {
            actions.forEach(function (a) {
                var data;
                if (a.payload.doc.exists)
                    data = a.payload.doc.data();
                else
                    console.log("Empty doc DAta :", a.payload.doc);
                var id = a.payload.doc.id;
                _map.set(id, { id: id, data: data, meta: a.payload.doc.metadata, ext: {} });
                //const ret = {id,data}
                //return ret;
            });
            return _map;
        }));
    };
    FsRepository.prototype.List = function () {
        return this.dataList.share();
    };
    FsRepository.prototype.get = function (key) {
        return this.afs.doc(this.path + ("/" + key)).snapshotChanges().pipe(map(function (action) {
            var data;
            if (action.payload.exists)
                data = action.payload.data();
            else
                console.log("Empty doc DAta :", action.payload);
            return { id: action.payload.id, data: data };
        }));
    };
    FsRepository.prototype.getOnce = function (key) {
        return this.get(key).pipe(first()).toPromise();
    };
    FsRepository.prototype.getOrCreate = function (key) {
        return this.getOnce(key).then(function (val) { return val; }).catch(function (err) {
            console.log("getOrCreate err : ", err);
            return { id: key, data: null };
        });
    };
    FsRepository.prototype.parseBeforeSave = function (obj) {
        return { id: obj.id, data: this.remove$Properties(obj.data) };
    };
    FsRepository.prototype.remove$Properties = function (obj) {
        Object.keys(obj).forEach(function (key) {
            if (key.startsWith('$'))
                delete obj[key];
        });
    };
    FsRepository.prototype.catch = function (err) {
        console.error("Error saving", err);
        throw err;
    };
    FsRepository.prototype.saveNew = function (item, key) {
        key = key || this.newKey();
        this.parseBeforeSave(item);
        item.data.lastEditedOn = firebase.firestore.FieldValue.serverTimestamp();
        item.data.firstCreatedOn = firebase.firestore.FieldValue.serverTimestamp();
        if (key)
            return this.collection.doc(key).set(item.data).then(function () { return key; }).catch(this.catch);
    };
    FsRepository.prototype.remove = function (item) {
        // this.parseBeforeSave(item);
        return this.collection.doc(item.id).delete().catch(this.catch);
        //return this.fbLoggableSaver.remove(item, this.urlOrRef)
    };
    FsRepository.prototype.getNewDocId = function () {
        return firestore().collection(this.path).doc().id;
    };
    FsRepository.prototype.newKey = function () {
        return this.collection.ref.firestore.collection(this.collection.ref.path).doc().id;
    };
    FsRepository.prototype.saveOld = function (editedItem) {
        // let key = editedItem.$key;
        var data = editedItem.data;
        data.lastEditedOn = firebase.firestore.FieldValue.serverTimestamp();
        // this.parseBeforeSave(copy);
        return this.collection.doc(editedItem.id).update(data).catch(this.catch);
    };
    return FsRepository;
}());
export { FsRepository };
//# sourceMappingURL=fs-repository.js.map