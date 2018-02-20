import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Extended, TransactionCatigory } from '../../interfaces/data-models';
/**
 * Generated class for the TreeViewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var /**
 * Generated class for the TreeViewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
TreeViewListComponent = /** @class */ (function () {
    function TreeViewListComponent() {
        console.log('Hello TreeViewListComponent Component');
        console.log(this.nodes);
    }
    TreeViewListComponent.prototype.onNodeClicked = function (node) {
        this.nodeSelected.emit(node);
    };
    TreeViewListComponent.prototype.onNodeEditClicked = function (node) {
        this.nodeEditClicked.emit(node);
    };
    return TreeViewListComponent;
}());
/**
 * Generated class for the TreeViewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { TreeViewListComponent };
//# sourceMappingURL=tree-view-list.js.map