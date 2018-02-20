import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TitleServiceProvider } from '../../providers/title-service/title-service';

/**
 * Generated class for the StoreSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-settings',
  templateUrl: 'store-settings.html',
})
export class StoreSettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams ,
    @Optional() private titleService: TitleServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreSettingsPage');
  }
  ionViewDidEnter() {
    if (this.titleService){
      
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("Cats " )
    }
  }
}
