import { ExtendedData, UserStore } from "../interfaces/data-models";
import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../app/core/auth";
import { conatctPaths } from "./util";
import { StoresFsRepository } from "./stores-fs-repository";




@Injectable()
export class UserStoresFsRepository extends FsRepository<UserStore> {
  constructor(afs: AngularFirestore, auth: AuthService, private storeInfoFsRepository: StoresFsRepository) {
    super(afs, conatctPaths(
      "users"
      , auth.currentUser.uid
      , "activeStores"))
    console.log('Hello UserStoresFsRepository Provider');
  }
  getStores(extUserStores: ExtendedData<UserStore>[]) {
    return extUserStores.map((extUserStore) => {
      return this.storeInfoFsRepository.getOnce(extUserStore.id).then((store) => {
        extUserStore.data.store = store.data.storeInfo
        return extUserStore
      })

    })
  }
}