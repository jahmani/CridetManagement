import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Transaction, ExtendedData, TransactionCatigory, ExtMap, AccountInfo } from '../../interfaces/data-models';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { Observable } from 'rxjs/Observable';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/index';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';

/**
 * Generated class for the EditTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-transaction',
  templateUrl: 'edit-transaction.html',
})
export class EditTransactionPage {

  transSnapshot: ExtendedData<Transaction>;
  accountId: string;
  account:AccountInfo
  transCatsRoot :  Observable<ExtendedData<TransactionCatigory>>
  transCatsMap :  Observable<ExtMap<ExtendedData<TransactionCatigory>>>
  constructor(public navCtrl: NavController
    , private afsr: TransactionsFsRepository
    , private accountsRep: AccountsFsRepository
    , private viewController: ViewController
    , public navParams: NavParams
    , private tCatsFSR : TCatigoriesFsRepositoryProvider,
    @Optional() private titleService: TitleServiceProvider) {

    this.transSnapshot = this.navParams.get('transSnapshot')
    this.transCatsRoot = this.tCatsFSR.treeRoot as  Observable<ExtendedData<TransactionCatigory>>;
    this.transCatsMap = this.tCatsFSR.dataMap
    console.log("LLLLLLLLLLLLLLLLLLLLLL");
    this.transCatsRoot.subscribe(console.log)
    this.accountId = this.transSnapshot.data.accountId
    this.accountsRep.getOnce(this.accountId).then((extAccount)=>{
      this.account =extAccount.data
    })

  }
  ionViewDidEnter(){
    if(this.titleService)
    this.titleService.setTitle(this.account.name)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTransactionPage');
  }
  dismiss(data) {
    this.viewController.dismiss(data);
  }
  onCancel() {
    return this.dismiss(null);
  }

  onSave(transaction: Transaction) {
    transaction.accountId = this.accountId;
    this.transSnapshot.data = transaction;

    if (!this.transSnapshot.id) {
      this.afsr.saveNew(this.transSnapshot).catch((err) => {
        throw "Error saving"
     });
      this.dismiss(this.transSnapshot);

    }
    else {
      this.afsr.saveOld(this.transSnapshot).catch((error) => {
        throw "Error saving"
      });
      this.dismiss(this.transSnapshot);

    }
  }

}
