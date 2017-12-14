import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AccountInfo, ExtendedData } from '../../interfaces/data-models';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EditAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-account',
  templateUrl: 'edit-account.html',
})
export class EditAccountPage {

  accSnapshot: ExtendedData<AccountInfo>;
  accountId: string;

  constructor(public navCtrl: NavController
    , private afsr: AccountsFsRepository
    , private viewController: ViewController
    , public navParams: NavParams) {

    this.accSnapshot = this.navParams.get('accSnapshot')
    console.log(this.accSnapshot);
    this.accountId = this.accSnapshot.id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAccountPage');
  }
  dismiss(data) {
    // let data = { account: this.account };
    this.viewController.dismiss(data);
  }
  onCancel() {
    return this.dismiss(null);
  }
  onSave(accSnapshot: ExtendedData<AccountInfo>) {
    if (!this.accountId) {
      this.afsr.saveNew(accSnapshot).catch((err) => {
        throw "Error saving"
     });
      this.dismiss(accSnapshot);

    }
    else {
      this.afsr.saveOld(accSnapshot).catch((error) => {
        throw "Error saving"
      });
      this.dismiss(accSnapshot);

    }
  }

}
