import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { TransactionCatigory, Extended, ExtMap } from '../interfaces/data-models';
import { mapToTree } from './util';
import { Observable } from 'rxjs/Observable';
import {publishReplay} from 'rxjs/operators/publishReplay'
import {refCount} from 'rxjs/operators/refCount'
import {map} from 'rxjs/operators/map'
import { ActiveStoreService } from '../FireStoreData/activeStore';


/*
  Generated class for the TCatigoriesFsRepositoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TCatigoriesFsRepositoryProvider extends StoreDataFsRepository<TransactionCatigory> {
  treeRoot

  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService) {
      super(afs, activeStoreService, StorePathConfig.TransactionCatigories)
      this.treeRoot = this.dataMap.pipe(
        map((tCatigoriesMap) => {
          return mapToTree(tCatigoriesMap) as Extended<TransactionCatigory>
        })
      ,publishReplay(1)
      ,refCount())
    console.log('Helloooooo TCatigoriesFsRepositoryProvider FBRepository Provider');
  }

}