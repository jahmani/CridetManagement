import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/*
  Generated class for the TitleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TitleServiceProvider {
  private titleSubject : BehaviorSubject<string>
  private navSubject : BehaviorSubject<NavController>
  title : Observable<string>
  nav : Observable<NavController>
  constructor() {
    console.log('Hello TitleServiceProvider Provider');
    this.titleSubject = new BehaviorSubject("title")
    this.navSubject = new BehaviorSubject(null)
    this.title = this.titleSubject.asObservable()
    this.nav = this.navSubject.asObservable()
  }
  
  setTitle(title:string){
    this.titleSubject.next(title)
  }


  setNav(_nav:NavController){
    if(_nav != this.navSubject.getValue())
      this.navSubject.next(_nav)
  }
}
