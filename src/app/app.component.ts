import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountsListPage } from '../pages/accounts-list/accounts-list';
import { TabServiceProvider } from '../providers/tab-service/tab-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "TabsPage";
  storePages: Array<{ title: string, component: any ,icon?:string }>;
  userPages: Array<{ title: string, component: any ,icon?:string}>;
  zombiedOwnerId : string
  constructor(private tabService: TabServiceProvider) {

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
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs()) {
      this.tabService.setTab(page)
    }
    else
      this.nav.setRoot("TabsPage", page);
  }
  openUserPage(page) {
    this.nav.setRoot(page.component);
  }
}
