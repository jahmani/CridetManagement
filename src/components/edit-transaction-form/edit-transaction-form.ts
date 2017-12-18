import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction, ExtendedData, TransactionCatigory, ExtMap } from '../../interfaces/data-models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  @Input() transCatsRoot: ExtendedData<TransactionCatigory>
  @Input() transCatsMap: ExtMap<ExtendedData<TransactionCatigory>>

  @Output() update: EventEmitter<Transaction> = new EventEmitter();
  @Output() cancel: EventEmitter<Transaction> = new EventEmitter();

  form: FormGroup
  submitAttempt: boolean = false
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        type: ['', Validators.compose([Validators.required])],
        date: '',
        ammount: ['', Validators.compose([Validators.required, Validators.min(0.00001), Validators.max(999999999)])],
        notice: '',
        catigoryId: ''
      }
    );
  }

  ngOnChanges() {
    console.log(this.transaction)
    this.form.patchValue(this.transaction)
  }

  get ammountCtrl() {
    return this.form.get('ammount')
  }
  dismiss() {
    let data = { account: this.transaction };
  }


  onCancel() {
    this.cancel.emit(this.transaction);
  }

  private onSave(value) {
    this.update.emit(value)
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
