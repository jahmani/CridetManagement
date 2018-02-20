var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var /**
 * Generated class for the EditTransactionFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
EditTransactionFormComponent = /** @class */ (function () {
    function EditTransactionFormComponent(fb, datepipe) {
        this.fb = fb;
        this.datepipe = datepipe;
        this.form = this.fb.group({
            date: '',
            ammount: ['', Validators.compose([Validators.required, Validators.min(0.00001), Validators.max(999999999)])],
            notice: '',
            catigoryId: '',
            imageSrc: ''
        });
    }
    EditTransactionFormComponent.prototype.ngOnChanges = function () {
        var localDate;
        console.log(this.transaction);
        if (this.transaction.date)
            localDate = this.datepipe.transform(this.transaction.date, 'yyyy-MM-dd');
        //    localDate = UTCToLocal(this.transaction.date)
        this.form.patchValue(this.transaction);
        this.dateCtrl.patchValue(localDate);
    };
    Object.defineProperty(EditTransactionFormComponent.prototype, "ammountCtrl", {
        get: function () {
            return this.form.get('ammount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditTransactionFormComponent.prototype, "dateCtrl", {
        get: function () {
            return this.form.get('date');
        },
        enumerable: true,
        configurable: true
    });
    EditTransactionFormComponent.prototype.dismiss = function () {
        var data = { account: this.transaction };
    };
    EditTransactionFormComponent.prototype.onCancel = function () {
        this.cancel.emit(this.transaction);
    };
    EditTransactionFormComponent.prototype.onSave = function (value) {
        var utcDate = LocalToUTC(value.date);
        var newVal = __assign({}, value, { date: utcDate });
        this.update.emit(newVal);
    };
    EditTransactionFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.submitAttempt = true;
        if (valid)
            this.onSave(value);
        //throw "please take care , invalid form"
    };
    EditTransactionFormComponent.prototype.onCatigoryChange = function (cat) {
        console.log(cat);
    };
    return EditTransactionFormComponent;
}());
/**
 * Generated class for the EditTransactionFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { EditTransactionFormComponent };
//# sourceMappingURL=edit-transaction-form.js.map