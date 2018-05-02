/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/@swimlane/ngx-datatable/release/components/datatable.component.ngfactory";
import * as i2 from "@swimlane/ngx-datatable/release/components/datatable.component";
import * as i3 from "@swimlane/ngx-datatable/release/services/scrollbar-helper.service";
import * as i4 from "@swimlane/ngx-datatable/release/services/dimensions-helper.service";
import * as i5 from "@angular/common";
import * as i6 from "./pl-list-table";
var styles_PlListTableComponent = [];
var RenderType_PlListTableComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_PlListTableComponent, data: {} });
export { RenderType_PlListTableComponent as RenderType_PlListTableComponent };
function View_PlListTableComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(2, 0, null, null, 6, "ngx-datatable", [["class", "ngx-datatable"]], [[2, "fixed-header", null], [2, "fixed-row", null], [2, "scroll-vertical", null], [2, "scroll-horz", null], [2, "selectable", null], [2, "checkbox-selection", null], [2, "cell-selection", null], [2, "single-selection", null], [2, "multi-selection", null], [2, "multi-click-selection", null]], [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3).onWindowResize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_DatatableComponent_0, i1.RenderType_DatatableComponent)), i0.ɵdid(3, 5619712, null, 4, i2.DatatableComponent, [[1, i3.ScrollbarHelper], [1, i4.DimensionsHelper], i0.ChangeDetectorRef, i0.ElementRef, i0.KeyValueDiffers], { rows: [0, "rows"], columns: [1, "columns"], columnMode: [2, "columnMode"] }, null), i0.ɵqud(603979776, 1, { columnTemplates: 1 }), i0.ɵqud(335544320, 2, { rowDetail: 0 }), i0.ɵqud(335544320, 3, { groupHeader: 0 }), i0.ɵqud(335544320, 4, { footer: 0 }), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(9, null, ["\n\n", "\n"])), i0.ɵpid(0, i5.JsonPipe, [])], function (_ck, _v) { var _co = _v.component; var currVal_10 = _v.context.ngIf; var currVal_11 = _co.columns; var currVal_12 = "force"; _ck(_v, 3, 0, currVal_10, currVal_11, currVal_12); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3).isFixedHeader; var currVal_1 = i0.ɵnov(_v, 3).isFixedRow; var currVal_2 = i0.ɵnov(_v, 3).isVertScroll; var currVal_3 = i0.ɵnov(_v, 3).isHorScroll; var currVal_4 = i0.ɵnov(_v, 3).isSelectable; var currVal_5 = i0.ɵnov(_v, 3).isCheckboxSelection; var currVal_6 = i0.ɵnov(_v, 3).isCellSelection; var currVal_7 = i0.ɵnov(_v, 3).isSingleSelection; var currVal_8 = i0.ɵnov(_v, 3).isMultiSelection; var currVal_9 = i0.ɵnov(_v, 3).isMultiClickSelection; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_13 = i0.ɵunv(_v, 9, 0, i0.ɵnov(_v, 10).transform(_v.context.ngIf)); _ck(_v, 9, 0, currVal_13); }); }
export function View_PlListTableComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_PlListTableComponent_1)), i0.ɵdid(2, 16384, null, 0, i5.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵpid(131072, i5.AsyncPipe, [i0.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 2, 0, i0.ɵnov(_v, 3).transform(_co.flatPLLines)); _ck(_v, 2, 0, currVal_0); }, null); }
export function View_PlListTableComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "pl-list-table", [], null, null, null, View_PlListTableComponent_0, RenderType_PlListTableComponent)), i0.ɵdid(1, 49152, null, 0, i6.PlListTableComponent, [], null, null)], null, null); }
var PlListTableComponentNgFactory = i0.ɵccf("pl-list-table", i6.PlListTableComponent, View_PlListTableComponent_Host_0, { lines: "lines" }, {}, []);
export { PlListTableComponentNgFactory as PlListTableComponentNgFactory };
//# sourceMappingURL=pl-list-table.ngfactory.js.map