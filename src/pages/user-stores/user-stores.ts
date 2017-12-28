import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Extended, UserStore } from '../../interfaces/data-models';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { UserStoresFsRepository } from '../../FireStoreData/user-stores-fs-repository';
import { StoresFsRepository } from '../../FireStoreData/stores-fs-repository';
import { AuthService } from '../../app/core/index';
import { ActiveStoreService } from '../../FireStoreData/activeStore';
import { NavController, IonicPage } from 'ionic-angular';
import {take} from 'rxjs/operators/take';

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
  userStores: Observable<Extended<UserStore>[]>
  constructor(public navCtrl: NavController,
    private auth : AuthService,
    public userStoresFsRepository: UserStoresFsRepository,
    private storesFsRepository:StoresFsRepository,
  private activeStoreServise : ActiveStoreService) {
    this.userStores = this.userStoresFsRepository.FormatedList
  }

  createNewStore(){
    return this.auth.user.pipe(take(1)).subscribe((user)=>{
      return this.storesFsRepository.createNewStore(user.uid)      
    })
  }

  onStoreSelected(extStore:Extended<UserStore>)
  {
    this.activeStoreServise.activeStoreKey = extStore.id
    const accountsPage = { title: 'Accounts', component: 'AccountsListPage' }
    
    this.navCtrl.setRoot("TabsPage", accountsPage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserStoresPage');

  }

}
