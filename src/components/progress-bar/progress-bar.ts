import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
  private _progress: any;

  @Input() set progress (val)
  {
    this._progress =Math.ceil(val)
  }
  get progress():number
  {
    return this._progress
  }
  constructor() {
  }

}
