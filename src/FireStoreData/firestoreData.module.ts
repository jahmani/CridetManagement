import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresFsRepository } from './stores-fs-repository';
import { UsersFsRepository } from './users-fs-repository';
import { UserStoresFsRepository } from './user-stores-fs-repository';
import { ActiveStoreService } from './activeStore';
import { InvitesFsRepository } from './invites-fs-repository';
import { UserPendingStoresFsRepositoryProvider } from './user-pending-stores-fs-repository';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [
        StoresFsRepository  ,
        UserStoresFsRepository  ,
        UsersFsRepository   ,
        ActiveStoreService  ,
        InvitesFsRepository ,
        UserPendingStoresFsRepositoryProvider
    ],
})
export class FirestoreDataModule { }