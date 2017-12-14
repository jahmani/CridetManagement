import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../app/core/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  form : FormGroup
  submitAttempt : boolean = false
  constructor(
    private fb : FormBuilder,
    private auth : AuthService,
    private navCtrl: NavController) {
      this.form = this.fb.group(
      {
        email:['', Validators.compose([Validators.required, Validators.email])],
        password:['', Validators.required],
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSubmit({ value, valid }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid){
      this.auth.signupUser(value.email,value.password)
      .then(()=>this.navCtrl.setRoot(HomePage))

    }   
    //throw "please take care , invalid form"
  }
  goLogInPage(){
    this.navCtrl.setRoot("LoginPage")
  }
}