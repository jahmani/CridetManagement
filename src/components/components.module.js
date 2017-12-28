var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { EditTransactionFormComponent } from './edit-transaction-form/edit-transaction-form';
import { EditAccountComponent } from './edit-account/edit-account';
import { UserProfileComponent } from './user-profile/user-profile';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TreeViewRowComponent } from './tree-view-row/tree-view-row';
import { TreeViewListComponent } from './tree-view-list/tree-view-list';
import { TransCatPickerComponent } from './trans-cat-picker/trans-cat-picker';
import { TransCatsPickerListComponent } from './trans-cats-picker-list/trans-cats-picker-list';
import { StoreUsersComponent } from './store-users/store-users';
var sharedComponents = [
    EditTransactionFormComponent,
    EditAccountComponent,
    UserProfileComponent,
    TreeViewRowComponent,
    TreeViewListComponent,
    TransCatPickerComponent,
    TransCatsPickerListComponent
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: sharedComponents.concat([StoreUsersComponent]),
            imports: [CommonModule,
                ReactiveFormsModule,
                IonicModule
            ],
            entryComponents: [TransCatsPickerListComponent],
            exports: sharedComponents.concat([StoreUsersComponent]),
            providers: [DatePipe]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map