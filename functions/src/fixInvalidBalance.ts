import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

const path = `/versions/v4/stores/{storeId}/accountsBalance/{accountId}/flags/invalid`

export const fixInvalidBalance = functions.firestore.document(path).onCreate(event => {
    const storeId = event.params.storeId;
    const accountId = event.params.accountId;
    const accountTransPath = `/versions/v4/stores/${storeId}/transactions/`
    const accountTransRef = admin.firestore().collection(accountTransPath).where("accountId", "==", accountId)

    const accountBalancPath = `/versions/v4/stores/${storeId}/accountsBalance/${accountId}`
    const accountBalanceRef = admin.firestore().doc(accountBalancPath)

    return admin.firestore().runTransaction((transaction) => {
        return transaction.get(accountTransRef).then(computeAccountBalance).then(accountBalance => {
            transaction.update(accountBalanceRef, { balance: accountBalance,isDirty:false })
            .delete(event.data.ref)
        })
    }).then(function() {
        console.log("fixInvalidBalance Transaction successfully committed!");
    }).catch(function(error) {
        console.log("fixInvalidBalance Transaction failed: ", error);
    });
    
})

function computeAccountBalance(querySnapshot: FirebaseFirestore.QuerySnapshot): number {
    const balance: number = querySnapshot.docs.reduce((prev, curr) => {
        const docData = curr.data()
        const ammount = prev + docData.ammount * docData.type
        return ammount;
    }, 0)
    console.log("balance: ", balance)
    console.log("querySnapshot.docs: ", querySnapshot.docs)
    return balance
}
