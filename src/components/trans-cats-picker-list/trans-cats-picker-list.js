var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the TransCatsPickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TransCatsPickerListComponent = (function () {
    function TransCatsPickerListComponent(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.transactionRootCat = this.navParams.get("transCatsRoot");
        console.log('Hello TransCatsPickerListComponent Component');
        console.log(this.transactionRootCat);
    }
    TransCatsPickerListComponent.prototype.onNodeSelected = function (node) {
        return this.viewController.dismiss(node);
    };
    TransCatsPickerListComponent.prototype.onCancel = function () {
        return this.viewController.dismiss();
    };
    TransCatsPickerListComponent = __decorate([
        Component({
            selector: 'trans-cats-picker-list',
            templateUrl: 'trans-cats-picker-list.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController])
    ], TransCatsPickerListComponent);
    return TransCatsPickerListComponent;
}());
export { TransCatsPickerListComponent };
//# sourceMappingURL=trans-cats-picker-list.js.map