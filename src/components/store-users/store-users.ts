import { Component } from '@angular/core';

/**
 * Generated class for the StoreUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'store-users',
  templateUrl: 'store-users.html'
})
export class StoreUsersComponent {

  text: string;

  constructor() {
    
    console.log('Hello StoreUsersComponent Component');
    this.text = 'Hello World';
  }

}
