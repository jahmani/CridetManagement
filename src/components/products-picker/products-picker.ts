import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Extended, Product } from '../../interfaces/data-models';
import { ModalController, NavController } from 'ionic-angular';
import { ProductsFsRepository } from '../../StoreData/products-fs-repository';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators/take';

/**
 * Generated class for the ProductsPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'products-picker',
  templateUrl: 'products-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductsPickerComponent),
      multi: true
    }
  ]
})
export class ProductsPickerComponent {
  srcChangeFunction: any;
  productId: string;
  product: Extended<Product>;

  constructor(
    private modalCtrl: ModalController,
    private productsFsRepository: ProductsFsRepository
  ) {
    console.log("Hello ProductSelectComponent Component");
  }
  writeValue(productId: string): void {
    this.productId = productId
    if (this.productId) {
      this.productsFsRepository.getOnce(this.productId).then(extProduct => {
        this.product = extProduct;
      });
    }
  }
  removeProduct($event) {
    this.product = null;
    this.productId = null;
    this.srcChangeFunction(this.productId);
  }
  selectProduct($event) {
    let modal = this.modalCtrl.create("ProductsListPage", {
      productsFsRepository: this.productsFsRepository,
      canSelect: true,
      canGoBack: true
    });

    modal.present();
    modal.onDidDismiss((extProduct: Extended<Product>) => {
      if (extProduct) {
        this.product = extProduct;
        this.productId = extProduct.id;
        this.srcChangeFunction(extProduct.id);
      }
    });
  }
  registerOnChange(fn: any): void {
    this.srcChangeFunction = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
