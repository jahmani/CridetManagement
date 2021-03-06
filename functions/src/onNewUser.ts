import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

export const onNewUser = functions.auth.user().onCreate(event => {
    const userRecord = event.data
    console.log("userRecord", userRecord)
    
    const batch = admin.firestore().batch()
    const userRef = admin.firestore().doc(`users/${userRecord.uid}`)
    if(userRecord.email)
    {
        batch.set(userRef, {email:userRecord.email})
        const encodedEemail = encodeEmail(userRecord.email)
        console.log("email", userRecord.email)
        console.log("encodedEemail", encodedEemail)
        const usersByEmailRef =  admin.firestore().doc(`usersByEmail/${encodedEemail}`)
        batch.set(usersByEmailRef, { uid:userRecord.uid })
    }

    if(userRecord.phoneNumber)
    {
        const usersByPhoneNumberRef =  admin.firestore().doc(`usersByEmail/${userRecord.phoneNumber}`)
        batch.set(usersByPhoneNumberRef, { uid:userRecord.uid })
    }

    return batch.commit().then(function () {
        console.log("onNewUser  successfully committed!");
    }).catch(function (error) {
        console.log("onNewUser  failed: ", error);
    });
})

function encodeEmail(email:string){
    return email.replace('.','|')
}
/*
function decodeEmail(encodedEmail:string){
    return encodedEmail.replace('|','.')
}
*/