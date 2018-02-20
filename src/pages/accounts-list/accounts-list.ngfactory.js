/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i2 from "ionic-angular/components/item/item";
import * as i3 from "ionic-angular/util/form";
import * as i4 from "ionic-angular/config/config";
import * as i5 from "ionic-angular/components/item/item-reorder";
import * as i6 from "ionic-angular/components/item/item-content";
import * as i7 from "@angular/common";
import * as i8 from "../../../node_modules/ionic-angular/components/spinner/spinner.ngfactory";
import * as i9 from "ionic-angular/components/spinner/spinner";
import * as i10 from "../../../node_modules/ionic-angular/components/item/item-sliding.ngfactory";
import * as i11 from "ionic-angular/components/item/item-sliding";
import * as i12 from "ionic-angular/components/list/list";
import * as i13 from "ionic-angular/platform/platform";
import * as i14 from "ionic-angular/components/icon/icon";
import * as i15 from "ionic-angular/components/note/note";
import * as i16 from "ionic-angular/components/item/item-options";
import * as i17 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i18 from "ionic-angular/components/button/button";
import * as i19 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i20 from "ionic-angular/components/content/content";
import * as i21 from "ionic-angular/platform/dom-controller";
import * as i22 from "ionic-angular/components/app/app";
import * as i23 from "ionic-angular/platform/keyboard";
import * as i24 from "ionic-angular/navigation/view-controller";
import * as i25 from "ionic-angular/navigation/nav-controller";
import * as i26 from "ionic-angular/gestures/gesture-controller";
import * as i27 from "ionic-angular/components/toolbar/toolbar-footer";
import * as i28 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i29 from "ionic-angular/components/toolbar/navbar";
import * as i30 from "ionic-angular/components/toolbar/toolbar-item";
import * as i31 from "ionic-angular/components/toolbar/toolbar";
import * as i32 from "ionic-angular/components/menu/menu-toggle";
import * as i33 from "ionic-angular/components/app/menu-controller";
import * as i34 from "../../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory";
import * as i35 from "@angular/forms";
import * as i36 from "ionic-angular/components/searchbar/searchbar";
import * as i37 from "./accounts-list";
import * as i38 from "../../StoreData/accounts-fb-repository";
import * as i39 from "../../StoreData/account-balance-fb-repository";
import * as i40 from "ionic-angular/components/modal/modal-controller";
import * as i41 from "ionic-angular/components/alert/alert-controller";
import * as i42 from "../../providers/title-service/title-service";
var styles_AccountsListPage = [];
var RenderType_AccountsListPage = i0.ɵcrt({ encapsulation: 2, styles: styles_AccountsListPage, data: {} });
export { RenderType_AccountsListPage as RenderType_AccountsListPage };
function View_AccountsListPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" !"]))], null, null); }
function View_AccountsListPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 12, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      Total Balances :\n      "])), (_l()(), i0.ɵeld(7, 0, null, 4, 4, "h2", [["item-right", ""]], [[4, "color", null]], null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", "\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AccountsListPage_2)), i0.ɵdid(10, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, 2, ["\n    "]))], function (_ck, _v) { var currVal_2 = _v.context.ngIf.isDirty; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.context.ngIf.isDirty ? "red" : ""); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.context.ngIf.balance; _ck(_v, 8, 0, currVal_1); }); }
function View_AccountsListPage_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" ! "]))], null, null); }
function View_AccountsListPage_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-spinner", [["item-right", ""], ["name", "bubbles"]], [[2, "spinner-paused", null]], null, null, i8.View_Spinner_0, i8.RenderType_Spinner)), i0.ɵdid(1, 114688, null, 0, i9.Spinner, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_1 = "bubbles"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_AccountsListPage_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 49, "ion-item-sliding", [], null, null, null, i10.View_ItemSliding_0, i10.RenderType_ItemSliding)), i0.ɵdid(1, 49152, null, 2, i11.ItemSliding, [[2, i12.List], i13.Platform, i0.Renderer, i0.ElementRef, i0.NgZone], null, null), i0.ɵqud(335544320, 4, { item: 0 }), i0.ɵqud(603979776, 5, { _itemOptions: 1 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(5, 0, null, 0, 25, "button", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showAccountTransactions(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(6, 1097728, [[4, 4]], 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 6, { contentLabel: 0 }), i0.ɵqud(603979776, 7, { _buttons: 1 }), i0.ɵqud(603979776, 8, { _icons: 1 }), i0.ɵdid(10, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(12, 0, null, 0, 1, "ion-icon", [["item-left", ""], ["name", "person"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(13, 147456, [[8, 4]], 0, i14.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(15, 0, null, 2, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(16, null, ["", ""])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(18, 0, null, 2, 2, "ion-note", [], null, null, null, null, null)), i0.ɵdid(19, 16384, null, 0, i15.Note, [i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(20, null, ["/", ""])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(22, 0, null, 4, 4, "h2", [["item-right", ""]], [[4, "color", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.invalidateBalance(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(23, null, ["", "\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AccountsListPage_4)), i0.ɵdid(25, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 4, 1, null, View_AccountsListPage_5)), i0.ɵdid(29, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(32, 0, null, 1, 16, "ion-item-options", [], null, null, null, null, null)), i0.ɵdid(33, 16384, [[5, 4]], 0, i16.ItemOptions, [i0.ElementRef, i13.Platform], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(35, 0, null, null, 5, "button", [["ion-button", ""], ["primary", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentEditAccountModal(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i17.View_Button_0, i17.RenderType_Button)), i0.ɵdid(36, 1097728, null, 0, i18.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(38, 0, null, 0, 1, "ion-icon", [["name", "text"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(39, 147456, null, 0, i14.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          Edit\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(42, 0, null, null, 5, "button", [["ion-button", ""], ["primary", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDelete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i17.View_Button_0, i17.RenderType_Button)), i0.ɵdid(43, 1097728, null, 0, i18.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(45, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(46, 147456, null, 0, i14.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          Delete\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var currVal_1 = "person"; _ck(_v, 13, 0, currVal_1); var currVal_6 = ((_v.context.$implicit.ext.$balanceObj == null) ? null : _v.context.$implicit.ext.$balanceObj.data.isDirty); _ck(_v, 25, 0, currVal_6); var currVal_7 = _v.context.$implicit.meta.hasPendingWrites; _ck(_v, 29, 0, currVal_7); var currVal_9 = "text"; _ck(_v, 39, 0, currVal_9); var currVal_11 = "trash"; _ck(_v, 46, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 13)._hidden; _ck(_v, 12, 0, currVal_0); var currVal_2 = _v.context.$implicit.data.name; _ck(_v, 16, 0, currVal_2); var currVal_3 = _v.context.$implicit.data.city; _ck(_v, 20, 0, currVal_3); var currVal_4 = (((_v.context.$implicit.ext.$balanceObj == null) ? null : _v.context.$implicit.ext.$balanceObj.data.isDirty) ? "red" : ""); _ck(_v, 22, 0, currVal_4); var currVal_5 = ((_v.context.$implicit.ext == null) ? null : _v.context.$implicit.ext.$balance); _ck(_v, 23, 0, currVal_5); var currVal_8 = i0.ɵnov(_v, 39)._hidden; _ck(_v, 38, 0, currVal_8); var currVal_10 = i0.ɵnov(_v, 46)._hidden; _ck(_v, 45, 0, currVal_10); }); }
export function View_AccountsListPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 14, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i19.View_Content_0, i19.RenderType_Content)), i0.ɵdid(2, 4374528, null, 0, i20.Content, [i4.Config, i13.Platform, i21.DomController, i0.ElementRef, i0.Renderer, i22.App, i23.Keyboard, i0.NgZone, [2, i24.ViewController], [2, i25.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(4, 0, null, 1, 10, "ion-list", [], null, null, null, null, null)), i0.ɵdid(5, 16384, null, 0, i12.List, [i4.Config, i0.ElementRef, i0.Renderer, i13.Platform, i26.GestureController, i21.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AccountsListPage_1)), i0.ɵdid(8, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵpid(131072, i7.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AccountsListPage_3)), i0.ɵdid(12, 802816, null, 0, i7.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpid(131072, i7.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(17, 0, null, null, 34, "ion-footer", [], null, null, null, null, null)), i0.ɵdid(18, 16384, null, 0, i27.Footer, [i4.Config, i0.ElementRef, i0.Renderer, [2, i24.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(20, 0, null, null, 30, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i28.View_Navbar_0, i28.RenderType_Navbar)), i0.ɵdid(21, 49152, null, 0, i29.Navbar, [i22.App, [2, i24.ViewController], [2, i25.NavController], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(23, 0, null, 1, 10, "ion-buttons", [["start", ""]], null, null, null, null, null)), i0.ɵdid(24, 16384, null, 1, i30.ToolbarItem, [i4.Config, i0.ElementRef, i0.Renderer, [2, i31.Toolbar], [2, i29.Navbar]], null, null), i0.ɵqud(603979776, 9, { _buttons: 1 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(27, 0, null, null, 5, "button", [["color", "royal"], ["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentNewAccountModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i17.View_Button_0, i17.RenderType_Button)), i0.ɵdid(28, 1097728, [[9, 4]], 0, i18.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵeld(30, 0, null, 0, 1, "ion-icon", [["name", "person-add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(31, 147456, null, 0, i14.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(35, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 37).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i17.View_Button_0, i17.RenderType_Button)), i0.ɵdid(36, 1097728, [[10, 4]], 0, i18.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(37, 1064960, null, 0, i32.MenuToggle, [i33.MenuController, [2, i24.ViewController], [2, i18.Button], [2, i29.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(38, 16384, null, 1, i30.ToolbarItem, [i4.Config, i0.ElementRef, i0.Renderer, [2, i31.Toolbar], [2, i29.Navbar]], null, null), i0.ɵqud(603979776, 10, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵeld(41, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(42, 147456, null, 0, i14.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(45, 0, null, 3, 4, "ion-searchbar", [["aria-label", "search"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], null, null, i34.View_Searchbar_0, i34.RenderType_Searchbar)), i0.ɵdid(46, 540672, null, 0, i35.FormControlDirective, [[8, null], [8, null], [8, null]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i35.NgControl, null, [i35.FormControlDirective]), i0.ɵdid(48, 16384, null, 0, i35.NgControlStatus, [i35.NgControl], null, null), i0.ɵdid(49, 1294336, null, 0, i36.Searchbar, [i4.Config, i13.Platform, i0.ElementRef, i0.Renderer, [2, i35.NgControl]], { showCancelButton: [0, "showCancelButton"] }, null), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵunv(_v, 8, 0, i0.ɵnov(_v, 9).transform(_co.totalBalanceObj)); _ck(_v, 8, 0, currVal_2); var currVal_3 = i0.ɵunv(_v, 12, 0, i0.ɵnov(_v, 13).transform(_co.filteredAccounts)); _ck(_v, 12, 0, currVal_3); var currVal_6 = "royal"; _ck(_v, 28, 0, currVal_6); var currVal_8 = "person-add"; _ck(_v, 31, 0, currVal_8); var currVal_10 = ""; _ck(_v, 37, 0, currVal_10); var currVal_12 = "menu"; _ck(_v, 42, 0, currVal_12); var currVal_26 = _co.searchControl; _ck(_v, 46, 0, currVal_26); var currVal_27 = true; _ck(_v, 49, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).statusbarPadding; var currVal_1 = i0.ɵnov(_v, 2)._hasRefresher; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = i0.ɵnov(_v, 21)._hidden; var currVal_5 = i0.ɵnov(_v, 21)._sbPadding; _ck(_v, 20, 0, currVal_4, currVal_5); var currVal_7 = i0.ɵnov(_v, 31)._hidden; _ck(_v, 30, 0, currVal_7); var currVal_9 = i0.ɵnov(_v, 37).isHidden; _ck(_v, 35, 0, currVal_9); var currVal_11 = i0.ɵnov(_v, 42)._hidden; _ck(_v, 41, 0, currVal_11); var currVal_13 = i0.ɵnov(_v, 48).ngClassUntouched; var currVal_14 = i0.ɵnov(_v, 48).ngClassTouched; var currVal_15 = i0.ɵnov(_v, 48).ngClassPristine; var currVal_16 = i0.ɵnov(_v, 48).ngClassDirty; var currVal_17 = i0.ɵnov(_v, 48).ngClassValid; var currVal_18 = i0.ɵnov(_v, 48).ngClassInvalid; var currVal_19 = i0.ɵnov(_v, 48).ngClassPending; var currVal_20 = i0.ɵnov(_v, 49)._animated; var currVal_21 = i0.ɵnov(_v, 49)._value; var currVal_22 = i0.ɵnov(_v, 49)._isActive; var currVal_23 = i0.ɵnov(_v, 49)._showCancelButton; var currVal_24 = i0.ɵnov(_v, 49)._shouldAlignLeft; var currVal_25 = i0.ɵnov(_v, 49)._isFocus; _ck(_v, 45, 1, [currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]); }); }
export function View_AccountsListPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-accounts-list", [], null, null, null, View_AccountsListPage_0, RenderType_AccountsListPage)), i0.ɵdid(1, 49152, null, 0, i37.AccountsListPage, [i25.NavController, i38.AccountsFsRepository, i39.AccountsBalanceFBRepository, i40.ModalController, i41.AlertController, [2, i42.TitleServiceProvider]], null, null)], null, null); }
var AccountsListPageNgFactory = i0.ɵccf("page-accounts-list", i37.AccountsListPage, View_AccountsListPage_Host_0, {}, {}, []);
export { AccountsListPageNgFactory as AccountsListPageNgFactory };
//# sourceMappingURL=accounts-list.ngfactory.js.map