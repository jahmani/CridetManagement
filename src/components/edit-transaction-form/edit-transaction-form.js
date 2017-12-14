var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExtMap } from '../../interfaces/data-models';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the EditTransactionFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EditTransactionFormComponent = (function () {
    function EditTransactionFormComponent(fb) {
        this.fb = fb;
        this.update = new EventEmitter();
        this.cancel = new EventEmitter();
        this.submitAttempt = false;
        this.form = this.fb.group({
            type: ['', Validators.compose([Validators.required])],
            date: '',
            ammount: ['', Validators.compose([Validators.required, Validators.min(0.00001), Validators.max(999999999)])],
            notice: '',
            catigoryId: ''
        });
    }
    EditTransactionFormComponent.prototype.ngOnChanges = function () {
        console.log(this.transaction);
        this.form.patchValue(this.transaction);
    };
    Object.defineProperty(EditTransactionFormComponent.prototype, "ammountCtrl", {
        get: function () {
            return this.form.get('ammount');
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
        this.update.emit(value);
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], EditTransactionFormComponent.prototype, "transaction", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], EditTransactionFormComponent.prototype, "transCatsRoot", void 0);
__decorate([
    Input(),
    __metadata("design:type", ExtMap)
], EditTransactionFormComponent.prototype, "transCatsMap", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EditTransactionFormComponent.prototype, "update", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EditTransactionFormComponent.prototype, "cancel", void 0);
EditTransactionFormComponent = __decorate([
    Component({
        selector: 'edit-transaction-form',
        templateUrl: 'edit-transaction-form.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], EditTransactionFormComponent);
export { EditTransactionFormComponent };
//# sourceMappingURL=edit-transaction-form.js.map