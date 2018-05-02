import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, PopoverController } from 'ionic-angular';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TabServiceProvider } from '../../providers/tab-service/tab-service';
import { Subscription } from 'rxjs/Subscription';
import {map} from 'rxjs/Operators/map'
import {mergeMap} from 'rxjs/Operators/mergeMap'
import { ConnectionServiceProvider } from '../../providers/connection-service/connection-service';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/t-catigories-fs-repository';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { AccountsBalanceFBRepository } from '../../StoreData/account-balance-fb-repository';
import { HomePage } from '../home/home';
import { ImagesFsRepository } from '../../StoreData/images-fs-repository';
import { ProductsFsRepository } from '../../StoreData/products-fs-repository';
import { OrdersFsRepository } from '../../StoreData/orders-fs-repository';
import { PLLinesFsRepository } from '../../StoreData/orderPLLines-fs-repository';

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
    , TCatigoriesFsRepositoryProvider, StoreUsersFsRepository
    , AccountsBalanceFBRepository,ImagesFsRepository,
      ProductsFsRepository,OrdersFsRepository,
    PLLinesFsRepository]
})



export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs
  title: Observable<string>
  subNavCtrl: NavController
  canGoBack: Observable<boolean> = Observable.of(false)
  private tabServiceSub: Subscription
  tabRoot = "OrdersListPage"
  isConnected
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private titleService: TitleServiceProvider,
    private tabService: TabServiceProvider,
    connectionService : ConnectionServiceProvider,
    public popoverCtrl: PopoverController) {
      this.isConnected = connectionService.fbConnectionStatus
      
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

    this.canGoBack = this.titleService.nav.pipe(mergeMap((nav) => {
      if (!nav)
        return Observable.of(false)
      this.subNavCtrl = nav

      return nav.viewDidEnter.pipe(map((view: ViewController) => !!(view.index)))
    })

  )


  }
  presentUserPopover(clickEvent) {
    let popover = this.popoverCtrl.create(HomePage);
    popover.present({ev:clickEvent});
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
