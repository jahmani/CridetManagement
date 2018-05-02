import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsFsRepository } from '../../StoreData/products-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { Product, Extended } from '../../interfaces/data-models';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { Subscription } from 'rxjs/Subscription';
import { first } from 'rxjs/operators/first';
import { take } from 'rxjs/operators/take';

/**
 * Generated class for the EditProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {

  submitAttempt: boolean;
  product: Extended<Product>;
  product$: Observable<Extended<Product>>;
  form: FormGroup;
  productId: string;
  constructor(
    private fb: FormBuilder
    , @Optional() private productsFsRep: ProductsFsRepository
    , private titleService: TitleServiceProvider
    , public navCtrl: NavController, public navParams: NavParams) {


    this.productId = this.navParams.get('productId')
    if (!this.productsFsRep)
      this.productsFsRep = this.navParams.get("productsRep")
    this.form = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
        code: '',
        style: '',
        notice: '',
        thumbUrl: ''
      }

    );

    if (this.productId) {
      this.product$ = this.productsFsRep.get(this.productId)
    }
    else {
      const newProduct: Product = {} as Product
      this.product$ = Observable.of({ data: newProduct, id: null } as Extended<Product>)

    }
    this.product$.pipe(take(1)).subscribe((extProduct) => {
      this.product = extProduct
      this.form.patchValue(this.product.data)
    })


  }

  get nameCtrl() {
    return this.form.get("name")
  }
  ionViewDidEnter() {
    if (this.titleService) {
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("Edit Product")
    }

  }

  ionViewDidLoad() {
    //// this.form.patchValue(this.product)
  }

  dismiss(data) {
    this.navCtrl.pop();
  }
  onCancel() {
    return this.dismiss(null);
  }
  onSubmit({ value, valid }: { value: Product, valid: boolean }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.onSave(value);
    //throw "please take care , invalid form"
  }

  onSave(product: Product) {
    let extProduct = { data: product } as Extended<Product>
    if (this.product.id) {
      extProduct.id = this.product.id
      this.productsFsRep.saveOld(extProduct)
    }
    else
      this.productsFsRep.saveNew(extProduct);

    this.dismiss(extProduct);
  }

}
