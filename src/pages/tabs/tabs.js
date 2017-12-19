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
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { ViewController } from 'ionic-angular/navigation/view-controller';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, titleService, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleService = titleService;
        this.canGoBack = Observable.of(false);
        this.tabRoot = "AccountsListPage";
        var paramTabRoot = this.navParams.get("component");
        this.tabRoot = paramTabRoot || this.tabRoot;
        this.title = this.titleService.title;
        this.canGoBack = this.titleService.nav.flatMap(function (nav) {
            if (!nav)
                return Observable.of(false);
            _this.subNavCtrl = nav;
            var first = nav.first();
            return nav.viewDidEnter.map(function (view) {
                var can = view != first;
                return can;
            });
        });
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad TabsPage');
        var childNavs = this.navCtrl.getActiveChildNavs();
        //even in the template we used 1 tabs component
        //at run time we might get 2 tabs components
        // the second tabs component is the new active one
        // if we have 2 tabs component use the second
        var tabs = childNavs[childNavs.length - 1];
        tabs.setTabbarHidden(true);
    };
    TabsPage.prototype.goBack = function () {
        if (this.subNavCtrl)
            return this.subNavCtrl.pop();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    IonicPage({ segment: 'tabs' }),
    Component({
        selector: 'page-tabs',
        templateUrl: 'tabs.html',
        providers: [TitleServiceProvider]
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        TitleServiceProvider,
        ViewController])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.js.map