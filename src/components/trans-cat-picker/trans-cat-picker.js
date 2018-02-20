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
var /**
 * Generated class for the TransCatPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
TransCatPickerComponent = /** @class */ (function () {
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
    TransCatPickerComponent.prototype.onSelectCat = function (catigory) {
        if (catigory) {
            this.onChange(catigory.id);
            this.catigory = catigory;
            this.catigoryId = catigory.id;
            this.expanded = false;
        }
    };
    TransCatPickerComponent.prototype.writeValue = function (obj) {
        this.catigoryId = obj;
        this.catigory = this.transCatsMap.get(obj);
        if (this.catigory)
            this.expanded = false;
    };
    TransCatPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TransCatPickerComponent.prototype.registerOnTouched = function (fn) {
    };
    TransCatPickerComponent.prototype.setDisabledState = function (isDisabled) {
    };
    TransCatPickerComponent.prototype.expand = function () {
        this.expanded = !this.expanded;
    };
    return TransCatPickerComponent;
}());
/**
 * Generated class for the TransCatPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { TransCatPickerComponent };
//# sourceMappingURL=trans-cat-picker.js.map