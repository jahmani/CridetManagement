import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { Transaction, Extended, ExtMap, AccountInfo } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider, AccountsFsRepository } from '../../StoreData/index';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import {map} from 'rxjs/Operators/map'
import { UTCToLocal } from '../../Util/dateTime';

/**
 * Generated class for the AccountTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-transactions',
  templateUrl: 'account-transactions.html',
})
export class AccountTransactionsPage {
  transSnapshots: Observable<ExtMap<Extended<Transaction>>>
  transSnapshotsArray: Observable<Extended<Transaction>[]>
  accountId: string
  extAccount: Observable<Extended<AccountInfo>>

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private alertController : AlertController
    , private transactionsRep: TransactionsFsRepository
    , private accountsRep: AccountsFsRepository
    , private modalController: ModalController
    , @Optional() private titleService: TitleServiceProvider
    , tCatigoriesFsRepositoryProvider: TCatigoriesFsRepositoryProvider) {
    this.accountId = this.navParams.get('accountId');
    this.transSnapshots = this.transactionsRep.forAccount(this.accountId);
    this.transSnapshotsArray = this.transSnapshots.pipe(map((m) => m.toArray().sort((a,b)=>{
      return Date.parse(a.data.date)-Date.parse(b.data.date)
    })))
    this.transSnapshotsArray.subscribe(console.log)
    this.extAccount = this.accountsRep.getExtended(this.accountId)
    /*
    (this.accountId).then((extAccount) => {
      this.extAccount = extAccount

    })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransactionsPage');
  }

  presentEditTransactionModal(transSnapshot: Extended<Transaction>) {
    this.navCtrl.push("EditTransactionPage", { transSnapshot })
    /*    
        let editTransactionModal = this.modalController.create("EditTransactionPage", { transSnapshot });
        editTransactionModal.onDidDismiss(data => {
          console.log(data);
        });
         editTransactionModal.present();
         */
  }
  ionViewDidEnter() {
    this.accountsRep.getOnce(this.accountId).then((extAccount) => {
      if (this.titleService){
        
        this.titleService.setNav(this.navCtrl)
        this.titleService.setTitle("حساب " + extAccount.data.name)
      }
    })
  }


  onDelete(transSnapshot: Extended<Transaction>){
    
    const alert = this.alertController.create({
      message:`Are u sure. deleting ${transSnapshot.data.ammount} Transaction`
      ,title:"Deleting Transaction"
      ,buttons:[{
        text:"Ok",
        handler:()=>{this.transactionsRep.remove(transSnapshot)}
      }
    ,{
      text : "Cancel"
    }]}
     )
     alert.present();
  }


  presentNewTransactionModal(type: number) {
    let date = new Date().toISOString()
//    date = UTCToLocal(date)

    const newTransaction: Transaction = {
      type
      , accountId: this.accountId
      , date: date
    } as Transaction
    return this.presentEditTransactionModal({ id: null, data: newTransaction })
  }


}
