import { Extended, UserStore } from "../interfaces/data-models";
import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "../app/core/auth";
import { conatctPaths } from "./util";
import { StoresFsRepository } from "./stores-fs-repository";
import { Observable } from "rxjs/Observable";
import { mergeMap } from 'rxjs/Operators/mergeMap'
import { map } from "rxjs/operators/map";



@Injectable()
export class UserStoresService {
  fsRep$: Observable<FsRepository<UserStore>>
  constructor(afs: AngularFirestore, auth: AuthService, private storeInfoFsRepository: StoresFsRepository) {
    console.log('Hello UserStoresFsRepository Provider');
    this.fsRep$ = auth.user.pipe(map(user => {
      if (user)
        return new FsRepository(afs, conatctPaths(
          "users"
          , user.uid
          , "stores"))
      else
        return null
    }))
  }
  List() {
    return this.fsRep$.pipe(mergeMap(fsRep => fsRep && fsRep.List()))
  }
  get FormatedList(): Observable<Extended<UserStore>[]> {
    return this.List().pipe(mergeMap((stores) => {
      return Promise.all(this.getStores(stores))
    }))
  }
  getStores(extUserStores: Extended<UserStore>[]) {
    return extUserStores.map((extUserStore) => {
      return this.storeInfoFsRepository.getOnce(extUserStore.id).then((store) => {
        extUserStore.ext.store = store.data
        return extUserStore
      })
    })
  }

  getSingleOrDefault(): Observable<Extended<UserStore>> {
    return this.FormatedList.map(extUserStores => {
      if (extUserStores.length == 1)
        return extUserStores[0]
      extUserStores.forEach(extUserStore => {
        if (extUserStore.data.isDefault)
          return extUserStore
      })
      return null
    })
  }
}



