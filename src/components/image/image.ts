import { Component } from '@angular/core';

/**
 * Generated class for the ImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image',
  templateUrl: 'image.html'
})
export class ImageComponent {

  text: string;

  constructor() {
    console.log('Hello ImageComponent Component');
    this.text = 'Hello World';
  }

}
