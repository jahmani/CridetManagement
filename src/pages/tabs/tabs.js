var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, PopoverController } from 'ionic-angular';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { TabServiceProvider } from '../../providers/tab-service/tab-service';
import { map } from 'rxjs/Operators/map';
import { mergeMap } from 'rxjs/Operators/mergeMap';
import { ConnectionServiceProvider } from '../../providers/connection-service/connection-service';
import { AccountsFsRepository } from '../../StoreData/accounts-fb-repository';
import { TransactionsFsRepository } from '../../StoreData/transactions-fs-repository';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/t-catigories-fs-repository';
import { StoreUsersFsRepository } from '../../StoreData/store-users-fb-repository';
import { AccountsBalanceFBRepository } from '../../StoreData/account-balance-fb-repository';
import { HomePage } from '../home/home';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, titleService, tabService, connectionService, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleService = titleService;
        this.tabService = tabService;
        this.popoverCtrl = popoverCtrl;
        this.canGoBack = Observable.of(false);
        this.tabRoot = "AccountsListPage";
        this.isConnected = connectionService.fbConnectionStatus;
        var paramTabRoot = this.navParams.get("component");
        if (this.subNavCtrl)
            this.tabService.setTab(this.navParams.data);
        else
            this.tabRoot = paramTabRoot || this.tabRoot;
        this.title = this.titleService.title;
        this.tabServiceSub = this.tabService.tab.subscribe(function (page) {
            if (page && page.component) {
                if (_this.subNavCtrl)
                    _this.subNavCtrl.setRoot(page.component);
            }
        });
        this.canGoBack = this.titleService.nav.pipe(mergeMap(function (nav) {
            if (!nav)
                return Observable.of(false);
            _this.subNavCtrl = nav;
            return nav.viewDidEnter.pipe(map(function (view) { return !!(view.index); }));
        }));
    }
    TabsPage.prototype.presentUserPopover = function (clickEvent) {
        var popover = this.popoverCtrl.create(HomePage);
        popover.present({ ev: clickEvent });
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad TabsPage');
        this.tabs.setTabbarHidden(true);
        /*
        console.log(this.tabs)
        const childNavs: Tabs[] = this.navCtrl.getActiveChildNavs()
        //even in the template we used 1 tabs component
        //at run time we might get 2 tabs components
        // the second tabs component is the new active one
        // if we have 2 tabs component use the second
    
        const tabs: Tabs = childNavs[childNavs.length-1]
        
        tabs.setTabbarHidden(true)
        */
    };
    TabsPage.prototype.ionViewWillUnload = function () {
        if (this.tabServiceSub)
            this.tabServiceSub.unsubscribe();
    };
    TabsPage.prototype.goBack = function () {
        if (this.subNavCtrl)
            return this.subNavCtrl.pop();
    };
    __decorate([
        ViewChild(Tabs),
        __metadata("design:type", Tabs)
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        IonicPage({ segment: 'tabs' }),
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html',
            providers: [TitleServiceProvider,
                AccountsFsRepository, TransactionsFsRepository,
                TCatigoriesFsRepositoryProvider, StoreUsersFsRepository,
                AccountsBalanceFBRepository]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            TitleServiceProvider,
            TabServiceProvider,
            ConnectionServiceProvider,
            PopoverController])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map