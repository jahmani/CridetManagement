import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Extended, TransactionCatigory } from '../../interfaces/data-models';
/**
 * Generated class for the TransCatsPickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var /**
 * Generated class for the TransCatsPickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
TransCatsPickerListComponent = /** @class */ (function () {
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
    return TransCatsPickerListComponent;
}());
/**
 * Generated class for the TransCatsPickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { TransCatsPickerListComponent };
//# sourceMappingURL=trans-cats-picker-list.js.map