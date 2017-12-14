import { AngularFirestore } from 'angularfire2/firestore';
import { AccountBalance, StoreUser, UserStore } from './../interfaces/data-models';
import { Observable } from 'rxjs';
import { AccountInfo, User, ExtendedData } from '../interfaces/data-models';
import { Injectable } from '@angular/core';
import { ActiveStoreService } from './activeStore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import 'rxjs/add/operator/mergeMap';
import { AuthService } from '../app/core/index';
import { FsRepository } from '../FireStoreData/fs-repository';
import { UsersFsRepository } from '../FireStoreData/users-fs-repository';


/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/







@Injectable()
export class StoreUsersFsRepository extends StoreDataFsRepository<StoreUser>{
  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    private usersFsRepository: UsersFsRepository
  ) {
    super(afs, activeStoreService, StorePathConfig.UsersInfo)
    console.log('Hello StoreUsersFsRepository Provider');
  }
  get FormatedList(): Observable<ExtendedData<StoreUser>[]> {
    return this.List().flatMap((users) => {
      return Promise.all(this.getUsers(users))
    })
  }
  getUsers(extUsers: ExtendedData<StoreUser>[]) {
    return extUsers.map((extStoreUser) => {
      return this.usersFsRepository.getOnce(extStoreUser.id).then((user) => {
        extStoreUser.data.user = user.data
        return extStoreUser
      })

    })
  }
}
