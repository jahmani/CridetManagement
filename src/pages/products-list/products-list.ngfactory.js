/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/ionic-angular/components/item/item-sliding.ngfactory";
import * as i2 from "ionic-angular/components/item/item-sliding";
import * as i3 from "ionic-angular/components/list/list";
import * as i4 from "ionic-angular/platform/platform";
import * as i5 from "../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i6 from "ionic-angular/components/item/item";
import * as i7 from "ionic-angular/util/form";
import * as i8 from "ionic-angular/config/config";
import * as i9 from "ionic-angular/components/item/item-reorder";
import * as i10 from "ionic-angular/components/item/item-content";
import * as i11 from "ionic-angular/components/thumbnail/thumbnail";
import * as i12 from "ionic-angular/components/grid/row";
import * as i13 from "ionic-angular/components/grid/col";
import * as i14 from "@angular/common";
import * as i15 from "ionic-angular/components/item/item-options";
import * as i16 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i17 from "ionic-angular/components/button/button";
import * as i18 from "ionic-angular/components/icon/icon";
import * as i19 from "ionic-angular/components/toolbar/toolbar-header";
import * as i20 from "ionic-angular/navigation/view-controller";
import * as i21 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i22 from "ionic-angular/components/toolbar/navbar";
import * as i23 from "ionic-angular/components/app/app";
import * as i24 from "ionic-angular/navigation/nav-controller";
import * as i25 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i26 from "ionic-angular/components/toolbar/toolbar-title";
import * as i27 from "ionic-angular/components/toolbar/toolbar";
import * as i28 from "ionic-angular/components/toolbar/toolbar-item";
import * as i29 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i30 from "ionic-angular/components/content/content";
import * as i31 from "ionic-angular/platform/dom-controller";
import * as i32 from "ionic-angular/platform/keyboard";
import * as i33 from "ionic-angular/gestures/gesture-controller";
import * as i34 from "./products-list";
import * as i35 from "ionic-angular/navigation/nav-params";
import * as i36 from "ionic-angular/components/alert/alert-controller";
import * as i37 from "ionic-angular/components/modal/modal-controller";
import * as i38 from "../../StoreData/products-fs-repository";
import * as i39 from "../../providers/title-service/title-service";
var styles_ProductsListPage = [];
var RenderType_ProductsListPage = i0.ɵcrt({ encapsulation: 2, styles: styles_ProductsListPage, data: {} });
export { RenderType_ProductsListPage as RenderType_ProductsListPage };
function View_ProductsListPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "note-italic"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.data.notice; _ck(_v, 1, 0, currVal_0); }); }
function View_ProductsListPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 62, "ion-item-sliding", [], null, null, null, i1.View_ItemSliding_0, i1.RenderType_ItemSliding)), i0.ɵdid(1, 49152, null, 2, i2.ItemSliding, [[2, i3.List], i4.Platform, i0.Renderer, i0.ElementRef, i0.NgZone], null, null), i0.ɵqud(335544320, 2, { item: 0 }), i0.ɵqud(603979776, 3, { _itemOptions: 1 }), (_l()(), i0.ɵted(-1, null, ["\n\n  "])), (_l()(), i0.ɵeld(5, 0, null, 0, 38, "ion-item", [["class", "item item-block"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentEditProductModal(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i5.View_Item_0, i5.RenderType_Item)), i0.ɵdid(6, 1097728, [[2, 4]], 3, i6.Item, [i7.Form, i8.Config, i0.ElementRef, i0.Renderer, [2, i9.ItemReorder]], null, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(10, 16384, null, 0, i10.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵeld(12, 0, null, 0, 4, "ion-thumbnail", [["item-start", ""]], null, null, null, null, null)), i0.ɵdid(13, 16384, null, 0, i11.Thumbnail, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(15, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵeld(18, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(19, null, ["", ""])), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵeld(21, 0, null, 2, 10, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(22, 16384, null, 0, i12.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(24, 0, null, null, 2, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(25, 16384, null, 0, i13.Col, [], null, null), (_l()(), i0.ɵted(26, null, ["Code : ", ""])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(28, 0, null, null, 2, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(29, 16384, null, 0, i13.Col, [], null, null), (_l()(), i0.ɵted(30, null, ["Style: ", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 2, ["\n    "])), (_l()(), i0.ɵeld(33, 0, null, 2, 9, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(34, 16384, null, 0, i12.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(36, 0, null, null, 5, "ion-col", [["class", "col"], ["col-auto", ""]], null, null, null, null, null)), i0.ɵdid(37, 16384, null, 0, i13.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ProductsListPage_2)), i0.ɵdid(40, 16384, null, 0, i14.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 2, ["    \n  "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(45, 0, null, 1, 16, "ion-item-options", [["side", "right"]], null, null, null, null, null)), i0.ɵdid(46, 16384, [[3, 4]], 0, i15.ItemOptions, [i0.ElementRef, i4.Platform], { side: [0, "side"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵeld(48, 0, null, null, 5, "button", [["color", "primary"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentEditProductModal(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i16.View_Button_0, i16.RenderType_Button)), i0.ɵdid(49, 1097728, null, 0, i17.Button, [[8, ""], i8.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵeld(51, 0, null, 0, 1, "ion-icon", [["name", "edit"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(52, 147456, null, 0, i18.Icon, [i8.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      Edit\n    "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(55, 0, null, null, 5, "button", [["color", "danger"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i16.View_Button_0, i16.RenderType_Button)), i0.ɵdid(56, 1097728, null, 0, i17.Button, [[8, ""], i8.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵeld(58, 0, null, 0, 1, "ion-icon", [["name", "trash"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(59, 147456, null, 0, i18.Icon, [i8.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      Delete\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_4 = _v.context.$implicit.data.notice; _ck(_v, 40, 0, currVal_4); var currVal_5 = "right"; _ck(_v, 46, 0, currVal_5); var currVal_6 = "primary"; _ck(_v, 49, 0, currVal_6); var currVal_8 = "edit"; _ck(_v, 52, 0, currVal_8); var currVal_9 = "danger"; _ck(_v, 56, 0, currVal_9); var currVal_11 = "trash"; _ck(_v, 59, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.data.thumbUrl; _ck(_v, 15, 0, currVal_0); var currVal_1 = _v.context.$implicit.data.name; _ck(_v, 19, 0, currVal_1); var currVal_2 = (_v.context.$implicit.data.code || "xxx"); _ck(_v, 26, 0, currVal_2); var currVal_3 = (_v.context.$implicit.data.style || "xxx"); _ck(_v, 30, 0, currVal_3); var currVal_7 = i0.ɵnov(_v, 52)._hidden; _ck(_v, 51, 0, currVal_7); var currVal_10 = i0.ɵnov(_v, 59)._hidden; _ck(_v, 58, 0, currVal_10); }); }
export function View_ProductsListPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 18, "ion-header", [], null, null, null, null, null)), i0.ɵdid(2, 16384, null, 0, i19.Header, [i8.Config, i0.ElementRef, i0.Renderer, [2, i20.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n\n  "])), (_l()(), i0.ɵeld(4, 0, null, null, 14, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i21.View_Navbar_0, i21.RenderType_Navbar)), i0.ɵdid(5, 49152, null, 0, i22.Navbar, [i23.App, [2, i20.ViewController], [2, i24.NavController], i8.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, 3, 2, "ion-title", [], null, null, null, i25.View_ToolbarTitle_0, i25.RenderType_ToolbarTitle)), i0.ɵdid(8, 49152, null, 0, i26.ToolbarTitle, [i8.Config, i0.ElementRef, i0.Renderer, [2, i27.Toolbar], [2, i22.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["ProductsList"])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(11, 0, null, 1, 6, "ion-buttons", [["start", ""]], null, null, null, null, null)), i0.ɵdid(12, 16384, null, 1, i28.ToolbarItem, [i8.Config, i0.ElementRef, i0.Renderer, [2, i27.Toolbar], [2, i22.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵeld(14, 0, null, null, 3, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentNewProductModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i16.View_Button_0, i16.RenderType_Button)), i0.ɵdid(15, 1097728, [[1, 4]], 0, i17.Button, [[8, ""], i8.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(16, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(17, 147456, null, 0, i18.Icon, [i8.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n\n"])), (_l()(), i0.ɵeld(21, 0, null, null, 10, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i29.View_Content_0, i29.RenderType_Content)), i0.ɵdid(22, 4374528, null, 0, i30.Content, [i8.Config, i4.Platform, i31.DomController, i0.ElementRef, i0.Renderer, i23.App, i32.Keyboard, i0.NgZone, [2, i20.ViewController], [2, i24.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵeld(24, 0, null, 1, 6, "ion-list", [], null, null, null, null, null)), i0.ɵdid(25, 16384, null, 0, i3.List, [i8.Config, i0.ElementRef, i0.Renderer, i4.Platform, i33.GestureController, i31.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_ProductsListPage_1)), i0.ɵdid(28, 802816, null, 0, i14.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵpid(131072, i14.AsyncPipe, [i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = "add"; _ck(_v, 17, 0, currVal_3); var currVal_6 = i0.ɵunv(_v, 28, 0, i0.ɵnov(_v, 29).transform(_co.products)); _ck(_v, 28, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 5)._hidden; var currVal_1 = i0.ɵnov(_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 17)._hidden; _ck(_v, 16, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 22).statusbarPadding; var currVal_5 = i0.ɵnov(_v, 22)._hasRefresher; _ck(_v, 21, 0, currVal_4, currVal_5); }); }
export function View_ProductsListPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-products-list", [], null, null, null, View_ProductsListPage_0, RenderType_ProductsListPage)), i0.ɵdid(1, 49152, null, 0, i34.ProductsListPage, [i24.NavController, i20.ViewController, i35.NavParams, i36.AlertController, i37.ModalController, [2, i38.ProductsFsRepository], [2, i39.TitleServiceProvider]], null, null)], null, null); }
var ProductsListPageNgFactory = i0.ɵccf("page-products-list", i34.ProductsListPage, View_ProductsListPage_Host_0, {}, {}, []);
export { ProductsListPageNgFactory as ProductsListPageNgFactory };
//# sourceMappingURL=products-list.ngfactory.js.map