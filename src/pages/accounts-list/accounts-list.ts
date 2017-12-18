import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AccountInfo, ExtendedData } from '../../interfaces/data-models';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';

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

  accounts: Observable<ExtendedData<AccountInfo>[]>
  
  constructor(
      public navCtrl: NavController
    , private afsr : AccountsFsRepository
    , private modalController : ModalController
    , private alertController : AlertController
    , @Optional() private titleService: TitleServiceProvider) {
    this.accounts = this.afsr.List();
   // this.accounts.subscribe(console.log)
  }

  
  showAccountTransactions(accSnapshot : ExtendedData<AccountInfo>) {
    this.navCtrl.push("AccountTransactionsPage",{accountId:accSnapshot.id})
  }
  
  presentEditAccountModal(accSnapshot : ExtendedData<AccountInfo>) {
    this.navCtrl.push("EditAccountPage",{ accSnapshot })
  }
  presentNewAccountModal() {
    return this.presentEditAccountModal({ id:null,data:{} as AccountInfo })
  }

  onDelete(accSnapshot: ExtendedData<AccountInfo>){
    
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
