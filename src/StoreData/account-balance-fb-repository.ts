import { AngularFirestore } from 'angularfire2/firestore';
import { AccountBalance } from './../interfaces/data-models';
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import {firestore} from 'firebase'


/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AccountsBalanceFBRepository extends StoreDataFsRepository<AccountBalance> {
  constructor(
    afs: AngularFirestore,
    private activeStoreService: ActiveStoreService,
  ) {
    super(afs, activeStoreService, StorePathConfig.AccountsBalance)
    //    super(af,activeStoreInfoService.ActiveStoreAccountsBalanceReference)
    console.log('Helloooooo AccountsBalance FBRepository Provider');
  }
  get FormatedList(): Observable<any[]> {
    return this.List()
  }

  setAccountBalanceInvalid(accountId: string){
    const invalidFlagpath = `/versions/v4/stores/${this.activeStoreService.activeStoreKey}/accountsBalance/${accountId}/flags/invalid`
    const invalidFlagRef = firestore().doc(invalidFlagpath)
    
    firestore().runTransaction((dbTransaction)=>{
      return dbTransaction.get(invalidFlagRef).then(docSnapShot=>{
        if(docSnapShot.exists)
          return
        else
          dbTransaction.set(invalidFlagRef,{invalid:true})
        
      }).then(function() {
        console.log("setAccountBalanceInvalid Transaction successfully committed!");
    }).catch(function(error) {
        console.log("setAccountBalanceInvalid Transaction failed: ", error);
    });
    })
  }

  setAccountBalanceDirty(accountId: string, transactionID: string) {
    return this.getOrCreate(accountId).then((extBalance) => {
      let isNewBalanceDoc = false;
      if (!extBalance.data) {
        extBalance.data = {} as AccountBalance
        isNewBalanceDoc = true
      }
      if (extBalance.data.isDirty)
        return Promise.reject("balance already dirty")
      extBalance.data.isDirty = true
      extBalance.data.lastTransactionId = transactionID
      return isNewBalanceDoc ? this.saveNew(extBalance, extBalance.id) : this.saveOld(extBalance)
    })
  }

  updateAccountBalanceAmmount(accountId: string, deltaAmmount: number) {
    return this.getOnce(accountId).then((extBalance) => {
      if (!extBalance.data || !extBalance.data.isDirty)
        return Promise.reject("balance is not dirty")
      extBalance.data.isDirty = false
      if(isNaN(extBalance.data.balance))
        extBalance.data.balance = 0
        
      extBalance.data.balance += deltaAmmount
      return this.saveOld(extBalance)
    })
  }
  getUpdateBalanceObject(accountId, deltaAmmount, transactionID) {
    /*
    return this.get(accountId).first().toPromise().then(accountBalance => {
      let updatesObject = {};
      if (!(<any>accountBalance).$exists()) {
        accountBalance = new AccountBalance();
        accountBalance.balance = deltaAmmount;
        accountBalance.lastEditedTransactionId = transactionID;
        updatesObject = this.getSaveNewObject(accountBalance, accountId);

      }
      else {
        accountBalance.balance *= 1;
        accountBalance.balance += 1 * deltaAmmount;
        accountBalance.lastEditedTransactionId = transactionID;
        updatesObject = this.getSaveOldObject(accountBalance)
      }
      return updatesObject;
    })
    */
    throw "not implemented "
  }

}
