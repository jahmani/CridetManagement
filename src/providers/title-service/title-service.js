var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/*
  Generated class for the TitleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TitleServiceProvider = (function () {
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
    TitleServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], TitleServiceProvider);
    return TitleServiceProvider;
}());
export { TitleServiceProvider };
//# sourceMappingURL=title-service.js.map