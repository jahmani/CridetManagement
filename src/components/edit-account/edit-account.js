import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Extended, AccountInfo } from '../../interfaces/data-models';
import { Content } from 'ionic-angular';
/*
  Generated class for the EditAccount component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var /*
  Generated class for the EditAccount component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
EditAccountComponent = /** @class */ (function () {
    function EditAccountComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
            city: '',
            mobile: '',
        });
    }
    EditAccountComponent.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    EditAccountComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            //Keyboard.show() // for android
            //Keyboard.show() // for android
            _this.myInput.setFocus();
        }, 1500); //a least 150ms.
    };
    EditAccountComponent.prototype.ngOnChanges = function () {
        console.log(this.account);
        this.form.patchValue(this.account.data);
        if (this.content)
            this.content.resize();
    };
    Object.defineProperty(EditAccountComponent.prototype, "nameControl", {
        get: function () {
            return this.form.get("name");
        },
        enumerable: true,
        configurable: true
    });
    EditAccountComponent.prototype.dismiss = function () {
        var data = { account: this.account };
    };
    EditAccountComponent.prototype.onRemove = function () {
        this.remove.emit(this.account);
    };
    EditAccountComponent.prototype.onCancel = function () {
        this.cancel.emit(this.account);
    };
    EditAccountComponent.prototype.onSave = function (value) {
        var account = this.prepairForSave(value);
        this.update.emit(account);
    };
    EditAccountComponent.prototype.prepairForSave = function (value) {
        return { id: this.account.id, data: value };
    };
    EditAccountComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.submitAttempt = true;
        if (valid)
            this.onSave(value);
        //throw "please take care , invalid form"
    };
    return EditAccountComponent;
}());
/*
  Generated class for the EditAccount component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
export { EditAccountComponent };
//# sourceMappingURL=edit-account.js.map