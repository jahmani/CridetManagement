import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { Extended, TransactionCatigory } from '../../interfaces/data-models';
/**
 * Generated class for the TransCatsPickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trans-cats-picker-list',
  templateUrl: 'trans-cats-picker-list.html'
})
export class TransCatsPickerListComponent {

  selectedCatigory : Observable<Extended<TransactionCatigory>>    
  transactionRootCat :  Extended<TransactionCatigory>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewController: ViewController) {
      this.transactionRootCat = this.navParams.get("transCatsRoot");
      console.log('Hello TransCatsPickerListComponent Component');
      
      console.log(this.transactionRootCat)
      
  }
  onNodeSelected( node : Extended<TransactionCatigory>)
  {
    return this.viewController.dismiss(node)
  }
  onCancel(){
    return this.viewController.dismiss()
    
  }

}
