"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const path = `/versions/v4/invites/{inviteId}`;
exports.onUpdateInvite = functions.firestore.document(path).onUpdate(event => {
    const storeId = event.data.get("storeId");
    const userId = event.data.get("userId");
    const inviteId = event.params["inviteId"];
    const newInvite = event.data.data();
    const oldInvite = event.data.previous.data();
    const oldInviteState = oldInvite.state;
    const inviteState = newInvite.state;
    console.log("oldInviteState", oldInviteState);
    console.log("inviteState", inviteState);
    console.log("oldInvite", oldInvite);
    console.log("newInvite", newInvite);
    const storePendingUserDocPath = `/versions/v4/stores/${storeId}/pendingUsers/${userId}`;
    const userPendingstoreDocPath = `/users/${userId}/pendingStores/${storeId}`;
    const storeUserDocPath = `/versions/v4/stores/${storeId}/users/${userId}`;
    const userStoreDocPath = `/users/${userId}/stores/${storeId}`;
    const storePendingUserDocRef = admin.firestore().doc(storePendingUserDocPath);
    const userPendingstoreDocRef = admin.firestore().doc(userPendingstoreDocPath);
    const storeUserDocRef = admin.firestore().doc(storeUserDocPath);
    const userStoreDocRef = admin.firestore().doc(userStoreDocPath);
    const storeUser = {
        inviteId: inviteId,
        isEnabled: true,
        canRead: true, canWrite: false,
        dateTimeAdded: admin.firestore.FieldValue.serverTimestamp(),
        firstCreatedOn: admin.firestore.FieldValue.serverTimestamp(),
        lastEditedOn: admin.firestore.FieldValue.serverTimestamp(),
        lastEditedByUserId: "FSCF",
        role: "reader",
    };
    const userStore = {
        inviteId: inviteId,
        firstCreatedOn: admin.firestore.FieldValue.serverTimestamp(),
        lastEditedOn: admin.firestore.FieldValue.serverTimestamp(),
        lastEditedByUserId: "FSCF",
    };
    const batch = admin.firestore().batch();
    switch (oldInviteState) {
        case "PENDING":
            {
                batch.delete(storePendingUserDocRef);
                batch.delete(userPendingstoreDocRef);
                switch (inviteState) {
                    case "ACCEPTED":
                        batch.set(storeUserDocRef, storeUser);
                        batch.set(userStoreDocRef, userStore);
                        break;
                    case "REJECTED":
                    case "CANCELED":
                        break;
                    default:
                        console.log("impossible inviteState AFTER PENDING state");
                        break;
                }
                break;
            }
        case "ACCEPTED":
            switch (inviteState) {
                case "LEAVED":
                case "REVOKED":
                    batch.delete(storeUserDocRef);
                    batch.delete(userStoreDocRef);
                    break;
                default:
                    console.log("Impossiple inviteState after ACCEPTED state");
                    break;
            }
            break;
        default:
            console.log("Impossiple oldstate state");
            break;
    }
    return batch.commit().then(function () {
        console.log("onChangeInvitation  successfully committed!");
    }).catch(function (error) {
        console.log("onChangeInvitation  failed: ", error);
    });
});
exports.onNewInvitation = functions.firestore.document(path).onWrite(event => {
    const storeId = event.data.get("storeId");
    const userId = event.data.get("userId");
    const inviteId = event.params["inviteId"];
    const storePendingUserDocPath = `/versions/v4/stores/${storeId}/pendingUsers/${userId}`;
    const userPendingstoreDocPath = `/users/${userId}/pendingStores/${storeId}`;
    const storePendingUserDocRef = admin.firestore().doc(storePendingUserDocPath);
    const userPendingstoreDocRef = admin.firestore().doc(userPendingstoreDocPath);
    const batch = admin.firestore().batch();
    batch.set(storePendingUserDocRef, { inviteId, userId });
    batch.set(userPendingstoreDocRef, { inviteId, storeId });
    return batch.commit().then(function () {
        console.log("onNewInvitation  successfully committed!");
    }).catch(function (error) {
        console.log("onNewInvitation  failed: ", error);
    });
});
//# sourceMappingURL=onInvitation.js.map