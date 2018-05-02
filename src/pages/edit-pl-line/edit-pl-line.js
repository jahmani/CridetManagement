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
import { FormBuilder, Validators } from '@angular/forms';
import { PLLinesFsRepository } from '../../StoreData/orderPLLines-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { take } from 'rxjs/operators/take';
/**
 * Generated class for the EditPlLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPlLinePage = /** @class */ (function () {
    function EditPlLinePage(fb, pLLinesFsRep, titleService, navCtrl, navParams) {
        var _this = this;
        this.fb = fb;
        this.pLLinesFsRep = pLLinesFsRep;
        this.titleService = titleService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subscribtions = [];
        this.pLineId = this.navParams.get('plLineId');
        this.form = this.fb.group({
            productId: ['', Validators.required],
            packing: '',
            notice: '',
            shippingMark: ['', Validators.required],
            qty: ['', Validators.required],
            ctns: '',
            price: ['', Validators.required],
            ammount: ['', Validators.required],
            orderId: ['', Validators.required]
        });
        if (this.pLineId) {
            this.pLLine$ = this.pLLinesFsRep.get(this.pLineId);
        }
        else {
            var orderId = this.navParams.get("orderId");
            var newPLLine = {};
            newPLLine.orderId = orderId;
            this.pLLine$ = Observable.of({ data: newPLLine, id: null });
        }
        this.pLLine$.pipe(take(1)).subscribe(function (extPLLine) {
            _this.pLLine = extPLLine;
            _this.form.patchValue(_this.pLLine.data);
        });
        this.subscribtions.push(this.qtyControl.valueChanges.subscribe(function () { return _this.recalculateAmmount(); }));
        this.subscribtions.push(this.priceControl.valueChanges.subscribe(function () { return _this.recalculateAmmount(); }));
        this.subscribtions.push(this.ctnsControl.valueChanges.subscribe(function () { return _this.recalculateQuantity(); }));
        this.subscribtions.push(this.packingControl.valueChanges.subscribe(function () { return _this.recalculateQuantity(); }));
    }
    EditPlLinePage.prototype.recalculateAmmount = function () {
        var qty = this.qtyControl.value || 0;
        var price = this.priceControl.value || 0;
        this.ammountControl.setValue(qty * price);
    };
    EditPlLinePage.prototype.recalculateQuantity = function () {
        var ctns = this.ctnsControl.value || 0;
        var packing = this.packingControl.value || 0;
        if (packing && ctns)
            this.qtyControl.setValue(ctns * packing);
    };
    Object.defineProperty(EditPlLinePage.prototype, "productIdControl", {
        get: function () {
            return this.form.get("productId");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditPlLinePage.prototype, "qtyControl", {
        get: function () {
            return this.form.get("qty");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditPlLinePage.prototype, "priceControl", {
        get: function () {
            return this.form.get("price");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditPlLinePage.prototype, "ctnsControl", {
        get: function () {
            return this.form.get("ctns");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditPlLinePage.prototype, "packingControl", {
        get: function () {
            return this.form.get("packing");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditPlLinePage.prototype, "ammountControl", {
        get: function () {
            return this.form.get("ammount");
        },
        enumerable: true,
        configurable: true
    });
    EditPlLinePage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("Edit PLLine");
        }
    };
    EditPlLinePage.prototype.ionViewDidLoad = function () {
        //// this.form.patchValue(this.pLLine)
    };
    EditPlLinePage.prototype.ionViewWillUnload = function () {
        this.subscribtions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    EditPlLinePage.prototype.dismiss = function (data) {
        this.navCtrl.pop();
    };
    EditPlLinePage.prototype.onCancel = function () {
        return this.dismiss(null);
    };
    EditPlLinePage.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.submitAttempt = true;
        if (valid)
            this.onSave(value);
        //throw "please take care , invalid form"
    };
    EditPlLinePage.prototype.onDelete = function () {
        var _this = this;
        if (this.pLineId) {
            this.pLLinesFsRep.remove(this.pLLine).then(function () { return _this.dismiss(); });
        }
    };
    EditPlLinePage.prototype.onSave = function (pLLine) {
        var extPLLine = { data: pLLine };
        if (this.pLLine.id) {
            extPLLine.id = this.pLLine.id;
            this.pLLinesFsRep.saveOld(extPLLine);
        }
        else
            this.pLLinesFsRep.saveNew(extPLLine);
        this.dismiss(extPLLine);
    };
    EditPlLinePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-pl-line',
            templateUrl: 'edit-pl-line.html',
        }),
        __metadata("design:paramtypes", [FormBuilder,
            PLLinesFsRepository,
            TitleServiceProvider,
            NavController, NavParams])
    ], EditPlLinePage);
    return EditPlLinePage;
}());
export { EditPlLinePage };
//# sourceMappingURL=edit-pl-line.js.map