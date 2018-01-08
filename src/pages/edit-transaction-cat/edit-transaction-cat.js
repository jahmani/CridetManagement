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
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/t-catigories-fs-repository';
/**
 * Generated class for the EditTransactionCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTransactionCatPage = /** @class */ (function () {
    function EditTransactionCatPage(fb, tCatsFSR, titleService, navCtrl, navParams) {
        var _this = this;
        this.fb = fb;
        this.tCatsFSR = tCatsFSR;
        this.titleService = titleService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitAttempt = false;
        this.transactionCatId = this.navParams.get('transactionCatId');
        this.transCatsRoot$ = this.tCatsFSR.treeRoot;
        this.transCatsMap$ = this.tCatsFSR.dataMap;
        this.form = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
            isDebit: ['', Validators.required],
            isCredit: ['', Validators.required],
            parentId: ['', Validators.required]
        });
        if (this.transactionCatId) {
            this.transactionCat$ = this.tCatsFSR.dataMap.pipe(map(function (catsMap) { return catsMap.get(_this.transactionCatId); }));
        }
        else
            this.transactionCat$ = Observable.of({ data: { name: "", isCredit: true, isDebit: true, parentId: "0" } });
        this.subscription = this.transactionCat$.subscribe(function (extTrans) {
            _this.transactionCat = extTrans;
            _this.form.patchValue(_this.transactionCat.data);
        });
        this.transCatsRoot$.subscribe(console.log);
    }
    Object.defineProperty(EditTransactionCatPage.prototype, "nameCtrl", {
        get: function () {
            return this.form.get("name");
        },
        enumerable: true,
        configurable: true
    });
    EditTransactionCatPage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("Edit Trans Catigory");
        }
    };
    EditTransactionCatPage.prototype.ionViewWillUnload = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    EditTransactionCatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTransactionCatPage');
        this.form.patchValue(this.transactionCat);
    };
    EditTransactionCatPage.prototype.dismiss = function (data) {
        this.navCtrl.pop();
    };
    EditTransactionCatPage.prototype.onCancel = function () {
        return this.dismiss(null);
    };
    EditTransactionCatPage.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.submitAttempt = true;
        if (valid)
            this.onSave(value);
        //throw "please take care , invalid form"
    };
    EditTransactionCatPage.prototype.onSave = function (transCatigory) {
        var extTransCat = { data: transCatigory };
        if (this.transactionCat.id) {
            extTransCat.id = this.transactionCat.id;
            this.tCatsFSR.saveOld(extTransCat);
        }
        else
            this.tCatsFSR.saveNew(extTransCat);
        this.dismiss(extTransCat);
    };
    EditTransactionCatPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-transaction-cat',
            templateUrl: 'edit-transaction-cat.html',
        }),
        __metadata("design:paramtypes", [FormBuilder,
            TCatigoriesFsRepositoryProvider,
            TitleServiceProvider,
            NavController, NavParams])
    ], EditTransactionCatPage);
    return EditTransactionCatPage;
}());
export { EditTransactionCatPage };
//# sourceMappingURL=edit-transaction-cat.js.map