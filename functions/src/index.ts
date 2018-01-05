import * as admin from "firebase-admin"
import * as functions from "firebase-functions"

export {fixInvalidBalance} from './fixInvalidBalance'
export {onUpdateInvite} from './onInvitation'
export {onNewInvitation} from './onInvitation'
export {onNewUser} from './onNewUser'



admin.initializeApp(functions.config().firebase)
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// }); 
/*
const path = `/versions/v4/stores/{storeId}/transactions/{transactionId}`

const logTransactionEdited = functions.firestore.document(path).onWrite(event => {
    console.log("Transaction Edited: old Transaction ",event.data.previous.data(),
    "new Transaction : ",event.data.data())
    return Promise.resolve()
})


exports.sendTransNotification = functions.firestore.document(path).onWrite(event => {
    const storeId = event.params.storeId;
    const userId = '569PS8cvuJT4aAauMC8RglrUcp72';
    const storeUsersPath = `/versions/v4/stores/${storeId}/users/`
    const userPath = `/versions/v4/users/569PS8cvuJT4aAauMC8RglrUcp72`
    const newTransaction = event.data.data();

    // Get the list of device notification tokens.
    const getUserTokensPromise = admin.firestore().doc(userPath).get()
    // Notification details.
    const payload = {
        notification: {
            title: 'transaction edited',
            body: ` a transaction of Ammount ${newTransaction.ammount} have been edited.`,
        }
    };
    return getAllUsersTokens(storeUsersPath).then((tokens) => {
        // check for empty tokens array
        return sendFcmMessages(tokens, payload)
    }).catch((err) => {
        console.log('Error sending notification.', err)
    })
  })

function sendFcmMessages(tokens: string[], payload: object) {
    if (Array.isArray(tokens) && tokens.length > 0) {
        return admin.messaging().sendToDevice(tokens, payload).then((response) => {
            console.log("send message response : ", response);
        })
    }
    else return Promise.resolve().then(()=>{
        console.log("done! with embty tokensd array")
    })
}
function getAllUsersTokens(storeUsersPath: string) {
    return admin.firestore().collection(storeUsersPath).get().then((res) => {
        const arrays: string[][] = res.docs.map((doc, index) => {
            const docData = doc.data()
            if (docData && docData.fcmTokens)
                return Object.keys(docData.fcmTokens)
            return [];
        })
        console.log("arrays: ", arrays)
        const flatArray: string[] = [].concat.apply([], arrays)
        console.log("flatArray: ", flatArray)

        return flatArray
    })
}
  */
