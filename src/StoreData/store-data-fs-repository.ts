import { AngularFirestore } from 'angularfire2/firestore';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { StorePathConfig } from './StorePathConfig';
import { Injectable } from '@angular/core';
import { StoreInfo } from '../interfaces/data-models';
import { FsRepository } from '../FireStoreData/fs-repository';
import { conatctPaths } from '../FireStoreData/util';

/*
  Generated class for the StoreDataLoggableFbRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
///@Injectable()
export class StoreDataFsRepository<T> extends FsRepository<T>{
  
    constructor(
    afs:AngularFirestore,
     ass : ActiveStoreService,
     dataSubPath:string)
     {
      super(afs,conatctPaths(
        StorePathConfig.basePath
        ,ass.activeStoreKey
        ,dataSubPath))
     /* activeStoreInfoService.storeChange$.subscribe(()=>{
        super.initialize( activeStoreInfoService.ActiveStoreReference.child(dataSubPath));
      });
      */
       console.log('Hellooooo StoreDataLoggableFbRepository Provider');
      }
  
  }

    