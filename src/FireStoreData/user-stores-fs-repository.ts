import { ExtendedData, UserStore } from "../interfaces/data-models";
import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../app/core/auth";
import { conatctPaths } from "./util";
import { StoresFsRepository } from "./stores-fs-repository";
import { Observable } from "rxjs/Observable";




@Injectable()
export class UserStoresFsRepository extends FsRepository<UserStore> {
  constructor(afs: AngularFirestore, auth: AuthService, private storeInfoFsRepository: StoresFsRepository) {
    super(afs, conatctPaths(
      "users"
      , auth.currentUser.uid
      , "stores"))
    console.log('Hello UserStoresFsRepository Provider');
  }
  get FormatedList(): Observable<ExtendedData<UserStore>[]> {
    return this.List().flatMap((stores) => {
      return Promise.all(this.getStores(stores))
    })
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