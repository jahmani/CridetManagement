import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var ActiveStoreService = /** @class */ (function () {
    function ActiveStoreService() {
        this.subject = new BehaviorSubject(null);
    }
    Object.defineProperty(ActiveStoreService.prototype, "activeStoreKey", {
        get: function () {
            return this._activeStoreKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveStoreService.prototype, "activeStoreKey$", {
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ActiveStoreService.prototype.setActiveStoreKey = function (newKey) {
        if (newKey != this._activeStoreKey) {
            this._activeStoreKey = newKey;
            this.subject.next(newKey);
        }
    };
    ActiveStoreService.prototype.clearActiveStoreKey = function () {
        return this.setActiveStoreKey(null);
    };
    return ActiveStoreService;
}());
export { ActiveStoreService };
//# sourceMappingURL=activeStore.js.map