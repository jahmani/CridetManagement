import { Component, Optional } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MessagingService } from '../../providers/messaging-service/messaging-service';
import { Alert } from 'ionic-angular/components/alert/alert';
import { TitleServiceProvider } from '../../providers/title-service/title-service';

/**
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-settings',
  templateUrl: 'user-settings.html',
})
export class UserSettingsPage {

  notificationChecked = false
  notificationDenied = false
  constructor(
    public messagingService: MessagingService,
    public navCtrl: NavController,
    @Optional() private titleService: TitleServiceProvider
 ) {
    this.init()
  }

  init() {

    if(Notification['permission'] == 'denied'){
      this.notificationDenied = true
    }
    else
    {
    const token = this.messagingService.getFcmTokenLocal()
      if(token)
        this.notificationChecked =  true
    }
    console.log('ionViewDidLoad UserSettingsPage');
  }
  
  onChange($event){
    console.log("Enable Notification Toggle Changed to : ", $event.checked)
    if($event.checked)
      this.messagingService.enableNotifications();
    else
      this.messagingService.disableNotifications();
  }
  ionViewDidEnter() {
    if (this.titleService){
      
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("User Settings " )
    }
  }
}
