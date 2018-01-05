import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';


/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfileComponent {

  @Input() user : User;
  @Output() signout : EventEmitter<any> = new EventEmitter();
  @Output() googleLogin : EventEmitter<any> = new EventEmitter();
  constructor() {
    console.log('Hello UserProfileComponent Component');
  }
  onSignout(){
    this.signout.emit("signOut");
  }
  onGoogleLogin(){
    this.googleLogin.emit();
  }

}
