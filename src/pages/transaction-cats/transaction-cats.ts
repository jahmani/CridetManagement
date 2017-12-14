import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/index';
import { ExtendedData, TransactionCatigory } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TransactionCatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-cats',
  templateUrl: 'transaction-cats.html',
})
export class TransactionCatsPage {

  transactionCats : Observable<ExtendedData<TransactionCatigory>[]>    
  transactionRootCat :  Observable<ExtendedData<TransactionCatigory>>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tCatsFSR : TCatigoriesFsRepositoryProvider) {
      this.transactionRootCat = this.tCatsFSR.treeRoot;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionCatsPage');
  }
  onNodeSelected($event){
    return Promise.reject("Not implemented yet")
  }
}
