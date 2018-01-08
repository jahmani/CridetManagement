import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountsListPage } from '../pages/accounts-list/accounts-list';
import { TabServiceProvider } from '../providers/tab-service/tab-service';
import { AuthService } from './core/auth';
import { UserStoresService } from '../FireStoreData/user-stores-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest } from 'rxjs/operators/combineLatest';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any // = "TabsPage";
  storePages: Array<{ title: string, component: any ,icon?:string }>;
  userPages: Array<{ title: string, component: any ,icon?:string}>;
  noUserPages: Array<{ title: string, component: any ,icon?:string}>;
  autherised : boolean =false
  haseDefaultStore : boolean =false
  hasActiveStore : boolean =false
  subscription : Subscription
  zombiedOwnerId : string
  constructor(
    private tabService: TabServiceProvider,
    private authService : AuthService,
    private userStoresService : UserStoresService,
    private activeStoreService : ActiveStoreService
  ) {
    this.activeStoreService.activeStoreKey$.subscribe(key=>this.hasActiveStore = !!key)
    this.subscription = this.authService.user.subscribe((user)=>{
      if(user)
      {
        this.autherised = true
        const extUserStore = this.activeStoreService.activeStoreKey
          if(extUserStore)
          {
            this.haseDefaultStore = true
            this.hasActiveStore = true
            this.activeStoreService.setActiveStoreKey(extUserStore.id)
            this.rootPage = "TabsPage"
          }
          else
          {
            this.haseDefaultStore = false
            this.hasActiveStore = false
            this.rootPage = "UserStoresPage"
          }
      }
      else{
        this.autherised = false
        this.haseDefaultStore = false
        this.hasActiveStore = false
        this.activeStoreService.clearActiveStoreKey()
        this.rootPage = "LoginPage"
      }
    })

    // used for an example of ngFor and navigation
    this.storePages  = [
      { title: 'StoreUsersPage', component: "StoreUsersPage" , icon:"people" },
      { title: 'Accounts', component: "AccountsListPage" , icon:"contacts" },
      { title: "Cats", component: "TransactionCatsPage", icon:"pricetags" },
      { title: "UserSettingsPage", component: "UserSettingsPage", icon:"settings" },
      //  { title: "UserSettingsPage", component: "UserSettingsPage" }
      //  { title: "UserSettingsPage", component: "UserSettingsPage" }
      
    ];

    this.noUserPages = [
      { title: 'Login', component: "LoginPage" , icon:"log-in"},
      { title: 'Signup', component: "SignupPage" }
    ];

    this.userPages = [
      { title: 'SignOut', component: "LoginPage" , icon:"log-out"},
      { title: "UserStoresPage", component: "UserStoresPage" }
    ];

    this.zombiedOwnerId  = localStorage.getItem("firestore/[DEFAULT]/cridetmanagement/zombiedOwnerId")

  }

  openStorePage(page) {
    // if have child naves (Tabs Navigation)
    if (this.nav.getActiveChildNavs().length != 0) {
      this.tabService.setTab(page)
    }
    else
      this.nav.setRoot("TabsPage", page);
  }
  openNoUserPage(page) {
    this.nav.setRoot(page.component);
  }
  openUserPage(page) {
    if(page.title =='SignOut')
    {
      this.authService.signOut()
    }
    else
     this.nav.setRoot(page.component);
  }
}
