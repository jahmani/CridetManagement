import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Extended, PLLine } from '../../interfaces/data-models';

/**
 * Generated class for the PlLineRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pl-line-row',
  templateUrl: 'pl-line-row.html'
})
export class PlLineRowComponent {

  @Input() plLine : Extended<PLLine>
  @Input() index : number;
  @Input() isActive : Boolean;
  @Output() plLineClicked : EventEmitter<number>
    = new EventEmitter()
  @Output() plLineEditClicked : EventEmitter<Extended<PLLine>> = new EventEmitter()

  constructor() {
    console.log('Hello PlLineRowComponent Component');
  }
  onPlLineClicked(){
    this.plLineClicked.emit(this.index)
  }
  onPlLineEditClicked(){
    this.plLineEditClicked.emit(this.plLine)
  }
}
