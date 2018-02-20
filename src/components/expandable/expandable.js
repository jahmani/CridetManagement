import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    return ExpandableComponent;
}());
export { ExpandableComponent };
//# sourceMappingURL=expandable.js.map