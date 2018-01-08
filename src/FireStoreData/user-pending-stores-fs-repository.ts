import { Injectable } from '@angular/core';
import { FsRepository } from './fs-repository';
import { UserStore, Extended } from '../interfaces/data-models';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../app/core/auth';
import { StoresFsRepository } from './stores-fs-repository';
import { conatctPaths } from './util';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/Operators/mergeMap';
import { map } from 'rxjs/operators/map';

/*
  Generated class for the UserPendingStoresFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserPendingStoresFsRepositoryProvider// extends FsRepository<UserStore> 
{
  fsRep$: Observable<FsRepository<UserStore>>

  constructor(
    afs: AngularFirestore,
    auth: AuthService,
    private storeInfoFsRepository: StoresFsRepository) {
 //   super(afs, conatctPaths("users", auth.currentUser.uid, "pendingStores"));
    
    console.log('Hello UserPendingStoresFsRepositoryProvider Provider');
    this.fsRep$ = auth.user.pipe(map(user => {
      if (user)
        return new FsRepository(afs, conatctPaths(
          "users"
          , user.uid
          , "pendingStores"))
      else
        return null
    }))
  }
  List() {
    return this.fsRep$.pipe(mergeMap(fsRep => fsRep && fsRep.List()))
  }
  get FormatedList(): Observable<Extended<UserStore>[]> {
    return this.List().pipe(mergeMap((stores) => {
      return Promise.all(this.getStores(this, stores))
    }))
  }
  getStores(self: UserPendingStoresFsRepositoryProvider, extUserStores: Extended<UserStore>[]) {
    return extUserStores.map((extUserStore) => {
      return self.storeInfoFsRepository.getOnce(extUserStore.id).then((store) => {
        extUserStore.ext.store = store.data
        return extUserStore
      })
    })
  }
}
