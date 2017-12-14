import { Component, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ExtendedData, AccountInfo } from '../../interfaces/data-models';

/*
  Generated class for the EditAccount component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'edit-account',
  templateUrl: 'edit-account.html'
})

export class EditAccountComponent {

  @Input() account:ExtendedData<AccountInfo>;
  @Output() update: EventEmitter<ExtendedData<AccountInfo>> = new EventEmitter();
  @Output() remove: EventEmitter<ExtendedData<AccountInfo>> = new EventEmitter();
  @Output() cancel: EventEmitter<ExtendedData<AccountInfo>> = new EventEmitter();
  key: string
  form : FormGroup
  submitAttempt :boolean = false
  constructor(private fb : FormBuilder) {
    this.form = this.fb.group(
      {
        name:['', Validators.compose([Validators.required, Validators.maxLength(50)])],
        city:'',
        mobile:'',

      }
    );
  }

  ngOnChanges(){
    console.log(this.account)
    this.form.patchValue(this.account.data)
    }
  
    get nameControl(): FormControl
    {
      return this.form.get("name") as FormControl
    }


  dismiss() {
    let data = { account: this.account };
  }

  onRemove() {
    this.remove.emit(this.account);
  }
  onCancel() {
    this.cancel.emit(this.account);
  }

  private onSave(value) {
    let account = this.prepairForSave(value);
    this.update.emit(account)
  }
  private prepairForSave(value:AccountInfo): ExtendedData<AccountInfo> {
    return {id:this.account.id,data:value}
  }
  onSubmit({ value, valid }: { value: ExtendedData<AccountInfo>, valid: boolean }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.onSave(value);
    //throw "please take care , invalid form"
  }
}
