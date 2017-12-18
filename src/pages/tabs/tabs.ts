import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Tabs } from 'ionic-angular/components/tabs/tabs';

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
  providers: [TitleServiceProvider]
})

export class TabsPage {
  
  title: Observable<string>
  subNavCtrl : NavController
  canGoBack: Observable<boolean> = Observable.of(false)

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private titleService: TitleServiceProvider,
    viewCtrl: ViewController ) {
    let paramTabRoot = this.navParams.get("component")
    this.tabRoot = paramTabRoot || this.tabRoot
    this.title = this.titleService.title
    this.canGoBack = this.titleService.nav.flatMap((nav) => {
      if (!nav)
        return Observable.of(false)
      this.subNavCtrl = nav
      const first = nav.first()
      return nav.viewDidEnter.map((view) => {
        const can = view != first
        return can
      })
    })

  }

  tabRoot = "AccountsListPage"
  ionViewDidEnter() {
    console.log('ionViewDidLoad TabsPage')
    const childNavs: Tabs[] = this.navCtrl.getActiveChildNavs()
    const tabs: Tabs = childNavs[0]
    tabs.setTabbarHidden(true)
  }

  goBack(){
    if(this.subNavCtrl)
      return this.subNavCtrl.pop()
  }

}
