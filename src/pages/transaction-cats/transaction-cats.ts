import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Extended, TransactionCatigory } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/t-catigories-fs-repository';

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
  transactionCats : Observable<Extended<TransactionCatigory>[]>    
  transactionRootCat :  Observable<Extended<TransactionCatigory>>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    , @Optional() private titleService: TitleServiceProvider
    ,
    private tCatsFSR : TCatigoriesFsRepositoryProvider) {
      this.transactionRootCat = this.tCatsFSR.treeRoot;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionCatsPage');
  }
  onNewTransCat(){
    this.navCtrl.push("EditTransactionCatPage")
  }
  onNodeSelected($event){
    this.navCtrl.push("EditTransactionCatPage",{transactionCatId:$event.id})
  }
  ionViewDidEnter() {
      if (this.titleService){
        
        this.titleService.setNav(this.navCtrl)
        this.titleService.setTitle("Cats " )
      }
    }

}
