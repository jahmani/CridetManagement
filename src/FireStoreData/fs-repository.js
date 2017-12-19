import { ExtMap } from '../interfaces/data-models';
import { publishReplay } from 'rxjs/operators/publishReplay';
import { refCount } from 'rxjs/operators/refCount';
import { map } from 'rxjs/operators/map';
import { first } from 'rxjs/operators/first';
import { share } from 'rxjs/operators/share';
/*
  Generated class for the FBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var FsRepository = (function () {
    function FsRepository(afs, path) {
        this.afs = afs;
        this.path = path;
        // super()
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
        this.dataSnapshot = this.collection.snapshotChanges();
        //    this.list = this.collection.snapshotChanges() as any;
        this.dataList = this.snapList(this.collection).pipe(publishReplay(1), refCount());
        this.dataMap = this.snapshotMap(this.collection).pipe(publishReplay(1), refCount());
    };
    FsRepository.prototype.snapList = function (coll) {
        return coll.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                var ret = { id: id, data: data };
                return ret;
            });
        }));
    };
    FsRepository.prototype.snapshotMap = function (coll) {
        var _map = new ExtMap();
        return coll.snapshotChanges().pipe(share(), map(function (actions) {
            actions.forEach(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                _map.set(id, { id: id, data: data });
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
            var d = action.payload.data();
            return { id: action.payload.id, data: action.payload.data() };
        }));
    };
    FsRepository.prototype.getOnce = function (key) {
        return this.get(key).pipe(first()).toPromise();
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
    FsRepository.prototype.saveNew = function (item, key) {
        this.parseBeforeSave(item);
        return this.collection.add(item.data);
    };
    FsRepository.prototype.remove = function (item) {
        // this.parseBeforeSave(item);
        return this.collection.doc(item.id).delete();
        //return this.fbLoggableSaver.remove(item, this.urlOrRef)
    };
    FsRepository.prototype.saveOld = function (editedItem) {
        // let key = editedItem.$key;
        var data = editedItem.data;
        // this.parseBeforeSave(copy);
        return this.collection.doc(editedItem.id).update(data);
    };
    return FsRepository;
}());
export { FsRepository };
//# sourceMappingURL=fs-repository.js.map