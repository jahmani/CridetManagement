import { Component, Input } from '@angular/core';
/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var /**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    Object.defineProperty(ProgressBarComponent.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (val) {
            this._progress = Math.ceil(val);
        },
        enumerable: true,
        configurable: true
    });
    return ProgressBarComponent;
}());
/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { ProgressBarComponent };
//# sourceMappingURL=progress-bar.js.map