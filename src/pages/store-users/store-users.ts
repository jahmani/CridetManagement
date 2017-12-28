import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { Observable } from 'rxjs/Observable';
import { Extended, User, StoreUser } from '../../interfaces/data-models';
import { TitleServiceProvider } from '../../providers/title-service/title-service';

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
  storeUsers: Observable<Extended<StoreUser>[]>
  constructor(public navCtrl: NavController
    ,@Optional() private titleService: TitleServiceProvider
    ,public storeUsersFsRepository: StoreUsersFsRepository) {
    this.storeUsers = this.storeUsersFsRepository.FormatedList
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreUsersPage');
  }
  ionViewDidEnter() {
      if (this.titleService){
        
        this.titleService.setNav(this.navCtrl)
        this.titleService.setTitle("store users " )
      }
  }

}
