import { AngularFirestore } from 'angularfire2/firestore';
import { AccountBalance } from './../interfaces/data-models';
import { Observable } from 'rxjs';
import { AccountInfo } from '../interfaces/data-models';
import { Injectable } from '@angular/core';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';


/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
class  AbstarctAccountsBalanceRepository {}
@Injectable()
export class AccountsBalanceFBRepository extends StoreDataFsRepository<AccountBalance> implements AbstarctAccountsBalanceRepository {
  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    ) {
    super(afs,  activeStoreService,StorePathConfig.AccountsBalance)
    //    super(af,activeStoreInfoService.ActiveStoreAccountsBalanceReference)
    console.log('Helloooooo AccountsBalance FBRepository Provider');
  }
  get FormatedList(): Observable<any[]> {
    return this.List()
    /*
    .map(accountsArray => {
      return accountsArray.sort((a, b) => { return (b.lastEditedDate || 0) - (a.lastEditedDate || 0) })
    })
    */
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

class AbstarctAccountsRepository{}
@Injectable()
export class AccountsFsRepository extends StoreDataFsRepository<AccountInfo> implements AbstarctAccountsRepository {
  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    private accountsBalanceFBRepository: AccountsBalanceFBRepository,
  ) {
    super(afs, activeStoreService, StorePathConfig.AccountsInfo)
    console.log('Hello AccountsFBRepository Provider');
  }
  get FormatedList(): Observable<any[]> {
    return this.List()
    /*
    .combineLatest(this.accountsBalanceFBRepository.list, (accounts, balances) => {
      accounts.forEach(account => {
      //  account.$computedLastEditDate = account.lastEditedDate
        account.$balance = 0;
        let balanceObj = this.accountsBalanceFBRepository.getLoadedItem(account.$key);
        if (balanceObj) {
          account.$balance = balanceObj.balance;
          if (balanceObj.lastEditedDate > account.$computedLastEditDate)
            account.$computedLastEditDate = balanceObj.lastEditedDate;
        }
      });
      return accounts;
    }).map(accountsArray => {

      return accountsArray.sort((a, b) => { return (b.$computedLastEditDate || 0) - (a.$computedLastEditDate || 0) })
    })
    */
  }

  getUpdateBalanceObject(accountId, deltaAmmount, transactionId) {
    let updates = this.accountsBalanceFBRepository.getUpdateBalanceObject(accountId, deltaAmmount, transactionId)
    console.log(updates)
    return updates;
    /*
    return this.get(accountId).first().toPromise().then(account => {
      account.balance *= 1;
      account.balance += 1 * deltaAmmount;
      //return this.update(account);
      return this.getSaveOldObject(account)
    })
    */
  }

}
