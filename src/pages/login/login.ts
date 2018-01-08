import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../app/core/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form : FormGroup
  submitAttempt : boolean = false
  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private navCtrl: NavController) {
    this.form = this.fb.group(
      {
        email:['', Validators.compose([Validators.required, Validators.email])],
        password:'',
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  onSubmit({ value, valid }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.auth.signInWithEmail(value.email,value.password)
      //.then(()=>this.navCtrl.setRoot(HomePage))

    //throw "please take care , invalid form"
  }
  createAccount(){
    this.navCtrl.setRoot("SignupPage")
  }
}
