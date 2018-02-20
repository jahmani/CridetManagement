import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular/navigation/nav-controller';
/*
  Generated class for the TitleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var /*
  Generated class for the TitleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
TitleServiceProvider = /** @class */ (function () {
    function TitleServiceProvider() {
        console.log('Hello TitleServiceProvider Provider');
        this.titleSubject = new BehaviorSubject("title");
        this.navSubject = new BehaviorSubject(null);
        this.title = this.titleSubject.asObservable();
        this.nav = this.navSubject.asObservable();
    }
    TitleServiceProvider.prototype.setTitle = function (title) {
        this.titleSubject.next(title);
    };
    TitleServiceProvider.prototype.setNav = function (_nav) {
        if (_nav != this.navSubject.getValue())
            this.navSubject.next(_nav);
    };
    return TitleServiceProvider;
}());
/*
  Generated class for the TitleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export { TitleServiceProvider };
//# sourceMappingURL=title-service.js.map