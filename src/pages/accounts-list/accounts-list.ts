import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {debounceTime} from 'rxjs/operators/debounceTime'
import {map} from 'rxjs/operators/map'
import {startWith} from 'rxjs/operators/startWith'
import { combineLatest } from "rxjs/observable/combineLatest";

import { AccountInfo, Extended, AccountBalance } from '../../interfaces/data-models';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { FormControl } from '@angular/forms';
import { AccountsBalanceFBRepository } from '../../StoreData/account-balance-fb-repository';

/**
 * Generated class for the AccountsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({segment: 'accounts-list'})
@Component({
  selector: 'page-accounts-list',
  templateUrl: 'accounts-list.html',
})
export class AccountsListPage {

  accounts: Observable<Extended<AccountInfo>[]>
  filteredAccounts: Observable<Extended<AccountInfo>[]>
  searchControl : FormControl
  totalBalanceObj : Observable<AccountBalance>
  constructor(
      public navCtrl: NavController
      , private afsr : AccountsFsRepository
      , private abfsr : AccountsBalanceFBRepository 
      , private modalController : ModalController
    , private alertController : AlertController
    , @Optional() private titleService: TitleServiceProvider) {
    this.accounts = this.afsr.FormatedList;
    this.searchControl = new FormControl();
   // this.accounts.subscribe(console.log)
  }
  ionViewDidLoad(){
    //searchControl.valueChanges will not emit values untill the user make input
    //combineLatest will not emit values untill both ovseravables emit values
    //
    const initializedValueChanges = this.searchControl.valueChanges.pipe(debounceTime(700)).pipe(startWith(null))
    /*
    merged.subscribe(searcTerm => {
      console.log("merge Eimit", searcTerm)
    })
    */
   this.filteredAccounts=combineLatest(
      initializedValueChanges
     ,this.accounts,(searcTerm:string,extAccounts)=>{
       if(!searcTerm || ! searcTerm.length)
        return extAccounts
       return extAccounts.filter(extAccount=>{
         return extAccount.data.name.includes(searcTerm)
              || extAccount.data.city.includes(searcTerm)
       })
     }
    )    

    
    this.totalBalanceObj = this.filteredAccounts.pipe(map(extAccounts=>{
      return extAccounts.reduce((prev,curr)=>{
        prev.balance +=  curr.ext.$balance ? curr.ext.$balance : 0
        if(curr.ext.$balanceObj && curr.ext.$balanceObj.data.isDirty)
          prev.isDirty = true
        return prev
      },{balance:0,isDirty:false})  as AccountBalance
    }))
  }
  
  
  showAccountTransactions(accSnapshot : Extended<AccountInfo>) {
    this.navCtrl.push("AccountTransactionsPage",{accountId:accSnapshot.id})
  }
  
  invalidateBalance(accSnapshot : Extended<AccountInfo>) {
    if(accSnapshot.ext.$balanceObj.data.isDirty)
      return this.abfsr.setAccountBalanceInvalid(accSnapshot.id)
  }

  presentEditAccountModal(accSnapshot : Extended<AccountInfo>) {
    this.navCtrl.push("EditAccountPage",{ accSnapshot })
  }
  presentNewAccountModal() {
    return this.presentEditAccountModal({ id:null,data:{} as AccountInfo })
  }

  onDelete(accSnapshot: Extended<AccountInfo>){
    
    const alert = this.alertController.create({
      message:`Are u sure. deleting ${accSnapshot.data.name} information`
      ,title:"Deleting Account Info"
      ,buttons:[{
        text:"Ok",
        handler:()=>{this.afsr.remove(accSnapshot)}
      }
    ,{
      text : "Cancel"
    }]}
     )
     alert.present();
  }


  ionViewDidEnter() {
    console.log('ionViewDidLoad AccountsListPage');
    if (this.titleService){
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("حساب ")
    }

  }

}
