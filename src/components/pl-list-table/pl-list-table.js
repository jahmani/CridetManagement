var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
/**
 * Generated class for the PlListTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PlListTableComponent = /** @class */ (function () {
    function PlListTableComponent() {
        this.selected = [];
        this.expanded = {};
        this.plLineWantEdit = new EventEmitter();
        this.columns = [
            { prop: "shippingMark", name: "Mark", width: 75 },
            { prop: "productName", name: "Product", width: 100 },
            { name: 'ctns', width: 50 },
            { name: 'packing', width: 50 },
            { name: "qty", width: 50 },
            { name: "price", width: 50 },
            { name: 'ammount', width: 75 },
        ];
    }
    Object.defineProperty(PlListTableComponent.prototype, "lines", {
        set: function (extPlines) {
            this.flatPLLines = extPlines.map(function (extPlLine) {
                return __assign({}, (extPlLine.data), { id: extPlLine.id }, extPlLine.ext, { productName: extPlLine.ext.Product.data.name });
            });
            this.computeTotal();
        },
        enumerable: true,
        configurable: true
    });
    PlListTableComponent.prototype.computeTotal = function () {
        var ctns = 0;
        var qty = 0;
        var ammount = 0;
        var totalsLine = this.flatPLLines.reduce(function (prev, curr, i, arr) {
            prev.ctns += Number(curr.ctns) || 0;
            prev.qty += Number(curr.qty) || 0;
            prev.ammount += Number(curr.ammount) || 0;
            return prev;
        }, { ctns: 0, qty: 0, ammount: 0, productName: "Totals" });
        this.flatPLLines = this.flatPLLines.concat([totalsLine]);
    };
    PlListTableComponent.prototype.onWantEdit = function (plLineId) {
        this.plLineWantEdit.emit(plLineId);
    };
    PlListTableComponent.prototype.toggleExpandRow = function (row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    };
    PlListTableComponent.prototype.onDetailToggle = function (event) {
        console.log('Detail Toggled', event);
    };
    PlListTableComponent.prototype.onSelect = function (data) {
        console.log('Select Event data', data, this.selected);
        this.table.rowDetail.toggleExpandRow(data.selected[0]);
    };
    PlListTableComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log("ionViewDidLoad PlListTableComponent");
        /*
        this.columns.push(    {
          width: 50,
          resizeable: false,
          sortable: false,
          draggable: false,
          canAutoResize: false,
          cellTemplate: this.rowDropDownTemplate,
        })
        */
    };
    PlListTableComponent.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PlListTableComponent");
    };
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PlListTableComponent.prototype, "lines", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], PlListTableComponent.prototype, "plLineWantEdit", void 0);
    __decorate([
        ViewChild('myTable'),
        __metadata("design:type", DatatableComponent)
    ], PlListTableComponent.prototype, "table", void 0);
    __decorate([
        ViewChild('rowDropDownTemplate'),
        __metadata("design:type", TemplateRef)
    ], PlListTableComponent.prototype, "rowDropDownTemplate", void 0);
    PlListTableComponent = __decorate([
        Component({
            selector: 'pl-list-table',
            templateUrl: 'pl-list-table.html'
        }),
        __metadata("design:paramtypes", [])
    ], PlListTableComponent);
    return PlListTableComponent;
}());
export { PlListTableComponent };
//# sourceMappingURL=pl-list-table.js.map