import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AccountsFsRepository, TransactionsFsRepository, TCatigoriesFsRepositoryProvider, StoreUsersFsRepository } from '../../StoreData/index';
import { TabServiceProvider } from '../../providers/tab-service/tab-service';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/Operators/map'

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage({ segment: 'tabs' })
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers: [TitleServiceProvider
    , AccountsFsRepository, TransactionsFsRepository
    , TCatigoriesFsRepositoryProvider, StoreUsersFsRepository]
})

export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs
  title: Observable<string>
  subNavCtrl: NavController
  canGoBack: Observable<boolean> = Observable.of(false)
  private tabServiceSub: Subscription
  tabRoot = "AccountsListPage"

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private titleService: TitleServiceProvider,
    private tabService: TabServiceProvider) {
    let paramTabRoot = this.navParams.get("component")
    if (this.subNavCtrl)
      this.tabService.setTab(this.navParams.data)
    else
      this.tabRoot = paramTabRoot || this.tabRoot
    this.title = this.titleService.title
    this.tabServiceSub = this.tabService.tab.subscribe((page) => {
      if (page && page.component) {
        if (this.subNavCtrl)
          this.subNavCtrl.setRoot(page.component)
      }
    })

    this.canGoBack = this.titleService.nav.flatMap((nav) => {
      if (!nav)
        return Observable.of(false)
      this.subNavCtrl = nav

      return nav.viewDidEnter.pipe(map((view: ViewController) => !!(view.index)))
    })


  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad TabsPage')
    this.tabs.setTabbarHidden(true)
    /*
    console.log(this.tabs)
    const childNavs: Tabs[] = this.navCtrl.getActiveChildNavs()
    //even in the template we used 1 tabs component
    //at run time we might get 2 tabs components
    // the second tabs component is the new active one
    // if we have 2 tabs component use the second

    const tabs: Tabs = childNavs[childNavs.length-1]
    
    tabs.setTabbarHidden(true)
    */
  }
  ionViewWillUnload() {

    if (this.tabServiceSub)
      this.tabServiceSub.unsubscribe()
  }

  goBack() {
    if (this.subNavCtrl)
      return this.subNavCtrl.pop()
  }

}
