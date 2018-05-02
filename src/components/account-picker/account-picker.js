var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ModalController, NavController } from "ionic-angular";
import { AccountsFsRepository } from "../../StoreData/accounts-fb-repository";
/**
 * Generated class for the AccountPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccountPickerComponent = /** @class */ (function () {
    function AccountPickerComponent(modalCtrl, navCtrl, accountsFsRepository) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.accountsFsRepository = accountsFsRepository;
        console.log("Hello AccountInfoSelectComponent Component");
    }
    AccountPickerComponent_1 = AccountPickerComponent;
    AccountPickerComponent.prototype.writeValue = function (accountId) {
        var _this = this;
        this.accountId = accountId;
        if (this.accountId) {
            this.accountsFsRepository.getOnce(this.accountId).then(function (extAccountInfo) {
                _this.account = extAccountInfo;
            });
        }
    };
    AccountPickerComponent.prototype.removeAccountInfo = function ($event) {
        this.account = null;
        this.accountId = null;
        this.srcChangeFunction(this.accountId);
    };
    AccountPickerComponent.prototype.selectAccountInfo = function ($event) {
        var _this = this;
        var modal = this.modalCtrl.create("AccountsListPage", {
            accountsFsRepository: this.accountsFsRepository,
            canSelect: true,
            canGoBack: true
        });
        modal.present();
        modal.onDidDismiss(function (extAccountInfo) {
            if (extAccountInfo) {
                _this.account = extAccountInfo;
                _this.accountId = extAccountInfo.id;
                _this.srcChangeFunction(extAccountInfo.id);
            }
        });
    };
    AccountPickerComponent.prototype.registerOnChange = function (fn) {
        this.srcChangeFunction = fn;
    };
    AccountPickerComponent.prototype.registerOnTouched = function (fn) { };
    AccountPickerComponent.prototype.setDisabledState = function (isDisabled) { };
    AccountPickerComponent = AccountPickerComponent_1 = __decorate([
        Component({
            selector: "account-picker",
            templateUrl: "account-picker.html",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return AccountPickerComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ModalController,
            NavController,
            AccountsFsRepository])
    ], AccountPickerComponent);
    return AccountPickerComponent;
    var AccountPickerComponent_1;
}());
export { AccountPickerComponent };
//# sourceMappingURL=account-picker.js.map