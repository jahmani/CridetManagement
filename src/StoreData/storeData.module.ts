import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsFsRepository, AccountsBalanceFBRepository } from './accounts-fb-repository';
import { ActiveStoreService } from './activeStore';
import { TransactionsFsRepository } from './transactions-fs-repository';
import { TCatigoriesFsRepositoryProvider } from './t-catigories-fs-repository';
import { StoreUsersFsRepository } from './store-users-fb-repository';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [
        AccountsFsRepository
        , ActiveStoreService
        , AccountsBalanceFBRepository
        , TransactionsFsRepository
        , TCatigoriesFsRepositoryProvider,
        StoreUsersFsRepository
    ],
})
export class StoreDataModule { }