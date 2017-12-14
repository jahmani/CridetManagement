import { AuthService } from './../../app/core/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public auth: AuthService,private navCtrl: NavController) {
  }

  goLogInPage(){
    
    this.navCtrl.setRoot("LoginPage")
  }

 }
