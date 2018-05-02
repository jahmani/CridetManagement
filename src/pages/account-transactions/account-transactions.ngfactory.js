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
import * as i8 from "ionic-angular/components/icon/icon";
import * as i9 from "../../../node_modules/ionic-angular/components/spinner/spinner.ngfactory";
import * as i10 from "ionic-angular/components/spinner/spinner";
import * as i11 from "../../../node_modules/ionic-angular/components/item/item-sliding.ngfactory";
import * as i12 from "ionic-angular/components/item/item-sliding";
import * as i13 from "ionic-angular/components/list/list";
import * as i14 from "ionic-angular/platform/platform";
import * as i15 from "ionic-angular/components/thumbnail/thumbnail";
import * as i16 from "ionic-angular/components/grid/grid";
import * as i17 from "ionic-angular/components/grid/row";
import * as i18 from "ionic-angular/components/grid/col";
import * as i19 from "ionic-angular/components/note/note";
import * as i20 from "ionic-angular/components/item/item-options";
import * as i21 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i22 from "ionic-angular/components/button/button";
import * as i23 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i24 from "ionic-angular/components/content/content";
import * as i25 from "ionic-angular/platform/dom-controller";
import * as i26 from "ionic-angular/components/app/app";
import * as i27 from "ionic-angular/platform/keyboard";
import * as i28 from "ionic-angular/navigation/view-controller";
import * as i29 from "ionic-angular/navigation/nav-controller";
import * as i30 from "ionic-angular/gestures/gesture-controller";
import * as i31 from "ionic-angular/components/toolbar/toolbar-footer";
import * as i32 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i33 from "ionic-angular/components/toolbar/navbar";
import * as i34 from "../../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory";
import * as i35 from "ionic-angular/components/searchbar/searchbar";
import * as i36 from "@angular/forms";
import * as i37 from "ionic-angular/components/toolbar/toolbar-item";
import * as i38 from "ionic-angular/components/toolbar/toolbar";
import * as i39 from "./account-transactions";
import * as i40 from "ionic-angular/navigation/nav-params";
import * as i41 from "ionic-angular/components/alert/alert-controller";
import * as i42 from "../../StoreData/transactions-fs-repository";
import * as i43 from "../../StoreData/accounts-fb-repository";
import * as i44 from "ionic-angular/components/modal/modal-controller";
import * as i45 from "../../providers/title-service/title-service";
import * as i46 from "../../StoreData/t-catigories-fs-repository";
var styles_AccountTransactionsPage = [];
var RenderType_AccountTransactionsPage = i0.ɵcrt({ encapsulation: 2, styles: styles_AccountTransactionsPage, data: {} });
export { RenderType_AccountTransactionsPage as RenderType_AccountTransactionsPage };
function View_AccountTransactionsPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [" ! "]))], null, null); }
function View_AccountTransactionsPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(7, 0, null, 0, 1, "span", [["class", "balance ammount-bold"], ["item-start", ""], ["text-end", ""]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u0627\u0644\u0631\u0635\u064A\u062F : "])), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(10, 0, null, 2, 1, "span", [["class", "ammount-bold"]], [[4, "color", null]], null, null, null, null)), (_l()(), i0.ɵted(11, null, ["\n        ", "\n      "])), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_AccountTransactionsPage_2)), i0.ɵdid(14, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(16, 0, null, 2, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(17, null, ["", ""])), (_l()(), i0.ɵted(-1, 2, ["\n    "]))], function (_ck, _v) { var currVal_2 = ((_v.context.ngIf.ext == null) ? null : ((_v.context.ngIf.ext.$balanceObj == null) ? null : ((_v.context.ngIf.ext.$balanceObj.data == null) ? null : _v.context.ngIf.ext.$balanceObj.data.isDirty))); _ck(_v, 14, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (((_v.context.ngIf.ext == null) ? null : ((_v.context.ngIf.ext.$balanceObj == null) ? null : ((_v.context.ngIf.ext.$balanceObj.data == null) ? null : _v.context.ngIf.ext.$balanceObj.data.isDirty))) ? "red" : ""); _ck(_v, 10, 0, currVal_0); var currVal_1 = _v.context.ngIf.ext.$balanceObj.data.balance; _ck(_v, 11, 0, currVal_1); var currVal_3 = ((((_v.context.ngIf.ext == null) ? null : _v.context.ngIf.ext.$balance) > 0) ? "\u0644\u0647" : "\u0639\u0644\u064A\u0647"); _ck(_v, 17, 0, currVal_3); }); }
function View_AccountTransactionsPage_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-icon", [["name", "remove"], ["role", "img"], ["style", "color:red"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_1 = "remove"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._hidden; _ck(_v, 0, 0, currVal_0); }); }
function View_AccountTransactionsPage_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n                  "])), (_l()(), i0.ɵeld(1, 0, null, null, 1, "ion-icon", [["name", "add"], ["role", "img"], ["style", "color:green"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(2, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                "]))], function (_ck, _v) { var currVal_1 = "add"; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2)._hidden; _ck(_v, 1, 0, currVal_0); }); }
function View_AccountTransactionsPage_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "note-italic"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" \\ ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.data.notice; _ck(_v, 1, 0, currVal_0); }); }
function View_AccountTransactionsPage_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-spinner", [["item-right", ""], ["name", "bubbles"]], [[2, "spinner-paused", null]], null, null, i9.View_Spinner_0, i9.RenderType_Spinner)), i0.ɵdid(1, 114688, null, 0, i10.Spinner, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_1 = "bubbles"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_AccountTransactionsPage_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 125, "ion-item-sliding", [], null, null, null, i11.View_ItemSliding_0, i11.RenderType_ItemSliding)), i0.ɵdid(1, 49152, null, 2, i12.ItemSliding, [[2, i13.List], i14.Platform, i0.Renderer, i0.ElementRef, i0.NgZone], null, null), i0.ɵqud(335544320, 4, { item: 0 }), i0.ɵqud(603979776, 5, { _itemOptions: 1 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(5, 0, null, 0, 101, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(6, 1097728, [[4, 4]], 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 6, { contentLabel: 0 }), i0.ɵqud(603979776, 7, { _buttons: 1 }), i0.ɵqud(603979776, 8, { _icons: 1 }), i0.ɵdid(10, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(12, 0, null, 0, 4, "ion-thumbnail", [["item-start", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showTransactionImage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(13, 16384, null, 0, i15.Thumbnail, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(15, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(18, 0, null, 2, 84, "ion-grid", [["class", "grid"], ["no-padding", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentEditTransactionModal(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(19, 16384, null, 0, i16.Grid, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(21, 0, null, null, 31, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(22, 16384, null, 0, i17.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(24, 0, null, null, 14, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(25, 16384, null, 0, i18.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(27, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AccountTransactionsPage_4)), i0.ɵdid(30, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(0, [["plusIcon", 2]], null, 0, null, View_AccountTransactionsPage_5)), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(35, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(36, null, ["", ""])), i0.ɵppd(37, 2), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(40, 0, null, null, 11, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(41, 16384, null, 0, i18.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(43, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(44, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(46, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [":"])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(49, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(50, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(54, 0, null, null, 23, "ion-row", [["class", " gray row"]], null, null, null, null, null)), i0.ɵdid(55, 16384, null, 0, i17.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(57, 0, null, null, 12, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(58, 16384, null, 0, i18.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(60, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(62, 0, null, null, 1, "ion-icon", [["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(63, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(66, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(67, null, ["", ""])), i0.ɵppd(68, 2), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(71, 0, null, null, 5, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(72, 16384, null, 0, i18.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(74, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(75, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(79, 0, null, null, 9, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(80, 16384, null, 0, i17.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(82, 0, null, null, 5, "ion-col", [["class", "col"], ["col-auto", ""]], null, null, null, null, null)), i0.ɵdid(83, 16384, null, 0, i18.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AccountTransactionsPage_6)), i0.ɵdid(86, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(90, 0, null, null, 11, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(91, 16384, null, 0, i17.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(93, 0, null, null, 7, "ion-col", [["class", "col"], ["text-end", ""]], null, null, null, null, null)), i0.ɵdid(94, 16384, null, 0, i18.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n              "])), (_l()(), i0.ɵeld(96, 0, null, null, 3, "ion-note", [["class", "date-small"]], null, null, null, null, null)), i0.ɵdid(97, 16384, null, 0, i19.Note, [i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(98, null, ["", " "])), i0.ɵppd(99, 2), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 4, 1, null, View_AccountTransactionsPage_7)), i0.ɵdid(105, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(108, 0, null, 1, 16, "ion-item-options", [], null, null, null, null, null)), i0.ɵdid(109, 16384, [[5, 4]], 0, i20.ItemOptions, [i0.ElementRef, i14.Platform], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(111, 0, null, null, 5, "button", [["ion-button", ""], ["primary", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentEditTransactionModal(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i21.View_Button_0, i21.RenderType_Button)), i0.ɵdid(112, 1097728, null, 0, i22.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(114, 0, null, 0, 1, "ion-icon", [["name", "text"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(115, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          Edit\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(118, 0, null, null, 5, "button", [["ion-button", ""], ["primary", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDelete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i21.View_Button_0, i21.RenderType_Button)), i0.ɵdid(119, 1097728, null, 0, i22.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(121, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(122, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          Delete\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var currVal_1 = (_v.context.$implicit.data.type < 0); var currVal_2 = i0.ɵnov(_v, 32); _ck(_v, 30, 0, currVal_1, currVal_2); var currVal_7 = ((_v.context.$implicit.ext.currentBalance < 0) ? "remove" : "add"); _ck(_v, 63, 0, currVal_7); var currVal_10 = _v.context.$implicit.data.notice; _ck(_v, 86, 0, currVal_10); var currVal_12 = _v.context.$implicit.meta.hasPendingWrites; _ck(_v, 105, 0, currVal_12); var currVal_14 = "text"; _ck(_v, 115, 0, currVal_14); var currVal_16 = "trash"; _ck(_v, 122, 0, currVal_16); }, function (_ck, _v) { var currVal_0 = i0.ɵinlineInterpolate(1, "", (_v.context.$implicit.data.imageSrc || "../../assets/icon/attachImage.png"), ""); _ck(_v, 15, 0, currVal_0); var currVal_3 = i0.ɵunv(_v, 36, 0, _ck(_v, 37, 0, i0.ɵnov(_v.parent, 0), _v.context.$implicit.data.ammount, "1.2-2")); _ck(_v, 36, 0, currVal_3); var currVal_4 = ((_v.context.$implicit.data.type == 1) ? "\u0644\u0647" : "\u0639\u0644\u064A\u0647"); _ck(_v, 44, 0, currVal_4); var currVal_5 = ((_v.context.$implicit.ext == null) ? null : ((_v.context.$implicit.ext.catigory == null) ? null : _v.context.$implicit.ext.catigory.data.name)); _ck(_v, 50, 0, currVal_5); var currVal_6 = i0.ɵnov(_v, 63)._hidden; _ck(_v, 62, 0, currVal_6); var currVal_8 = i0.ɵunv(_v, 67, 0, _ck(_v, 68, 0, i0.ɵnov(_v.parent, 0), (_v.context.$implicit.ext.currentBalance * ((_v.context.$implicit.ext.currentBalance < 0) ? (0 - 1) : 1)), "1.2-2")); _ck(_v, 67, 0, currVal_8); var currVal_9 = "\u0631\u0635\u064A\u062F \u062A\u0631\u0627\u0643\u0645\u064A"; _ck(_v, 75, 0, currVal_9); var currVal_11 = i0.ɵunv(_v, 98, 0, _ck(_v, 99, 0, i0.ɵnov(_v.parent, 1), _v.context.$implicit.data.date, "shortDate")); _ck(_v, 98, 0, currVal_11); var currVal_13 = i0.ɵnov(_v, 115)._hidden; _ck(_v, 114, 0, currVal_13); var currVal_15 = i0.ɵnov(_v, 122)._hidden; _ck(_v, 121, 0, currVal_15); }); }
export function View_AccountTransactionsPage_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i7.DecimalPipe, [i0.LOCALE_ID]), i0.ɵpid(0, i7.DatePipe, [i0.LOCALE_ID]), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(4, 0, null, null, 18, "ion-content", [["no-padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i23.View_Content_0, i23.RenderType_Content)), i0.ɵdid(5, 4374528, null, 0, i24.Content, [i4.Config, i14.Platform, i25.DomController, i0.ElementRef, i0.Renderer, i26.App, i27.Keyboard, i0.NgZone, [2, i28.ViewController], [2, i29.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(7, 0, null, 1, 1, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(10, 0, null, 1, 10, "ion-list", [], null, null, null, null, null)), i0.ɵdid(11, 16384, null, 0, i13.List, [i4.Config, i0.ElementRef, i0.Renderer, i14.Platform, i30.GestureController, i25.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AccountTransactionsPage_1)), i0.ɵdid(14, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵpid(131072, i7.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AccountTransactionsPage_3)), i0.ɵdid(18, 802816, null, 0, i7.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpid(131072, i7.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(24, 0, null, null, 28, "ion-footer", [], null, null, null, null, null)), i0.ɵdid(25, 16384, null, 0, i31.Footer, [i4.Config, i0.ElementRef, i0.Renderer, [2, i28.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(27, 0, null, null, 24, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i32.View_Navbar_0, i32.RenderType_Navbar)), i0.ɵdid(28, 49152, null, 0, i33.Navbar, [i26.App, [2, i28.ViewController], [2, i29.NavController], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n\n    "])), (_l()(), i0.ɵeld(30, 0, null, 3, 1, "ion-searchbar", [], [[2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], null, null, i34.View_Searchbar_0, i34.RenderType_Searchbar)), i0.ɵdid(31, 1294336, null, 0, i35.Searchbar, [i4.Config, i14.Platform, i0.ElementRef, i0.Renderer, [2, i36.NgControl]], { showCancelButton: [0, "showCancelButton"] }, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(33, 0, null, 1, 17, "ion-buttons", [["start", ""]], null, null, null, null, null)), i0.ɵdid(34, 16384, null, 1, i37.ToolbarItem, [i4.Config, i0.ElementRef, i0.Renderer, [2, i38.Toolbar], [2, i33.Navbar]], null, null), i0.ɵqud(603979776, 9, { _buttons: 1 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(37, 0, null, null, 5, "button", [["color", "royal"], ["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentNewTransactionModal(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i21.View_Button_0, i21.RenderType_Button)), i0.ɵdid(38, 1097728, [[9, 4]], 0, i22.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵeld(40, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(41, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(44, 0, null, null, 5, "button", [["color", "royal"], ["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentNewTransactionModal((0 - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i21.View_Button_0, i21.RenderType_Button)), i0.ɵdid(45, 1097728, [[9, 4]], 0, i22.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵeld(47, 0, null, 0, 1, "ion-icon", [["name", "remove"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(48, 147456, null, 0, i8.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = i0.ɵunv(_v, 14, 0, i0.ɵnov(_v, 15).transform(_co.extAccount)); _ck(_v, 14, 0, currVal_2); var currVal_3 = i0.ɵunv(_v, 18, 0, i0.ɵnov(_v, 19).transform(_co.transSnapshotsArray)); _ck(_v, 18, 0, currVal_3); var currVal_12 = true; _ck(_v, 31, 0, currVal_12); var currVal_13 = "royal"; _ck(_v, 38, 0, currVal_13); var currVal_15 = "add"; _ck(_v, 41, 0, currVal_15); var currVal_16 = "royal"; _ck(_v, 45, 0, currVal_16); var currVal_18 = "remove"; _ck(_v, 48, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 5).statusbarPadding; var currVal_1 = i0.ɵnov(_v, 5)._hasRefresher; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_4 = i0.ɵnov(_v, 28)._hidden; var currVal_5 = i0.ɵnov(_v, 28)._sbPadding; _ck(_v, 27, 0, currVal_4, currVal_5); var currVal_6 = i0.ɵnov(_v, 31)._animated; var currVal_7 = i0.ɵnov(_v, 31)._value; var currVal_8 = i0.ɵnov(_v, 31)._isActive; var currVal_9 = i0.ɵnov(_v, 31)._showCancelButton; var currVal_10 = i0.ɵnov(_v, 31)._shouldAlignLeft; var currVal_11 = i0.ɵnov(_v, 31)._isFocus; _ck(_v, 30, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_14 = i0.ɵnov(_v, 41)._hidden; _ck(_v, 40, 0, currVal_14); var currVal_17 = i0.ɵnov(_v, 48)._hidden; _ck(_v, 47, 0, currVal_17); }); }
export function View_AccountTransactionsPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-account-transactions", [], null, null, null, View_AccountTransactionsPage_0, RenderType_AccountTransactionsPage)), i0.ɵdid(1, 49152, null, 0, i39.AccountTransactionsPage, [i29.NavController, i40.NavParams, i41.AlertController, i42.TransactionsFsRepository, i43.AccountsFsRepository, i44.ModalController, [2, i45.TitleServiceProvider], i46.TCatigoriesFsRepositoryProvider], null, null)], null, null); }
var AccountTransactionsPageNgFactory = i0.ɵccf("page-account-transactions", i39.AccountTransactionsPage, View_AccountTransactionsPage_Host_0, {}, {}, []);
export { AccountTransactionsPageNgFactory as AccountTransactionsPageNgFactory };
//# sourceMappingURL=account-transactions.ngfactory.js.map