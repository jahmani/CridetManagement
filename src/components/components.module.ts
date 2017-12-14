import { NgModule } from '@angular/core';
import { EditTransactionFormComponent } from './edit-transaction-form/edit-transaction-form';
import { EditAccountComponent } from './edit-account/edit-account';
import { UserProfileComponent } from './user-profile/user-profile';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TreeViewRowComponent } from './tree-view-row/tree-view-row';
import { TreeViewListComponent } from './tree-view-list/tree-view-list';
import { TransCatPickerComponent } from './trans-cat-picker/trans-cat-picker';
import { TransCatsPickerListComponent } from './trans-cats-picker-list/trans-cats-picker-list';
import { StoreUsersComponent } from './store-users/store-users';


const sharedComponents=[
	
	EditTransactionFormComponent
	,EditAccountComponent
	,UserProfileComponent,
    TreeViewRowComponent,
	TreeViewListComponent,
	TransCatPickerComponent,
	TransCatsPickerListComponent
]
@NgModule({
	declarations: [...sharedComponents,
    StoreUsersComponent],
	imports: [    CommonModule,
		ReactiveFormsModule,
		IonicModule
	],
	entryComponents: [TransCatsPickerListComponent],
	exports: [...sharedComponents,
    StoreUsersComponent]
})
export class ComponentsModule {}
