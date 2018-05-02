import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Extended, AccountInfo } from "../../interfaces/data-models";
import { ModalController, NavController } from "ionic-angular";
import { AccountsFsRepository } from "../../StoreData/accounts-fb-repository";

/**
 * Generated class for the AccountPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "account-picker",
  templateUrl: "account-picker.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccountPickerComponent),
      multi: true
    }
  ]
})

export class AccountPickerComponent {
  srcChangeFunction: any;
  accountId: string;
  account: Extended<AccountInfo>;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl : NavController,
    private accountsFsRepository: AccountsFsRepository
  ) {
    console.log("Hello AccountInfoSelectComponent Component");
  }
  writeValue(accountId: string): void {
    this.accountId= accountId;
    if (this.accountId) {
      this.accountsFsRepository.getOnce(this.accountId).then(extAccountInfo => {
        this.account = extAccountInfo;
      });
    }
  }
  removeAccountInfo($event) {
    this.account = null;
    this.accountId = null;
    this.srcChangeFunction(this.accountId);
  }
  selectAccountInfo($event) {
    let modal = this.modalCtrl.create("AccountsListPage", {
      accountsFsRepository: this.accountsFsRepository,
      canSelect: true,
      canGoBack: true
    });

    modal.present();
    modal.onDidDismiss((extAccountInfo: Extended<AccountInfo>) => {
      if (extAccountInfo) {
        this.account = extAccountInfo;
        this.accountId = extAccountInfo.id;
        this.srcChangeFunction(extAccountInfo.id);
      }
    });
  }
  registerOnChange(fn: any): void {
    this.srcChangeFunction = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
