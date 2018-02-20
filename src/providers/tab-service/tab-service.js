import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
var TabServiceProvider = /** @class */ (function () {
    function TabServiceProvider() {
        console.log('Hello TabServiceProvider Provider');
        var defaultPage = { title: 'Accounts', component: "AccountsListPage" };
        this.tabSubject = new BehaviorSubject(defaultPage);
        this.tab = this.tabSubject.asObservable();
    }
    TabServiceProvider.prototype.setTab = function (_tab) {
        if (_tab != this.tabSubject.getValue())
            this.tabSubject.next(_tab);
    };
    return TabServiceProvider;
}());
export { TabServiceProvider };
//# sourceMappingURL=tab-service.js.map