import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountsListPage } from '../pages/accounts-list/accounts-list';
import { TabServiceProvider } from '../providers/tab-service/tab-service';
import { AuthService } from './core/auth';
import { UserStoresService } from '../FireStoreData/user-stores-fs-repository';
import { ActiveStoreService } from '../FireStoreData/activeStore';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any // = "TabsPage";
  storePages: Array<{ title: string, component: any ,icon?:string }>;
  userPages: Array<{ title: string, component: any ,icon?:string}>;
  zombiedOwnerId : string
  constructor(
    private tabService: TabServiceProvider,
    private authService : AuthService,
    private userStoresService : UserStoresService,
    private activeStoreService : ActiveStoreService
  ) {

    this.authService.user.subscribe(user=>{
      if(user)
      {
        this.userStoresService.getSingleOrDefault().subscribe(extUserStore=>{
          if(extUserStore)
          {
            this.activeStoreService.activeStoreKey = extUserStore.id
            this.rootPage = "TabsPage"
          }
          else
            this.rootPage = "UserStoresPage"
        })
      }
      else{
        this.rootPage = "LoginPage"
      }
    })

    // used for an example of ngFor and navigation
    this.storePages  = [
      { title: 'StoreUsersPage', component: "StoreUsersPage" , icon:"people" },
      { title: 'Home', component: HomePage, icon:"home" },
      { title: 'Accounts', component: "AccountsListPage" , icon:"contacts" },
      { title: "Cats", component: "TransactionCatsPage", icon:"pricetags" },
      { title: "UserSettingsPage", component: "UserSettingsPage", icon:"settings" },
      //  { title: "UserSettingsPage", component: "UserSettingsPage" }
      //  { title: "UserSettingsPage", component: "UserSettingsPage" }
      
    ];


    this.userPages = [
      { title: 'Login', component: "LoginPage" },
      { title: 'Signup', component: "SignupPage" },
      { title: "UserStoresPage", component: "UserStoresPage" }
      //  { title: "UserSettingsPage", component: "UserSettingsPage" }
      //  { title: "UserSettingsPage", component: "UserSettingsPage" }
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
  openUserPage(page) {
    this.nav.setRoot(page.component);
  }
}
