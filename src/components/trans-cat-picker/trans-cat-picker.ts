
import { Input, Component, forwardRef } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TransCatsPickerListComponent } from '../trans-cats-picker-list/trans-cats-picker-list';
import { Extended, TransactionCatigory, ExtMap } from '../../interfaces/data-models';


/**
 * Generated class for the TransCatPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trans-cat-picker',
  templateUrl: 'trans-cat-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TransCatPickerComponent),
      multi: true
    }
  ]
})
export class TransCatPickerComponent implements ControlValueAccessor {

  onChange
  catigoryId: string
  catigory: Extended<TransactionCatigory>
  @Input() transCatsRoot: Extended<TransactionCatigory>
  @Input() transCatsMap: ExtMap<Extended<TransactionCatigory>>
  // @Output() catigoryChange = new EventEmitter<TreeNodeDataSnapshot>();
  constructor(private modalController: ModalController) {
    console.log('Hello TransCatPickerComponent Component');
  }
  get buttonText() {
    return this.catigory ? this.catigory.data.name : "Cat"
  }

  onClick() {
    let catigoriesPageModal = this.modalController.create(TransCatsPickerListComponent
      , { selectedCatigory: this.catigory, transCatsRoot: this.transCatsRoot });
    catigoriesPageModal.onDidDismiss((catigory) => {
      if (catigory) {
        this.onChange(catigory.id);
        this.catigory = catigory
        this.catigoryId = catigory.id
      }
    });

    catigoriesPageModal.present();
  }
  onSelectCat(catigory)  {
    if (catigory) {
      this.onChange(catigory.id);
      this.catigory = catigory
      this.catigoryId = catigory.id
      this.expanded = false
    }
  }
  writeValue(obj: any): void {
    this.catigoryId = obj
    this.catigory = this.transCatsMap.get(obj)
    if(this.catigory)
      this.expanded = false
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }
  expanded: boolean = true
  expand() {
    this.expanded = !this.expanded
  }
}
