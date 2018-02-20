var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { StoresFsRepository } from '../../FireStoreData/stores-fs-repository';
import { StoreDoc, Extended, StoreInfo } from '../../interfaces/data-models';
import { ActiveStoreService } from '../../FireStoreData/activeStore';
/**
 * Generated class for the EditStoreInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditStoreInfoPage = /** @class */ (function () {
    function EditStoreInfoPage(fb, titleService, storesFsRepository, activeStoreService, navCtrl, navParams) {
        this.fb = fb;
        this.titleService = titleService;
        this.storesFsRepository = storesFsRepository;
        this.activeStoreService = activeStoreService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            currency: ['', Validators.compose([Validators.required])],
        });
        this.storeId = this.navParams.get('storeId');
        if (!this.storeId) {
            this.storeId = this.activeStoreService.activeStoreKey;
        }
    }
    Object.defineProperty(EditStoreInfoPage.prototype, "nameCtrl", {
        get: function () {
            return this.form.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditStoreInfoPage.prototype, "currencyCtrl", {
        get: function () {
            return this.form.get("currency");
        },
        enumerable: true,
        configurable: true
    });
    EditStoreInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("Edit Store Info");
        }
        this.storesFsRepository.getOnce(this.storeId).then(function (extStoreDoc) {
            _this.form.patchValue(extStoreDoc.data.storeInfo);
            _this.storeDoc = extStoreDoc;
        });
        console.log('ionViewDidLoad EditStoreInfoPage');
    };
    EditStoreInfoPage.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            var updatedStoreDoc = __assign({}, this.storeDoc, { data: __assign({}, this.storeDoc.data, { storeInfo: value }) });
            return this.storesFsRepository.saveOld(updatedStoreDoc);
        }
    };
    EditStoreInfoPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    /**
     * Generated class for the EditStoreInfoPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    EditStoreInfoPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [FormBuilder,
            TitleServiceProvider,
            StoresFsRepository,
            ActiveStoreService,
            NavController, NavParams])
    ], EditStoreInfoPage);
    return EditStoreInfoPage;
}());
export { EditStoreInfoPage };
//# sourceMappingURL=edit-store-info.js.map