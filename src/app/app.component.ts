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
  storePages: Array<{ title: string, component: any }>;
  userPages: Array<{ title: string, component: any }>;

  constructor(private tabService: TabServiceProvider) {

    // used for an example of ngFor and navigation
    this.storePages = [
      { title: 'StoreUsersPage', component: "StoreUsersPage" },
      { title: 'Home', component: HomePage },
      { title: 'Accounts', component: "AccountsListPage" },
      { title: "Cats", component: "TransactionCatsPage" },
      { title: "UserSettingsPage", component: "UserSettingsPage" },
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

  }

  openStorePage(page) {
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav()) {
      this.tabService.setTab(page)
    }
    else
      this.nav.setRoot("TabsPage", page);
  }
  openUserPage(page) {
    this.nav.setRoot(page.component);
  }
}
