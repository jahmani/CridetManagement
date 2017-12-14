import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { Observable } from 'rxjs/Observable';
import { ExtendedData, User, StoreUser } from '../../interfaces/data-models';

/**
 * Generated class for the StoreUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-users',
  templateUrl: 'store-users.html',
})
export class StoreUsersPage {
  storeUsers : Observable<ExtendedData<StoreUser>[]>
  constructor(public navCtrl: NavController,
     public storeUsersFsRepository: StoreUsersFsRepository) {
       this.storeUsers = this.storeUsersFsRepository.FormatedList
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreUsersPage');
  }

}
