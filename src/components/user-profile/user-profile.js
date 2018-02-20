import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var /**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        console.log('Hello UserProfileComponent Component');
    }
    UserProfileComponent.prototype.onSignout = function () {
        this.signout.emit("signOut");
    };
    UserProfileComponent.prototype.onGoogleLogin = function () {
        this.googleLogin.emit();
    };
    return UserProfileComponent;
}());
/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export { UserProfileComponent };
//# sourceMappingURL=user-profile.js.map