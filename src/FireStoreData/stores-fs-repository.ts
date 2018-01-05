import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { StoreInfo, StoreUser, StoreDoc } from "../interfaces/data-models";
import { StorePathConfig } from "../StoreData/StorePathConfig";
import * as firebase from "firebase"



@Injectable()
export class StoresFsRepository extends FsRepository<StoreDoc> {
  constructor(
    afs: AngularFirestore,
  ) {
    super(afs, StorePathConfig.basePath)
    console.log('Hello StoreUsersFsRepository Provider');
  }

  createNewStore(ownerUid: string, storeName: string = "new Store") {
    let storeInfo: StoreInfo = { name: storeName } as StoreInfo
    let storeUser: StoreUser = {
      canRead: true,
      canWrite: true,
      isEnabled: true,
      role: "owner"
    } as StoreUser

    const batch = firebase.firestore().batch()

    const storeDoc = firebase.firestore().collection(StorePathConfig.basePath).doc()
    const storeId = storeDoc.id
    const userDoc = firebase.firestore().doc(`users/${ownerUid}`);
    const storeUserDoc = storeDoc.collection("users").doc(ownerUid);
    const userStoreDoc = userDoc.collection("stores").doc(storeId);

    batch.set(storeDoc, { storeInfo })
    batch.set(storeUserDoc, storeUser)
    batch.set(userStoreDoc, {})

    const storeTransactionCatsColl = storeDoc.collection("transactionCats");
    const proms1 = this.getTransactionCatsData().then((docSnapshots)=>{
      for(let docSnapshot of docSnapshots){
        batch.set(storeTransactionCatsColl.doc(docSnapshot.id),docSnapshot.data())
      }
    })
    return proms1.then(()=>{
      return batch.commit() 
    })
  }

  getTransactionCatsData(){
    const transCatsdataTemplatCollPath = "/versions/v4/dataTemplates/transactionCats/cats"
    const transCatsdataTemplatColl = firebase.firestore().collection(transCatsdataTemplatCollPath)
    return transCatsdataTemplatColl.get().then((querySnapshot)=>{
      return querySnapshot.docs
    })
    
  }


}
