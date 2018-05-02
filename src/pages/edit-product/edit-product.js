var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsFsRepository } from '../../StoreData/products-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators/take';
/**
 * Generated class for the EditProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProductPage = /** @class */ (function () {
    function EditProductPage(fb, productsFsRep, titleService, navCtrl, navParams) {
        var _this = this;
        this.fb = fb;
        this.productsFsRep = productsFsRep;
        this.titleService = titleService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productId = this.navParams.get('productId');
        if (!this.productsFsRep)
            this.productsFsRep = this.navParams.get("productsRep");
        this.form = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
            code: '',
            style: '',
            notice: '',
            thumbUrl: ''
        });
        if (this.productId) {
            this.product$ = this.productsFsRep.get(this.productId);
        }
        else {
            var newProduct = {};
            this.product$ = Observable.of({ data: newProduct, id: null });
        }
        this.product$.pipe(take(1)).subscribe(function (extProduct) {
            _this.product = extProduct;
            _this.form.patchValue(_this.product.data);
        });
    }
    Object.defineProperty(EditProductPage.prototype, "nameCtrl", {
        get: function () {
            return this.form.get("name");
        },
        enumerable: true,
        configurable: true
    });
    EditProductPage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("Edit Product");
        }
    };
    EditProductPage.prototype.ionViewDidLoad = function () {
        //// this.form.patchValue(this.product)
    };
    EditProductPage.prototype.dismiss = function (data) {
        this.navCtrl.pop();
    };
    EditProductPage.prototype.onCancel = function () {
        return this.dismiss(null);
    };
    EditProductPage.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.submitAttempt = true;
        if (valid)
            this.onSave(value);
        //throw "please take care , invalid form"
    };
    EditProductPage.prototype.onSave = function (product) {
        var extProduct = { data: product };
        if (this.product.id) {
            extProduct.id = this.product.id;
            this.productsFsRep.saveOld(extProduct);
        }
        else
            this.productsFsRep.saveNew(extProduct);
        this.dismiss(extProduct);
    };
    EditProductPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-product',
            templateUrl: 'edit-product.html',
        }),
        __param(1, Optional()),
        __metadata("design:paramtypes", [FormBuilder,
            ProductsFsRepository,
            TitleServiceProvider,
            NavController, NavParams])
    ], EditProductPage);
    return EditProductPage;
}());
export { EditProductPage };
//# sourceMappingURL=edit-product.js.map