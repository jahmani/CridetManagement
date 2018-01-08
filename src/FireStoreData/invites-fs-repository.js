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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { UsersFsRepository } from "./users-fs-repository";
import { mergeMap } from "rxjs/Operators/mergeMap";
import { StoresFsRepository } from "./stores-fs-repository";
var InvitesFsRepository = /** @class */ (function (_super) {
    __extends(InvitesFsRepository, _super);
    function InvitesFsRepository(afs, usersFsRepository, storesFsRepository) {
        var _this = _super.call(this, afs, "versions/v4/invites") || this;
        _this.usersFsRepository = usersFsRepository;
        _this.storesFsRepository = storesFsRepository;
        console.log('Hello StoreUsersFsRepository Provider');
        return _this;
    }
    InvitesFsRepository.prototype.invite = function (userId, storeId) {
        var invite = { userId: userId, storeId: storeId, state: "PENDING" };
        var extInvite = { data: invite };
        return _super.prototype.saveNew.call(this, extInvite);
    };
    InvitesFsRepository.prototype.getStoreInvites = function (storeId, state) {
        var invitesColl = this.afs.collection(this.collection.ref.path, function (ref) {
            var reference = ref.where('storeId', '==', storeId);
            if (state)
                reference = reference.where("state", "==", state);
            return reference;
        });
        return this.snapList(invitesColl).pipe(mergeMap(this.extendUsers.bind(this)));
    };
    InvitesFsRepository.prototype.getUserInvites = function (userId, state) {
        var invitesColl = this.afs.collection(this.collection.ref.path, function (ref) {
            var reference = ref.where('userId', '==', userId);
            if (state)
                reference = reference.where("state", "==", state);
            return reference;
        });
        return this.snapList(invitesColl).pipe(mergeMap(this.extendStores));
    };
    InvitesFsRepository.prototype.extendUsers = function (extInvites) {
        var _this = this;
        var promises = extInvites.map(function (extInvite) {
            return _this.usersFsRepository.getOnce(extInvite.data.userId).then(function (extUser) {
                extInvite.ext.user = extUser.data;
                return extInvite;
            });
        });
        return Promise.all(promises);
    };
    InvitesFsRepository.prototype.extendStores = function (extInvites) {
        var _this = this;
        var promises = extInvites.map(function (extInvite) {
            return _this.storesFsRepository.getOnce(extInvite.data.storeId).then(function (extStore) {
                extInvite.ext.store = extStore.data;
                return extInvite;
            });
        });
        return Promise.all(promises);
    };
    InvitesFsRepository.prototype.accpetInvite = function (inviteId) {
        return this.InviteState(inviteId, "ACCEPTED");
    };
    InvitesFsRepository.prototype.rejectInvite = function (inviteId) {
        return this.InviteState(inviteId, "REJECTED");
    };
    InvitesFsRepository.prototype.canceleInvite = function (inviteId) {
        return this.InviteState(inviteId, "CANCELED");
    };
    InvitesFsRepository.prototype.InviteState = function (inviteId, inviteState) {
        var _this = this;
        return this.getOnce(inviteId).then(function (extInvite) {
            var copyExtInvite = __assign({}, extInvite, { data: __assign({}, (extInvite.data)) });
            copyExtInvite.data.state = inviteState;
            return _this.saveOld(copyExtInvite);
        });
    };
    InvitesFsRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore,
            UsersFsRepository,
            StoresFsRepository])
    ], InvitesFsRepository);
    return InvitesFsRepository;
}(FsRepository));
export { InvitesFsRepository };
//# sourceMappingURL=invites-fs-repository.js.map