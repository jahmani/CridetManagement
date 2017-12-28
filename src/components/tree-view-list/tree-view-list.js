var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the TreeViewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TreeViewListComponent = /** @class */ (function () {
    function TreeViewListComponent() {
        this.nodeSelected = new EventEmitter();
        this.nodeEditClicked = new EventEmitter();
        console.log('Hello TreeViewListComponent Component');
        console.log(this.nodes);
    }
    TreeViewListComponent.prototype.onNodeClicked = function (node) {
        this.nodeSelected.emit(node);
    };
    TreeViewListComponent.prototype.onNodeEditClicked = function (node) {
        this.nodeEditClicked.emit(node);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TreeViewListComponent.prototype, "nodes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TreeViewListComponent.prototype, "depth", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TreeViewListComponent.prototype, "nodeSelected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TreeViewListComponent.prototype, "nodeEditClicked", void 0);
    TreeViewListComponent = __decorate([
        Component({
            selector: 'tree-view-list',
            templateUrl: 'tree-view-list.html'
        }),
        __metadata("design:paramtypes", [])
    ], TreeViewListComponent);
    return TreeViewListComponent;
}());
export { TreeViewListComponent };
//# sourceMappingURL=tree-view-list.js.map