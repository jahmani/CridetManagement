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
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { AccountsFsRepository, TransactionsFsRepository, TCatigoriesFsRepositoryProvider, StoreUsersFsRepository } from '../../StoreData/index';
import { TabServiceProvider } from '../../providers/tab-service/tab-service';
import { map } from 'rxjs/Operators/map';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, titleService, tabService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleService = titleService;
        this.tabService = tabService;
        this.canGoBack = Observable.of(false);
        this.tabRoot = "AccountsListPage";
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
        this.canGoBack = this.titleService.nav.flatMap(function (nav) {
            if (!nav)
                return Observable.of(false);
            _this.subNavCtrl = nav;
            return nav.viewDidEnter.pipe(map(function (view) { return !!(view.index); }));
        });
    }
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
                TCatigoriesFsRepositoryProvider, StoreUsersFsRepository]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            TitleServiceProvider,
            TabServiceProvider])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map