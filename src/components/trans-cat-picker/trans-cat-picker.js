var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component, forwardRef } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TransCatsPickerListComponent } from '../trans-cats-picker-list/trans-cats-picker-list';
import { ExtMap } from '../../interfaces/data-models';
/**
 * Generated class for the TransCatPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TransCatPickerComponent = TransCatPickerComponent_1 = (function () {
    // @Output() catigoryChange = new EventEmitter<TreeNodeDataSnapshot>();
    function TransCatPickerComponent(modalController) {
        this.modalController = modalController;
        console.log('Hello TransCatPickerComponent Component');
    }
    Object.defineProperty(TransCatPickerComponent.prototype, "buttonText", {
        get: function () {
            return this.catigory ? this.catigory.data.name : "Cat";
        },
        enumerable: true,
        configurable: true
    });
    TransCatPickerComponent.prototype.onClick = function () {
        var _this = this;
        var catigoriesPageModal = this.modalController.create(TransCatsPickerListComponent, { selectedCatigory: this.catigory, transCatsRoot: this.transCatsRoot });
        catigoriesPageModal.onDidDismiss(function (catigory) {
            if (catigory) {
                _this.onChange(catigory.id);
                _this.catigory = catigory;
                _this.catigoryId = catigory.id;
            }
        });
        catigoriesPageModal.present();
    };
    TransCatPickerComponent.prototype.writeValue = function (obj) {
        this.catigoryId = obj;
        this.catigory = this.transCatsMap.get(obj);
    };
    TransCatPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TransCatPickerComponent.prototype.registerOnTouched = function (fn) {
    };
    TransCatPickerComponent.prototype.setDisabledState = function (isDisabled) {
    };
    return TransCatPickerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TransCatPickerComponent.prototype, "transCatsRoot", void 0);
__decorate([
    Input(),
    __metadata("design:type", ExtMap)
], TransCatPickerComponent.prototype, "transCatsMap", void 0);
TransCatPickerComponent = TransCatPickerComponent_1 = __decorate([
    Component({
        selector: 'trans-cat-picker',
        templateUrl: 'trans-cat-picker.html',
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return TransCatPickerComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [ModalController])
], TransCatPickerComponent);
export { TransCatPickerComponent };
var TransCatPickerComponent_1;
//# sourceMappingURL=trans-cat-picker.js.map