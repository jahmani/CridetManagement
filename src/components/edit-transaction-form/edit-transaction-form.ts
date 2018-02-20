import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction, Extended, TransactionCatigory, ExtMap } from '../../interfaces/data-models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UTCToLocal, LocalToUTC } from '../../Util/dateTime';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the EditTransactionFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-transaction-form',
  templateUrl: 'edit-transaction-form.html'
})
export class EditTransactionFormComponent {

  @Input() transaction: Transaction;
  @Input() transCatsRoot: Extended<TransactionCatigory>
  @Input() transCatsMap: ExtMap<Extended<TransactionCatigory>>

  @Output() update: EventEmitter<Transaction> = new EventEmitter();
  @Output() cancel: EventEmitter<Transaction> = new EventEmitter();

  form: FormGroup
  submitAttempt: boolean = false
  constructor(private fb: FormBuilder,private datepipe: DatePipe) {
    this.form = this.fb.group(
      {
        date: '',
        ammount: ['', Validators.compose([Validators.required, Validators.min(0.00001), Validators.max(999999999)])],
        notice: '',
        catigoryId: '',
        imageSrc : ''
      }
    );
  }

  ngOnChanges() {
    let localDate: string
    console.log(this.transaction)
    if(this.transaction.date)
    localDate = this.datepipe.transform(this.transaction.date,'yyyy-MM-dd')
//    localDate = UTCToLocal(this.transaction.date)
    this.form.patchValue(this.transaction)
    this.dateCtrl.patchValue(localDate)
  }
  get ammountCtrl() {
    return this.form.get('ammount')
  }

  get dateCtrl() {
    return this.form.get('date')
  }
  dismiss() {
    let data = { account: this.transaction };
  }


  onCancel() {
    this.cancel.emit(this.transaction);
  }

  private onSave(value:Transaction) {
    const utcDate = LocalToUTC(value.date)
    const newVal = {...value,date:utcDate}
    this.update.emit(newVal)
  }
  

  onSubmit({ value, valid }: { value: Transaction, valid: boolean }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.onSave(value);
    //throw "please take care , invalid form"
  }
  onCatigoryChange(cat) {
    console.log(cat)
  }
}
