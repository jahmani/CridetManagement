import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { AccountsFsRepository } from './accounts-fb-repository';
import { StorePathConfig } from './StorePathConfig';
import { Transaction, Extended, ExtMap, CatTreeNodeExtension, ExtType } from '../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider } from './t-catigories-fs-repository';
import 'rxjs/add/observable/combineLatest';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { AccountsBalanceFBRepository } from './account-balance-fb-repository';
import { ImagesFsRepository } from './images-fs-repository';

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
    private imagesFsRepository: ImagesFsRepository,
    private tCatFsRep: TCatigoriesFsRepositoryProvider,
    private balanceFsRep:AccountsBalanceFBRepository
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

  extendedDataMap(transactionsMap:Observable<ExtMap<Extended<Transaction>>>):Observable<ExtMap<Extended<Transaction>>> {
    const extendedTranses =Observable.combineLatest(transactionsMap,this.tCatFsRep.dataMap,this.imagesFsRepository.dataMap,(transs,cats,images)=>{
      transs.forEach((trans)=>{
        
        trans.ext = trans.ext || {} as ExtType

        trans.ext.catigory = cats.get(trans.data.catigoryId)
        if(trans.data.imageSrc && !trans.data.imageSrc.includes("//"))
        trans.ext.imageFile = images.get(trans.data.imageSrc)
      })
      return transs
    })
    return extendedTranses;
  }

  beforeTransactionUpdated(oldTransaction:Extended<Transaction>,newTransaction:Extended<Transaction>, newId? : string){
    const accountId = oldTransaction ? oldTransaction.data.accountId : newTransaction.data.accountId
    const transactionId = oldTransaction ? oldTransaction.id : newId
    const deltaAmmount = this.computeDeltaAmmount(oldTransaction, newTransaction);

    if(deltaAmmount != 0)    
      return this.balanceFsRep.setAccountBalanceDirty(accountId,transactionId)
    else
    return Promise.resolve()
  }
  saveNew(newItem, id?:string){
    id = id || this.getNewDocId()
    return this.beforeTransactionUpdated(null,newItem,id).then(()=>{
      return super.saveNew(newItem,id).then(()=>{
        return this.afterTransactionUpdated(null,newItem)
      })
    })
  }

  saveOld(editedItem:Extended<Transaction>){
    return this.getOnce(editedItem.id).then((oldItem)=>{
      return this.beforeTransactionUpdated(oldItem,editedItem).then(()=>{
        return super.saveOld(editedItem).then(()=>{
          return this.afterTransactionUpdated(oldItem,editedItem)
        })
      })
    })
  }

  remove(removedItem:Extended<Transaction>){
      return this.beforeTransactionUpdated(removedItem,null).then(()=>{
        return super.remove(removedItem).then(()=>{
          return this.afterTransactionUpdated(removedItem,null)
        })
      })
  }

  afterTransactionUpdated(oldTransaction:Extended<Transaction>,newTransaction:Extended<Transaction>){
    const accountId = oldTransaction ? oldTransaction.data.accountId : newTransaction.data.accountId

    const deltaAmmount = this.computeDeltaAmmount(oldTransaction, newTransaction);
    
    if(deltaAmmount != 0)
      return this.balanceFsRep.updateAccountBalanceAmmount(accountId,deltaAmmount)
    else 
      return Promise.resolve()
  }


  private computeDeltaAmmount(oldTransaction: Extended<Transaction>, newTransaction: Extended<Transaction>) {
    const oldAmmount = oldTransaction ? oldTransaction.data.ammount * oldTransaction.data.type : 0;
    const newAmmount = newTransaction ? newTransaction.data.ammount * newTransaction.data.type : 0;
    const deltaAmmount = newAmmount - oldAmmount;
    return deltaAmmount;
  }
}


