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
 * Generated class for the TreeViewRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TreeViewRowComponent = (function () {
    function TreeViewRowComponent() {
        this.nodeSelected = new EventEmitter();
        this.nodeEditClicked = new EventEmitter();
        console.log('Hello TreeViewRowComponent Component');
    }
    TreeViewRowComponent.prototype.hasSons = function () {
        return this.node.ext.$sons && this.node.ext.$sons.length > 0;
    };
    TreeViewRowComponent.prototype.toggleExpand = function () {
        this.hasSons && (this.node.ext.$isExpanded = !this.node.ext.$isExpanded);
    };
    TreeViewRowComponent.prototype.getIconName = function () {
        var iName;
        if (this.hasSons()) {
            iName = this.node.ext.$isExpanded ? "arrow-dropdown-circle" : "arrow-dropright-circle";
        }
        else
            iName = "radio-button-off";
        return iName;
    };
    TreeViewRowComponent.prototype.onNodeClicked = function (node) {
        this.nodeSelected.emit(node);
    };
    TreeViewRowComponent.prototype.onNodeEditClicked = function (node) {
        this.nodeEditClicked.emit(node);
    };
    return TreeViewRowComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeViewRowComponent.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TreeViewRowComponent.prototype, "depth", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeViewRowComponent.prototype, "nodeSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TreeViewRowComponent.prototype, "nodeEditClicked", void 0);
TreeViewRowComponent = __decorate([
    Component({
        selector: 'tree-view-row',
        templateUrl: 'tree-view-row.html'
    }),
    __metadata("design:paramtypes", [])
], TreeViewRowComponent);
export { TreeViewRowComponent };
//# sourceMappingURL=tree-view-row.js.map