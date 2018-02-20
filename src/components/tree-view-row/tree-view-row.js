import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode, Extended, TransactionCatigory } from '../../interfaces/data-models';
/**
 * Generated class for the TreeViewRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var /**
 * Generated class for the TreeViewRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
TreeViewRowComponent = /** @class */ (function () {
    function TreeViewRowComponent() {
        console.log('Hello TreeViewRowComponent Component');
    }
    TreeViewRowComponent.prototype.isSelected = function () {
        return this.selectedId && this.node.id == this.selectedId;
    };
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
/**
 * Generated class for the TreeViewRowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { TreeViewRowComponent };
//# sourceMappingURL=tree-view-row.js.map