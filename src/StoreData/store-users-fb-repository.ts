import { AngularFirestore } from 'angularfire2/firestore';
import { AccountBalance, StoreUser, UserStore } from './../interfaces/data-models';
import {Observable} from 'rxjs/Observable'
import { AccountInfo, User, Extended } from '../interfaces/data-models';
import { Injectable } from '@angular/core';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { AuthService } from '../app/core/index';
import { FsRepository } from '../FireStoreData/fs-repository';
import { UsersFsRepository } from '../FireStoreData/users-fs-repository';

import {mergeMap} from 'rxjs/Operators/mergeMap'

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
  get FormatedList(): Observable<Extended<StoreUser>[]> {
    return this.List().pipe(mergeMap((users) => {
      return Promise.all(this.getUsers(users))
    }))
  }
  getUsers(extUsers: Extended<StoreUser>[]) {
    return extUsers.map((extStoreUser) => {
      return this.usersFsRepository.getOnce(extStoreUser.id).then((user) => {
        extStoreUser.data.user = user.data
        return extStoreUser
      })

    })
  }
}
