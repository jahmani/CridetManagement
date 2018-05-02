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
import { ImageComponent } from "./image/image";
import { ImageCropperModule } from "ngx-img-cropper";
import { ImageSelectComponent } from './image-select/image-select';
import { AccountPickerComponent } from './account-picker/account-picker';
import { PickerAccountsListComponent } from './picker-accounts-list/picker-accounts-list';
import { ProductsPickerComponent } from './products-picker/products-picker';
import { PlLineListComponent } from './pl-line-list/pl-line-list';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PlListTableComponent } from './pl-list-table/pl-list-table';
import { PlLineRowComponent } from './pl-line-row/pl-line-row';
import { PackingListComponent } from './packing-list/packing-list';

const sharedComponents = [
  EditTransactionFormComponent,
  EditAccountComponent,
  UserProfileComponent,
  TreeViewRowComponent,
  TreeViewListComponent,
  TransCatPickerComponent,
  TransCatsPickerListComponent
];

@NgModule({
  declarations: [
    ...sharedComponents,
    StoreUsersComponent,
    ExpandableComponent,
    ImageComponent,
    ImageSelectComponent,
    AccountPickerComponent,
    PickerAccountsListComponent,
    ProductsPickerComponent,
    PlLineListComponent,
    PlListTableComponent,
    PlLineRowComponent,
    PackingListComponent
  ],

  imports: [CommonModule, ReactiveFormsModule, IonicModule, ImageCropperModule,NgxDatatableModule],
  entryComponents: [TransCatsPickerListComponent],
  exports: [
    ...sharedComponents,
    StoreUsersComponent,
    ExpandableComponent,
    ImageComponent,
    ImageSelectComponent,
    AccountPickerComponent,
    PickerAccountsListComponent,
    ProductsPickerComponent,
    PlLineListComponent,
    PlListTableComponent,
    PlLineRowComponent,
    PackingListComponent
  ],

  
  providers: [DatePipe]
})
export class ComponentsModule {}
