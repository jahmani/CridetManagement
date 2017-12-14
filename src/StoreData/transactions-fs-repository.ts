import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { AccountsFsRepository } from './accounts-fb-repository';
import { ActiveStoreService } from './activeStore';
import { StorePathConfig } from './StorePathConfig';
import { Transaction, ExtendedData, ExtMap } from '../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider } from './t-catigories-fs-repository';
import 'rxjs/add/observable/combineLatest';

/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TransactionsFsRepository extends StoreDataFsRepository<Transaction> {
  private formatedList;

  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    private accountsRep: AccountsFsRepository,
    private tCatFsRep: TCatigoriesFsRepositoryProvider
    )  {
    super(afs, activeStoreService, StorePathConfig.Transactions)
    console.log('Hello TransactionsFsRepository Provider');
  }
  forAccount(accountKey: string) {
    let transactionsColl = this.afs.collection<Transaction>(this.collection.ref.path, (ref)=> ref.where('accountId','==',accountKey))
   // const transactionsList = super.snapList(transactionsColl);
    const transactionsMap = super.snapshotMap(transactionsColl);
    //return transactionsMap
    return this.extendedDataMap(transactionsMap);
  }
  /*
  FormateList(list:Observable<DataSnapshot<Transaction>[]>): Observable<any[]> {
    const self = this;
    Observable.combineLatest(list,this.tCatFsRep.list,(transs,cats)=>{
      transs.map((trans)=>{
        trans.data.$ext.catigory = cats.get(trans.data.catigoryId)
      })
    })
    const res = list;
    return res;
  }
*/
  extendedDataMap(transactionsMap:Observable<ExtMap<ExtendedData<Transaction>>>):Observable<ExtMap<ExtendedData<Transaction>>> {
    const extendedTranses =Observable.combineLatest(transactionsMap,this.tCatFsRep.dataMap,(transs,cats)=>{
      transs.forEach((trans)=>{
        
        trans.ext = trans.ext || {}

        trans.ext.catigory = cats.get(trans.data.catigoryId)
      })
      return transs
    })
    return extendedTranses;
  }

}


