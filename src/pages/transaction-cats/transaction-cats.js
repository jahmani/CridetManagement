var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Extended, TransactionCatigory } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/t-catigories-fs-repository';
/**
 * Generated class for the TransactionCatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionCatsPage = /** @class */ (function () {
    function TransactionCatsPage(navCtrl, navParams, titleService, tCatsFSR) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleService = titleService;
        this.tCatsFSR = tCatsFSR;
        this.transactionRootCat = this.tCatsFSR.treeRoot;
    }
    TransactionCatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionCatsPage');
    };
    TransactionCatsPage.prototype.onNewTransCat = function () {
        this.navCtrl.push("EditTransactionCatPage");
    };
    TransactionCatsPage.prototype.onNodeSelected = function ($event) {
        this.navCtrl.push("EditTransactionCatPage", { transactionCatId: $event.id });
    };
    TransactionCatsPage.prototype.ionViewDidEnter = function () {
        if (this.titleService) {
            this.titleService.setNav(this.navCtrl);
            this.titleService.setTitle("Cats ");
        }
    };
    /**
     * Generated class for the TransactionCatsPage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */
    TransactionCatsPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            TitleServiceProvider,
            TCatigoriesFsRepositoryProvider])
    ], TransactionCatsPage);
    return TransactionCatsPage;
}());
export { TransactionCatsPage };
//# sourceMappingURL=transaction-cats.js.map