import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresFsRepository } from './stores-fs-repository';
import { UsersFsRepository } from './users-fs-repository';
import { UserStoresFsRepository } from './user-stores-fs-repository';
import { ActiveStoreService } from './activeStore';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [
        StoresFsRepository
        , UserStoresFsRepository
        , UsersFsRepository,
        ActiveStoreService
    ],
})
export class FirestoreDataModule { }