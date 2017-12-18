import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { Transaction, ExtendedData, ExtMap, AccountInfo } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider, AccountsFsRepository } from '../../StoreData/index';
import { TitleServiceProvider } from '../../providers/title-service/title-service';


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
  transSnapshots: Observable<ExtMap<ExtendedData<Transaction>>>
  transSnapshotsArray: Observable<ExtendedData<Transaction>[]>
  accountId: string
  account: AccountInfo

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private transactionsRep: TransactionsFsRepository
    , private accountsRep: AccountsFsRepository
    , private modalController: ModalController
    , @Optional() private titleService: TitleServiceProvider
    , tCatigoriesFsRepositoryProvider: TCatigoriesFsRepositoryProvider) {
    this.accountId = this.navParams.get('accountId');
    this.transSnapshots = this.transactionsRep.forAccount(this.accountId);
    this.transSnapshotsArray = this.transSnapshots.map((m) => m.toArray())
    this.transSnapshotsArray.subscribe(console.log)
    this.accountsRep.getOnce(this.accountId).then((extAccount) => {
      this.account = extAccount.data

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountTransactionsPage');
  }

  presentEditTransactionModal(transSnapshot: ExtendedData<Transaction>) {
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
        this.titleService.setTitle("حساب " + this.account.name)
      }
    })
  }


  presentNewTransactionModal(type: number) {
    const newTransaction: Transaction = {
      type
      , accountId: this.accountId
      , date: new Date(Date.now())
    } as Transaction
    return this.presentEditTransactionModal({ id: null, data: newTransaction })
  }


}
