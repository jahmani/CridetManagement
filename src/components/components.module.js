import { NgModule } from "@angular/core";
import { EditTransactionFormComponent } from "./edit-transaction-form/edit-transaction-form";
import { EditAccountComponent } from "./edit-account/edit-account";
import { UserProfileComponent } from "./user-profile/user-profile";
import { CommonModule, DatePipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "ionic-angular";
import { TreeViewRowComponent } from "./tree-view-row/tree-view-row";
import { TreeViewListComponent } from "./tree-view-list/tree-view-list";
import { TransCatPickerComponent } from "./trans-cat-picker/trans-cat-picker";
import { TransCatsPickerListComponent } from "./trans-cats-picker-list/trans-cats-picker-list";
import { StoreUsersComponent } from "./store-users/store-users";
import { ExpandableComponent } from "./expandable/expandable";
import { ProgressBarComponent } from "./progress-bar/progress-bar";
import { ImageUploadComponent } from "./image-upload/image-upload";
import { ImageComponent } from "./image/image";
import { ImageCropperModule } from "ngx-img-cropper";
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
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map