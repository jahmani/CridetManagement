/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/toolbar/toolbar-header";
import * as i2 from "ionic-angular/config/config";
import * as i3 from "ionic-angular/navigation/view-controller";
import * as i4 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i5 from "ionic-angular/components/toolbar/navbar";
import * as i6 from "ionic-angular/components/app/app";
import * as i7 from "ionic-angular/navigation/nav-controller";
import * as i8 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i9 from "ionic-angular/components/toolbar/toolbar-title";
import * as i10 from "ionic-angular/components/toolbar/toolbar";
import * as i11 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i12 from "ionic-angular/components/content/content";
import * as i13 from "ionic-angular/platform/platform";
import * as i14 from "ionic-angular/platform/dom-controller";
import * as i15 from "ionic-angular/platform/keyboard";
import * as i16 from "ionic-angular/components/list/list";
import * as i17 from "ionic-angular/gestures/gesture-controller";
import * as i18 from "../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i19 from "ionic-angular/components/item/item";
import * as i20 from "ionic-angular/util/form";
import * as i21 from "ionic-angular/components/item/item-reorder";
import * as i22 from "ionic-angular/components/item/item-content";
import * as i23 from "ionic-angular/components/nav/nav-push";
import * as i24 from "ionic-angular/components/nav/nav-push-anchor";
import * as i25 from "ionic-angular/navigation/deep-linker";
import * as i26 from "ionic-angular/components/icon/icon";
import * as i27 from "./store-settings";
import * as i28 from "ionic-angular/navigation/nav-params";
import * as i29 from "../../providers/title-service/title-service";
var styles_StoreSettingsPage = [];
var RenderType_StoreSettingsPage = i0.ɵcrt({ encapsulation: 2, styles: styles_StoreSettingsPage, data: {} });
export { RenderType_StoreSettingsPage as RenderType_StoreSettingsPage };
export function View_StoreSettingsPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), i0.ɵdid(2, 16384, null, 0, i1.Header, [i2.Config, i0.ElementRef, i0.Renderer, [2, i3.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n\n  "])), (_l()(), i0.ɵeld(4, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i4.View_Navbar_0, i4.RenderType_Navbar)), i0.ɵdid(5, 49152, null, 0, i5.Navbar, [i6.App, [2, i3.ViewController], [2, i7.NavController], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, 3, 2, "ion-title", [], null, null, null, i8.View_ToolbarTitle_0, i8.RenderType_ToolbarTitle)), i0.ɵdid(8, 49152, null, 0, i9.ToolbarTitle, [i2.Config, i0.ElementRef, i0.Renderer, [2, i10.Toolbar], [2, i5.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["StoreSettings"])), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n\n"])), (_l()(), i0.ɵeld(13, 0, null, null, 58, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i11.View_Content_0, i11.RenderType_Content)), i0.ɵdid(14, 4374528, null, 0, i12.Content, [i2.Config, i13.Platform, i14.DomController, i0.ElementRef, i0.Renderer, i6.App, i15.Keyboard, i0.NgZone, [2, i3.ViewController], [2, i7.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(16, 0, null, 1, 54, "ion-list", [], null, null, null, null, null)), i0.ɵdid(17, 16384, null, 0, i16.List, [i2.Config, i0.ElementRef, i0.Renderer, i13.Platform, i17.GestureController, i14.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(19, 0, null, null, 11, "a", [["class", "item item-block"], ["detail-push", ""], ["ion-item", ""], ["navPush", "EditStoreInfoPage"]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 25).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i18.View_Item_0, i18.RenderType_Item)), i0.ɵdid(20, 1097728, null, 3, i19.Item, [i20.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i21.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(24, 16384, null, 0, i22.ItemContent, [], null, null), i0.ɵdid(25, 16384, null, 0, i23.NavPush, [[2, i7.NavController]], { navPush: [0, "navPush"] }, null), i0.ɵdid(26, 1064960, null, 0, i24.NavPushAnchor, [i23.NavPush, [2, i25.DeepLinker]], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(28, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "leaf"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(29, 147456, [[3, 4]], 0, i26.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        General\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(32, 0, null, null, 11, "a", [["class", "item item-block"], ["detail-push", ""], ["ion-item", ""], ["navPush", "TransactionCatsPage"]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 38).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i18.View_Item_0, i18.RenderType_Item)), i0.ɵdid(33, 1097728, null, 3, i19.Item, [i20.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i21.ItemReorder]], null, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(37, 16384, null, 0, i22.ItemContent, [], null, null), i0.ɵdid(38, 16384, null, 0, i23.NavPush, [[2, i7.NavController]], { navPush: [0, "navPush"] }, null), i0.ɵdid(39, 1064960, null, 0, i24.NavPushAnchor, [i23.NavPush, [2, i25.DeepLinker]], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(41, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "pricetags"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(42, 147456, [[6, 4]], 0, i26.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        Transaction Catigories\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(45, 0, null, null, 11, "a", [["class", "item item-block"], ["detail-push", ""], ["ion-item", ""], ["navPush", "StoreUsersPage"]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 51).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i18.View_Item_0, i18.RenderType_Item)), i0.ɵdid(46, 1097728, null, 3, i19.Item, [i20.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i21.ItemReorder]], null, null), i0.ɵqud(335544320, 7, { contentLabel: 0 }), i0.ɵqud(603979776, 8, { _buttons: 1 }), i0.ɵqud(603979776, 9, { _icons: 1 }), i0.ɵdid(50, 16384, null, 0, i22.ItemContent, [], null, null), i0.ɵdid(51, 16384, null, 0, i23.NavPush, [[2, i7.NavController]], { navPush: [0, "navPush"] }, null), i0.ɵdid(52, 1064960, null, 0, i24.NavPushAnchor, [i23.NavPush, [2, i25.DeepLinker]], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(54, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "people"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(55, 147456, [[9, 4]], 0, i26.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        Users\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(58, 0, null, null, 11, "a", [["class", "item item-block"], ["detail-push", ""], ["ion-item", ""], ["navPush", "UserSettingsPage"]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 64).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i18.View_Item_0, i18.RenderType_Item)), i0.ɵdid(59, 1097728, null, 3, i19.Item, [i20.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i21.ItemReorder]], null, null), i0.ɵqud(335544320, 10, { contentLabel: 0 }), i0.ɵqud(603979776, 11, { _buttons: 1 }), i0.ɵqud(603979776, 12, { _icons: 1 }), i0.ɵdid(63, 16384, null, 0, i22.ItemContent, [], null, null), i0.ɵdid(64, 16384, null, 0, i23.NavPush, [[2, i7.NavController]], { navPush: [0, "navPush"] }, null), i0.ɵdid(65, 1064960, null, 0, i24.NavPushAnchor, [i23.NavPush, [2, i25.DeepLinker]], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵeld(67, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "notifications"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(68, 147456, [[12, 4]], 0, i26.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        Notifications\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_5 = "EditStoreInfoPage"; _ck(_v, 25, 0, currVal_5); var currVal_7 = "leaf"; _ck(_v, 29, 0, currVal_7); var currVal_9 = "TransactionCatsPage"; _ck(_v, 38, 0, currVal_9); var currVal_11 = "pricetags"; _ck(_v, 42, 0, currVal_11); var currVal_13 = "StoreUsersPage"; _ck(_v, 51, 0, currVal_13); var currVal_15 = "people"; _ck(_v, 55, 0, currVal_15); var currVal_17 = "UserSettingsPage"; _ck(_v, 64, 0, currVal_17); var currVal_19 = "notifications"; _ck(_v, 68, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 5)._hidden; var currVal_1 = i0.ɵnov(_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 14).statusbarPadding; var currVal_3 = i0.ɵnov(_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_4 = i0.ɵnov(_v, 26)._href; _ck(_v, 19, 0, currVal_4); var currVal_6 = i0.ɵnov(_v, 29)._hidden; _ck(_v, 28, 0, currVal_6); var currVal_8 = i0.ɵnov(_v, 39)._href; _ck(_v, 32, 0, currVal_8); var currVal_10 = i0.ɵnov(_v, 42)._hidden; _ck(_v, 41, 0, currVal_10); var currVal_12 = i0.ɵnov(_v, 52)._href; _ck(_v, 45, 0, currVal_12); var currVal_14 = i0.ɵnov(_v, 55)._hidden; _ck(_v, 54, 0, currVal_14); var currVal_16 = i0.ɵnov(_v, 65)._href; _ck(_v, 58, 0, currVal_16); var currVal_18 = i0.ɵnov(_v, 68)._hidden; _ck(_v, 67, 0, currVal_18); }); }
export function View_StoreSettingsPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-store-settings", [], null, null, null, View_StoreSettingsPage_0, RenderType_StoreSettingsPage)), i0.ɵdid(1, 49152, null, 0, i27.StoreSettingsPage, [i7.NavController, i28.NavParams, [2, i29.TitleServiceProvider]], null, null)], null, null); }
var StoreSettingsPageNgFactory = i0.ɵccf("page-store-settings", i27.StoreSettingsPage, View_StoreSettingsPage_Host_0, {}, {}, []);
export { StoreSettingsPageNgFactory as StoreSettingsPageNgFactory };
//# sourceMappingURL=store-settings.ngfactory.js.map