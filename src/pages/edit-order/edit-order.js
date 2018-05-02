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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FormBuilder } from '@angular/forms';
import { OrdersFsRepository } from '../../StoreData/orders-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { take } from 'rxjs/operators/take';
import { PLLinesFsRepository } from '../../StoreData/orderPLLines-fs-repository';
/**
 * Generated class for the EditOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditOrderPage = /** @class */ (function () {
    function EditOrderPage(fb, ordersFsRep, titleService, pLLinesFsRepository, navCtrl, navParams) {
        var _this = this;
        this.fb = fb;
        this.ordersFsRep = ordersFsRep;
        this.titleService = titleService;
        this.pLLinesFsRepository = pLLinesFsRepository;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderId = this.navParams.get('orderId');
        this.form = this.fb.group({
            date: '',
            deliveryDate: '',
            notice: '',
            imageUrl: '',
            accountId: '',
            ammount: '',
            cbm: ''
        });
        if (this.orderId) {
            this.order$ = this.ordersFsRep.get(this.orderId);
            this.orderPlLines$ = this.pLLinesFsRepository.forOrder(this.orderId);
        }
        else {
            var newOrder = {};
            this.order$ = Observable.of({ data: newOrder, id: null });
        }
        this.order$.pipe(take(1)).subscribe(function (extOrder) {
            _this.order = extOrder;
            _this.form.patchValue(_this.order.data);
        });
    }
    EditOrderPage.prototype.presentEditPlLine = function (plLineId) {
        this.navCtrl.push("EditPlLinePage", { plLineId: plLineId });
    };
    EditOrderPage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("Edit Order");
        }
    };
    EditOrderPage.prototype.ionViewDidLoad = function () {
        //// this.form.patchValue(this.order)
    };
    EditOrderPage.prototype.dismiss = function (data) {
        this.navCtrl.pop();
    };
    EditOrderPage.prototype.onCancel = function () {
        return this.dismiss(null);
    };
    EditOrderPage.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.submitAttempt = true;
        if (valid)
            this.onSave(value);
        //throw "please take care , invalid form"
    };
    EditOrderPage.prototype.onSave = function (order) {
        var extOrder = { data: order };
        if (this.order.id) {
            extOrder.id = this.order.id;
            this.ordersFsRep.saveOld(extOrder);
        }
        else
            this.ordersFsRep.saveNew(extOrder);
        this.dismiss(extOrder);
    };
    EditOrderPage.prototype.presentNewPLLineModal = function () {
        return this.presentEditPLLineModal();
    };
    EditOrderPage.prototype.presentEditPLLineModal = function (plLineId) {
        this.navCtrl.push("EditPlLinePage", { plLineId: plLineId, orderId: this.orderId });
    };
    EditOrderPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-order',
            templateUrl: 'edit-order.html',
        }),
        __metadata("design:paramtypes", [FormBuilder,
            OrdersFsRepository,
            TitleServiceProvider,
            PLLinesFsRepository,
            NavController, NavParams])
    ], EditOrderPage);
    return EditOrderPage;
}());
export { EditOrderPage };
//# sourceMappingURL=edit-order.js.map