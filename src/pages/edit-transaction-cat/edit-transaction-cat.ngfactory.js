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
import * as i8 from "ionic-angular/components/toolbar/toolbar-header";
import * as i9 from "ionic-angular/navigation/view-controller";
import * as i10 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i11 from "ionic-angular/components/toolbar/navbar";
import * as i12 from "ionic-angular/components/app/app";
import * as i13 from "ionic-angular/navigation/nav-controller";
import * as i14 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i15 from "ionic-angular/components/toolbar/toolbar-title";
import * as i16 from "ionic-angular/components/toolbar/toolbar";
import * as i17 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i18 from "ionic-angular/components/content/content";
import * as i19 from "ionic-angular/platform/platform";
import * as i20 from "ionic-angular/platform/dom-controller";
import * as i21 from "ionic-angular/platform/keyboard";
import * as i22 from "@angular/forms";
import * as i23 from "ionic-angular/components/list/list";
import * as i24 from "ionic-angular/gestures/gesture-controller";
import * as i25 from "ionic-angular/components/label/label";
import * as i26 from "../../../node_modules/ionic-angular/components/input/input.ngfactory";
import * as i27 from "ionic-angular/components/input/input";
import * as i28 from "../../../node_modules/ionic-angular/components/checkbox/checkbox.ngfactory";
import * as i29 from "ionic-angular/components/checkbox/checkbox";
import * as i30 from "../../components/trans-cat-picker/trans-cat-picker.ngfactory";
import * as i31 from "../../components/trans-cat-picker/trans-cat-picker";
import * as i32 from "ionic-angular/components/modal/modal-controller";
import * as i33 from "ionic-angular/components/toolbar/toolbar-footer";
import * as i34 from "ionic-angular/components/grid/grid";
import * as i35 from "ionic-angular/components/grid/row";
import * as i36 from "ionic-angular/components/grid/col";
import * as i37 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i38 from "ionic-angular/components/button/button";
import * as i39 from "./edit-transaction-cat";
import * as i40 from "../../StoreData/t-catigories-fs-repository";
import * as i41 from "../../providers/title-service/title-service";
import * as i42 from "ionic-angular/navigation/nav-params";
var styles_EditTransactionCatPage = [];
var RenderType_EditTransactionCatPage = i0.ɵcrt({ encapsulation: 2, styles: styles_EditTransactionCatPage, data: {} });
export { RenderType_EditTransactionCatPage as RenderType_EditTransactionCatPage };
function View_EditTransactionCatPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p", [["class", "err"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["* ammount is rquired"]))], null, null); }
function View_EditTransactionCatPage_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p", [["class", "err"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["*too much big ammount!"]))], null, null); }
function View_EditTransactionCatPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 12, "ion-item", [["class", "item item-block"], ["color", "danger"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], { color: [0, "color"] }, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_EditTransactionCatPage_2)), i0.ɵdid(8, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵand(16777216, null, 2, 1, null, View_EditTransactionCatPage_3)), i0.ɵdid(11, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.nameCtrl.hasError("required"); _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.nameCtrl.hasError("max"); _ck(_v, 11, 0, currVal_2); }, null); }
export function View_EditTransactionCatPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), i0.ɵdid(2, 16384, null, 0, i8.Header, [i4.Config, i0.ElementRef, i0.Renderer, [2, i9.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n\n  "])), (_l()(), i0.ɵeld(4, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i10.View_Navbar_0, i10.RenderType_Navbar)), i0.ɵdid(5, 49152, null, 0, i11.Navbar, [i12.App, [2, i9.ViewController], [2, i13.NavController], i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, 3, 2, "ion-title", [], null, null, null, i14.View_ToolbarTitle_0, i14.RenderType_ToolbarTitle)), i0.ɵdid(8, 49152, null, 0, i15.ToolbarTitle, [i4.Config, i0.ElementRef, i0.Renderer, [2, i16.Toolbar], [2, i11.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["EditTransactionCat"])), (_l()(), i0.ɵted(-1, 3, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(13, 0, null, null, 90, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i17.View_Content_0, i17.RenderType_Content)), i0.ɵdid(14, 4374528, null, 0, i18.Content, [i4.Config, i19.Platform, i20.DomController, i0.ElementRef, i0.Renderer, i12.App, i21.Keyboard, i0.NgZone, [2, i9.ViewController], [2, i13.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(16, 0, null, 1, 86, "form", [["ng-submit", "onSubmit()"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 18).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 18).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵdid(17, 16384, null, 0, i22.ɵbf, [], null, null), i0.ɵdid(18, 540672, null, 0, i22.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, null), i0.ɵprd(2048, null, i22.ControlContainer, null, [i22.FormGroupDirective]), i0.ɵdid(20, 16384, null, 0, i22.NgControlStatusGroup, [i22.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(22, 0, null, null, 79, "ion-list", [], null, null, null, null, null)), i0.ɵdid(23, 16384, null, 0, i23.List, [i4.Config, i0.ElementRef, i0.Renderer, i19.Platform, i24.GestureController, i20.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(25, 0, null, null, 16, "ion-item", [["class", "item item-block"]], [[2, "invalid", null]], null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(26, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(30, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(32, 0, null, 1, 2, "ion-label", [["floating", ""]], null, null, null, null, null)), i0.ɵdid(33, 16384, [[1, 4]], 0, i25.Label, [i4.Config, i0.ElementRef, i0.Renderer, [8, ""], [8, null], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["Name"])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(36, 0, null, 3, 4, "ion-input", [["autofocus", ""], ["formControlName", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, i26.View_TextInput_0, i26.RenderType_TextInput)), i0.ɵdid(37, 671744, null, 0, i22.FormControlName, [[3, i22.ControlContainer], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i22.NgControl, null, [i22.FormControlName]), i0.ɵdid(39, 16384, null, 0, i22.NgControlStatus, [i22.NgControl], null, null), i0.ɵdid(40, 5423104, null, 0, i27.TextInput, [i4.Config, i19.Platform, i3.Form, i12.App, i0.ElementRef, i0.Renderer, [2, i18.Content], [2, i2.Item], [2, i22.NgControl], i20.DomController], { type: [0, "type"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_EditTransactionCatPage_1)), i0.ɵdid(44, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵeld(46, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(47, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 7, { contentLabel: 0 }), i0.ɵqud(603979776, 8, { _buttons: 1 }), i0.ɵqud(603979776, 9, { _icons: 1 }), i0.ɵdid(51, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(53, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), i0.ɵdid(54, 16384, [[7, 4]], 0, i25.Label, [i4.Config, i0.ElementRef, i0.Renderer, [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["is Credit"])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(57, 0, null, 0, 5, "ion-checkbox", [["checked", "true"], ["formControlName", "isCredit"]], [[2, "checkbox-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 58)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i28.View_Checkbox_0, i28.RenderType_Checkbox)), i0.ɵdid(58, 1228800, null, 0, i29.Checkbox, [i4.Config, i3.Form, [2, i2.Item], i0.ElementRef, i0.Renderer], { checked: [0, "checked"] }, null), i0.ɵprd(1024, null, i22.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i29.Checkbox]), i0.ɵdid(60, 671744, null, 0, i22.FormControlName, [[3, i22.ControlContainer], [8, null], [8, null], [2, i22.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i22.NgControl, null, [i22.FormControlName]), i0.ɵdid(62, 16384, null, 0, i22.NgControlStatus, [i22.NgControl], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      \n      "])), (_l()(), i0.ɵeld(65, 0, null, null, 17, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(66, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 10, { contentLabel: 0 }), i0.ɵqud(603979776, 11, { _buttons: 1 }), i0.ɵqud(603979776, 12, { _icons: 1 }), i0.ɵdid(70, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(72, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), i0.ɵdid(73, 16384, [[10, 4]], 0, i25.Label, [i4.Config, i0.ElementRef, i0.Renderer, [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["is Debit"])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(76, 0, null, 0, 5, "ion-checkbox", [["checked", "true"], ["formControlName", "isDebit"]], [[2, "checkbox-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 77)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i28.View_Checkbox_0, i28.RenderType_Checkbox)), i0.ɵdid(77, 1228800, null, 0, i29.Checkbox, [i4.Config, i3.Form, [2, i2.Item], i0.ElementRef, i0.Renderer], { checked: [0, "checked"] }, null), i0.ɵprd(1024, null, i22.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i29.Checkbox]), i0.ɵdid(79, 671744, null, 0, i22.FormControlName, [[3, i22.ControlContainer], [8, null], [8, null], [2, i22.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i22.NgControl, null, [i22.FormControlName]), i0.ɵdid(81, 16384, null, 0, i22.NgControlStatus, [i22.NgControl], null, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(84, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(85, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 13, { contentLabel: 0 }), i0.ɵqud(603979776, 14, { _buttons: 1 }), i0.ɵqud(603979776, 15, { _icons: 1 }), i0.ɵdid(89, 16384, null, 0, i6.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(91, 0, null, 2, 8, "trans-cat-picker", [["formControlName", "parentId"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, i30.View_TransCatPickerComponent_0, i30.RenderType_TransCatPickerComponent)), i0.ɵdid(92, 49152, null, 0, i31.TransCatPickerComponent, [i32.ModalController], { transCatsRoot: [0, "transCatsRoot"], transCatsMap: [1, "transCatsMap"] }, null), i0.ɵpid(131072, i7.AsyncPipe, [i0.ChangeDetectorRef]), i0.ɵpid(131072, i7.AsyncPipe, [i0.ChangeDetectorRef]), i0.ɵprd(1024, null, i22.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i31.TransCatPickerComponent]), i0.ɵdid(96, 671744, null, 0, i22.FormControlName, [[3, i22.ControlContainer], [8, null], [8, null], [2, i22.NG_VALUE_ACCESSOR]], { name: [0, "name"] }, null), i0.ɵprd(2048, null, i22.NgControl, null, [i22.FormControlName]), i0.ɵdid(98, 16384, null, 0, i22.NgControlStatus, [i22.NgControl], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(105, 0, null, null, 26, "ion-footer", [], null, null, null, null, null)), i0.ɵdid(106, 16384, null, 0, i33.Footer, [i4.Config, i0.ElementRef, i0.Renderer, [2, i9.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(108, 0, null, null, 22, "ion-grid", [["class", "grid"]], null, null, null, null, null)), i0.ɵdid(109, 16384, null, 0, i34.Grid, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(111, 0, null, null, 18, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(112, 16384, null, 0, i35.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(114, 0, null, null, 6, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(115, 16384, null, 0, i36.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(117, 0, null, null, 2, "button", [["color", "light"], ["full", ""], ["ion-button", ""], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onCancel() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i37.View_Button_0, i37.RenderType_Button)), i0.ɵdid(118, 1097728, null, 0, i38.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"], full: [1, "full"] }, null), (_l()(), i0.ɵted(-1, 0, ["cancel"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(122, 0, null, null, 6, "ion-col", [["class", "col"]], null, null, null, null, null)), i0.ɵdid(123, 16384, null, 0, i36.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(125, 0, null, null, 2, "button", [["color", "primary"], ["full", ""], ["ion-button", ""], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSubmit(_co.form) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i37.View_Button_0, i37.RenderType_Button)), i0.ɵdid(126, 1097728, null, 0, i38.Button, [[8, ""], i4.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"], full: [1, "full"] }, null), (_l()(), i0.ɵted(-1, 0, [" save"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_11 = _co.form; _ck(_v, 18, 0, currVal_11); var currVal_20 = "name"; _ck(_v, 37, 0, currVal_20); var currVal_21 = "text"; _ck(_v, 40, 0, currVal_21); var currVal_22 = (!_co.nameCtrl.valid && (_co.nameCtrl.touched || _co.submitAttempt)); _ck(_v, 44, 0, currVal_22); var currVal_31 = "true"; _ck(_v, 58, 0, currVal_31); var currVal_32 = "isCredit"; _ck(_v, 60, 0, currVal_32); var currVal_41 = "true"; _ck(_v, 77, 0, currVal_41); var currVal_42 = "isDebit"; _ck(_v, 79, 0, currVal_42); var currVal_50 = i0.ɵunv(_v, 92, 0, i0.ɵnov(_v, 93).transform(_co.transCatsRoot$)); var currVal_51 = i0.ɵunv(_v, 92, 1, i0.ɵnov(_v, 94).transform(_co.transCatsMap$)); _ck(_v, 92, 0, currVal_50, currVal_51); var currVal_52 = "parentId"; _ck(_v, 96, 0, currVal_52); var currVal_53 = "light"; var currVal_54 = ""; _ck(_v, 118, 0, currVal_53, currVal_54); var currVal_55 = "primary"; var currVal_56 = ""; _ck(_v, 126, 0, currVal_55, currVal_56); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 5)._hidden; var currVal_1 = i0.ɵnov(_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 14).statusbarPadding; var currVal_3 = i0.ɵnov(_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_4 = i0.ɵnov(_v, 20).ngClassUntouched; var currVal_5 = i0.ɵnov(_v, 20).ngClassTouched; var currVal_6 = i0.ɵnov(_v, 20).ngClassPristine; var currVal_7 = i0.ɵnov(_v, 20).ngClassDirty; var currVal_8 = i0.ɵnov(_v, 20).ngClassValid; var currVal_9 = i0.ɵnov(_v, 20).ngClassInvalid; var currVal_10 = i0.ɵnov(_v, 20).ngClassPending; _ck(_v, 16, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_12 = (!_co.nameCtrl.valid && (_co.nameCtrl.touched || _co.submitAttempt)); _ck(_v, 25, 0, currVal_12); var currVal_13 = i0.ɵnov(_v, 39).ngClassUntouched; var currVal_14 = i0.ɵnov(_v, 39).ngClassTouched; var currVal_15 = i0.ɵnov(_v, 39).ngClassPristine; var currVal_16 = i0.ɵnov(_v, 39).ngClassDirty; var currVal_17 = i0.ɵnov(_v, 39).ngClassValid; var currVal_18 = i0.ɵnov(_v, 39).ngClassInvalid; var currVal_19 = i0.ɵnov(_v, 39).ngClassPending; _ck(_v, 36, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_23 = i0.ɵnov(_v, 58)._disabled; var currVal_24 = i0.ɵnov(_v, 62).ngClassUntouched; var currVal_25 = i0.ɵnov(_v, 62).ngClassTouched; var currVal_26 = i0.ɵnov(_v, 62).ngClassPristine; var currVal_27 = i0.ɵnov(_v, 62).ngClassDirty; var currVal_28 = i0.ɵnov(_v, 62).ngClassValid; var currVal_29 = i0.ɵnov(_v, 62).ngClassInvalid; var currVal_30 = i0.ɵnov(_v, 62).ngClassPending; _ck(_v, 57, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_33 = i0.ɵnov(_v, 77)._disabled; var currVal_34 = i0.ɵnov(_v, 81).ngClassUntouched; var currVal_35 = i0.ɵnov(_v, 81).ngClassTouched; var currVal_36 = i0.ɵnov(_v, 81).ngClassPristine; var currVal_37 = i0.ɵnov(_v, 81).ngClassDirty; var currVal_38 = i0.ɵnov(_v, 81).ngClassValid; var currVal_39 = i0.ɵnov(_v, 81).ngClassInvalid; var currVal_40 = i0.ɵnov(_v, 81).ngClassPending; _ck(_v, 76, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_43 = i0.ɵnov(_v, 98).ngClassUntouched; var currVal_44 = i0.ɵnov(_v, 98).ngClassTouched; var currVal_45 = i0.ɵnov(_v, 98).ngClassPristine; var currVal_46 = i0.ɵnov(_v, 98).ngClassDirty; var currVal_47 = i0.ɵnov(_v, 98).ngClassValid; var currVal_48 = i0.ɵnov(_v, 98).ngClassInvalid; var currVal_49 = i0.ɵnov(_v, 98).ngClassPending; _ck(_v, 91, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); }); }
export function View_EditTransactionCatPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-edit-transaction-cat", [], null, null, null, View_EditTransactionCatPage_0, RenderType_EditTransactionCatPage)), i0.ɵdid(1, 49152, null, 0, i39.EditTransactionCatPage, [i22.FormBuilder, i40.TCatigoriesFsRepositoryProvider, i41.TitleServiceProvider, i13.NavController, i42.NavParams], null, null)], null, null); }
var EditTransactionCatPageNgFactory = i0.ɵccf("page-edit-transaction-cat", i39.EditTransactionCatPage, View_EditTransactionCatPage_Host_0, {}, {}, []);
export { EditTransactionCatPageNgFactory as EditTransactionCatPageNgFactory };
//# sourceMappingURL=edit-transaction-cat.ngfactory.js.map