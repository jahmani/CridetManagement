import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import { combineLatest } from 'rxjs/operators/combineLatest'
import { map } from 'rxjs/operators/map'
import { AccountInfo, CatTreeNodeExtension, ExtType, Extended, AccountBalance } from '../interfaces/data-models';
import { Injectable } from '@angular/core';
import { StorePathConfig } from './StorePathConfig';
import { StoreDataFsRepository } from './store-data-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { AccountsBalanceFBRepository } from './account-balance-fb-repository';
import { DatePipe } from '@angular/common';
import { compareTimeStamp } from '../Util/compareDateString';


/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

class AbstarctAccountsRepository { }
@Injectable()
export class AccountsFsRepository extends StoreDataFsRepository<AccountInfo> implements AbstarctAccountsRepository {
  constructor(
    private datePipe: DatePipe,
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    private accountsBalanceFBRepository: AccountsBalanceFBRepository,
  ) {
    super(afs, activeStoreService, StorePathConfig.AccountsInfo)
    console.log('Hello AccountsFBRepository Provider');
  }
  get FormatedList(): Observable<any[]> {
    return this.List().pipe(
      /*  */

      combineLatest(this.accountsBalanceFBRepository.dataMap, (accounts, balancesMap) => {
        accounts.forEach(account => {
          account.ext = account.ext || {} as ExtType
          account.ext.$balance = 0;
          account.ext.$computedLastEditedOn = account.data.lastEditedOn
          let balanceObj = balancesMap.get(account.id);
          if (balanceObj) {
            account.ext.$balanceObj = balanceObj
            account.ext.$balance = balanceObj.data.balance;
            if (compareTimeStamp(account.ext.$computedLastEditedOn, balanceObj.data.lastEditedOn) > 0)
              account.ext.$computedLastEditedOn = balanceObj.data.lastEditedOn
            //   if (balanceObj.lastEditedDate > account.$computedLastEditDate)
            //     account.$computedLastEditDate = balanceObj.lastEditedDate;
          }
        });
        return accounts;
      })).pipe(map(accountsArray => {
        return accountsArray.sort((a, b) => {
          return compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn)
        })
      }))
  }

  setAccountBalanceInvalid(accountId: string){
    return this.accountsBalanceFBRepository.setAccountBalanceInvalid(accountId)
  }
  getExtended(accountId:string):Observable<Extended<AccountInfo>>{
    const account = super.get(accountId)
    const balance = this.accountsBalanceFBRepository.get(accountId)
    const extended = account.pipe(combineLatest(balance,(extAccount,extBalance)=>{
      extAccount.ext = extAccount.ext || {}
      extAccount.ext.$balanceObj = extBalance
      return extAccount
    }))
    return extended
  }


}
