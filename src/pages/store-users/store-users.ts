import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { Observable } from 'rxjs/Observable';
import { Extended, User, StoreUser, Invite } from '../../interfaces/data-models';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { InvitesFsRepository } from '../../FireStoreData/invites-fs-repository';
import { ActiveStoreService } from '../../FireStoreData/activeStore';
import { UsersFsRepository } from '../../FireStoreData/users-fs-repository';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  storeInvites: Observable<Extended<Invite>[]>
  form: FormGroup
  
  constructor(public navCtrl: NavController
    ,@Optional() private titleService: TitleServiceProvider
    ,public usersFsRepository: UsersFsRepository
    ,private fb : FormBuilder
    
    ,public storeUsersFsRepository: StoreUsersFsRepository
    , private invitesFsRepository : InvitesFsRepository
    , private activeStoreService : ActiveStoreService) {
      this.form = this.fb.group(
        {
          email: '',
        }
      );
    this.storeUsers = this.storeUsersFsRepository.FormatedList
    this.storeInvites = <Observable<Extended<Invite>[]>> this.invitesFsRepository.getStoreInvites(this.activeStoreService.activeStoreKey)
  }
  onSubmit(form: FormGroup)
  {
    const email = form.value.email
    this.usersFsRepository.getByEmail(email).then(val=>{
      console.log("uid : ", val.uid )
      this.invitesFsRepository.invite(val.uid,this.activeStoreService.activeStoreKey)
    }).catch(err=>{
      console.log("Error , cnat find uder of email ", email)
      console.log(err)
    })
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

  invite(userId){
    this.invitesFsRepository.invite(userId,this.activeStoreService.activeStoreKey)
  }

}
