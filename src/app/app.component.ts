import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor() {

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'StoreUsersPage', component: "StoreUsersPage" },
      { title: 'Home', component: HomePage },
      { title: 'Login', component: "LoginPage" },
      { title: 'Signup', component: "SignupPage" },
      { title: 'Accounts', component: "AccountsListPage" },
      { title: "Cats", component: "TransactionCatsPage" },
      { title: "UserSettingsPage", component: "UserSettingsPage" }
    //  { title: "UserSettingsPage", component: "UserSettingsPage" }
    //  { title: "UserSettingsPage", component: "UserSettingsPage" }
    //  { title: "UserSettingsPage", component: "UserSettingsPage" }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
