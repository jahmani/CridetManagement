import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountsListPage } from './accounts-list';

@NgModule({
  declarations: [
    AccountsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountsListPage),
  ],
})
export class AccountsListPageModule {}
