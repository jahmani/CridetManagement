import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ExtendedData, UserStore } from '../../interfaces/data-models';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { UserStoresFsRepository } from '../../FireStoreData/user-stores-fs-repository';
import { StoresFsRepository } from '../../FireStoreData/stores-fs-repository';
import { AuthService } from '../../app/core/index';
import { ActiveStoreService } from '../../FireStoreData/activeStore';

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
    private auth : AuthService,
    public userStoresFsRepository: UserStoresFsRepository,
    private storesFsRepository:StoresFsRepository,
  private activeStoreServise : ActiveStoreService) {
    this.userStores = this.userStoresFsRepository.FormatedList
  }

  createNewStore(){
    return this.auth.user.take(1).subscribe((user)=>{
      return this.storesFsRepository.createNewStore(user.uid)      
    })
  }

  onStoreSelected(extStore:ExtendedData<UserStore>)
  {
    this.activeStoreServise.activeStoreKey = extStore.id
    const accountsPage = { title: 'Accounts', component: 'AccountsListPage' }
    
    this.navCtrl.setRoot("TabsPage", accountsPage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserStoresPage');

  }

}
