var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { ProductsFsRepository } from '../../StoreData/products-fs-repository';
/**
 * Generated class for the ProductsPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProductsPickerComponent = /** @class */ (function () {
    function ProductsPickerComponent(modalCtrl, productsFsRepository) {
        this.modalCtrl = modalCtrl;
        this.productsFsRepository = productsFsRepository;
        console.log("Hello ProductSelectComponent Component");
    }
    ProductsPickerComponent_1 = ProductsPickerComponent;
    ProductsPickerComponent.prototype.writeValue = function (productId) {
        var _this = this;
        this.productId = productId;
        if (this.productId) {
            this.productsFsRepository.getOnce(this.productId).then(function (extProduct) {
                _this.product = extProduct;
            });
        }
    };
    ProductsPickerComponent.prototype.removeProduct = function ($event) {
        this.product = null;
        this.productId = null;
        this.srcChangeFunction(this.productId);
    };
    ProductsPickerComponent.prototype.selectProduct = function ($event) {
        var _this = this;
        var modal = this.modalCtrl.create("ProductsListPage", {
            productsFsRepository: this.productsFsRepository,
            canSelect: true,
            canGoBack: true
        });
        modal.present();
        modal.onDidDismiss(function (extProduct) {
            if (extProduct) {
                _this.product = extProduct;
                _this.productId = extProduct.id;
                _this.srcChangeFunction(extProduct.id);
            }
        });
    };
    ProductsPickerComponent.prototype.registerOnChange = function (fn) {
        this.srcChangeFunction = fn;
    };
    ProductsPickerComponent.prototype.registerOnTouched = function (fn) { };
    ProductsPickerComponent.prototype.setDisabledState = function (isDisabled) { };
    ProductsPickerComponent = ProductsPickerComponent_1 = __decorate([
        Component({
            selector: 'products-picker',
            templateUrl: 'products-picker.html',
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ProductsPickerComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ModalController,
            ProductsFsRepository])
    ], ProductsPickerComponent);
    return ProductsPickerComponent;
    var ProductsPickerComponent_1;
}());
export { ProductsPickerComponent };
//# sourceMappingURL=products-picker.js.map