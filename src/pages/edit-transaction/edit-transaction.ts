import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Transaction, Extended, TransactionCatigory, ExtMap, AccountInfo, TransactionType } from '../../interfaces/data-models';
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

  transSnapshot: Extended<Transaction>;
  accountId: string;
  account:AccountInfo
  transCatsRoot :  Observable<Extended<TransactionCatigory>>
  transCatsMap :  Observable<ExtMap<Extended<TransactionCatigory>>>
  constructor(public navCtrl: NavController
    , private afsr: TransactionsFsRepository
    , private accountsRep: AccountsFsRepository
    , private viewController: ViewController
    , public navParams: NavParams
    , private tCatsFSR : TCatigoriesFsRepositoryProvider,
    @Optional() private titleService: TitleServiceProvider) {

    this.transSnapshot = this.navParams.get('transSnapshot')
    this.transCatsRoot = this.tCatsFSR.treeRoot as  Observable<Extended<TransactionCatigory>>;
    this.transCatsMap = this.tCatsFSR.dataMap

    this.transCatsRoot.subscribe(console.log)
    this.accountId = this.transSnapshot.data.accountId
    this.accountsRep.getOnce(this.accountId).then((extAccount)=>{
      this.account =extAccount.data
    })

    
  }
  type
  ionViewDidEnter(){
    if(this.titleService)
    {
      this.type = this.transSnapshot.data.type
      let msg = this.transSnapshot.data.type == TransactionType.Credit ? "قيد على "  : "قيد لـ "
    this.titleService.setTitle(msg + this.account.name)
    }

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

    this.transSnapshot.data = {...transaction,
      accountId:this.accountId,type:this.type};

    if (!this.transSnapshot.id) {
      this.afsr.saveNew(this.transSnapshot);
      this.dismiss(this.transSnapshot);

    }
    else {
      this.afsr.saveOld(this.transSnapshot)
      this.dismiss(this.transSnapshot);

    }
  }

}
