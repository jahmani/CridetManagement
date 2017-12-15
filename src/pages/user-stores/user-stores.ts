import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ExtendedData, UserStore } from '../../interfaces/data-models';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { UserStoresFsRepository } from '../../FireStoreData/user-stores-fs-repository';

/**
 * Generated class for the UserStoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-stores',
  templateUrl: 'user-stores.html',
})
export class UserStoresPage {
  userStores: Observable<ExtendedData<UserStore>[]>
  constructor(public navCtrl: NavController,
    public userStoresFsRepository: UserStoresFsRepository) {
    this.userStores = this.userStoresFsRepository.FormatedList
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserStoresPage');

  }

}
