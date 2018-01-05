import { Extended, UserStore } from "../interfaces/data-models";
import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../app/core/auth";
import { conatctPaths } from "./util";
import { StoresFsRepository } from "./stores-fs-repository";
import { Observable } from "rxjs/Observable";
import {mergeMap} from 'rxjs/Operators/mergeMap'


Injectable()
export class UserPendingStoresFsRepository extends FsRepository<UserStore> {
  constructor(
    //afs: AngularFirestore,
   // auth: AuthService,
    private storeInfoFsRepository: StoresFsRepository
  ) {
    super(
      {} as AngularFirestore,
      //afs,
       conatctPaths(
      "users"
      , "auth.currentUser.uid"
      , "pendingStores"))
    console.log('Hello UserStoresFsRepository Provider');
  }
  get FormatedList(): Observable<Extended<UserStore>[]> {
    return this.List().pipe(mergeMap((stores) => {
      return Promise.all(this.getStores(this,stores))
    }))
  }
  getStores(self, extUserStores: Extended<UserStore>[]) {
    return extUserStores.map((extUserStore) => {
      return self.storeInfoFsRepository.getOnce(extUserStore.id).then((store) => {
        extUserStore.ext.store = store.data.storeInfo
        return extUserStore
      })
    })
  }
}


 
