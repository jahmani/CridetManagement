import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TabServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface page{
  title:string
  component:string }
@Injectable()
export class TabServiceProvider {
  private tabSubject : BehaviorSubject<page>
  tab : Observable<page>

  constructor() {
    console.log('Hello TabServiceProvider Provider');
    const defaultPage = { title: 'Accounts', component: "AccountsListPage" }    
    this.tabSubject = new BehaviorSubject(defaultPage)
    this.tab = this.tabSubject.asObservable()
  }
  setTab(_tab:page){
      if(_tab != this.tabSubject.getValue())
      this.tabSubject.next(_tab)
  }


}
