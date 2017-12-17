import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,TabButton } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({segment: 'tabs'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('.tabbar') tabBar : ElementRef
  tabBarElements
  title : string = "Store Title"
  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
         //get all tabs elements
         let paramTabRoot =  this.navParams.get("component")
         let paramTitle =  this.navParams.get("title")
         this.tabRoot = paramTabRoot|| this.tabRoot
         this.title = paramTitle || this. title
    if (document.querySelector('.tabbar')) {
      this.tabBarElements = document.querySelectorAll('.tabbar.show-tabbar');
    }

  }
  tabRoot ="AccountsListPage"
  ionViewDidEnter() {
    console.log('ionViewDidLoad TabsPage')
    }

  

}
