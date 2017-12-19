var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Content } from 'ionic-angular';
/*
  Generated class for the EditAccount component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var EditAccountComponent = (function () {
    function EditAccountComponent(fb) {
        this.fb = fb;
        this.update = new EventEmitter();
        this.remove = new EventEmitter();
        this.cancel = new EventEmitter();
        this.submitAttempt = false;
        this.form = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
            city: '',
            mobile: '',
        });
    }
    EditAccountComponent.prototype.ngAfterViewChecked = function () {
        this.content.resize();
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], EditAccountComponent.prototype, "account", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EditAccountComponent.prototype, "update", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EditAccountComponent.prototype, "remove", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], EditAccountComponent.prototype, "cancel", void 0);
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], EditAccountComponent.prototype, "content", void 0);
EditAccountComponent = __decorate([
    Component({
        selector: 'edit-account',
        templateUrl: 'edit-account.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], EditAccountComponent);
export { EditAccountComponent };
//# sourceMappingURL=edit-account.js.map