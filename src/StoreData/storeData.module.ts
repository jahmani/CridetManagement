import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsFsRepository } from "./accounts-fb-repository";
import { TransactionsFsRepository } from "./transactions-fs-repository";
import { TCatigoriesFsRepositoryProvider } from "./t-catigories-fs-repository";
import { StoreUsersFsRepository } from "./store-users-fb-repository";
import { AccountsBalanceFBRepository } from "./account-balance-fb-repository";
import { ImagesFsRepository } from "./images-fs-repository";
import { ProductsFsRepository } from "./products-fs-repository";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    AccountsFsRepository,
    AccountsBalanceFBRepository,
    TransactionsFsRepository,
    ImagesFsRepository,
    TCatigoriesFsRepositoryProvider,
    StoreUsersFsRepository,
    ProductsFsRepository
    
    
  ]
})
export class StoreDataModule {}
