import { Component, Optional } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ModalController,
  NavOptions,
  ViewController
} from "ionic-angular";
import { ProductsFsRepository } from "../../StoreData/products-fs-repository";
import { Observable } from "rxjs/Observable";
import { Extended, Product } from "../../interfaces/data-models";
import { TitleServiceProvider } from "../../providers/title-service/title-service";

/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-products-list",
  templateUrl: "products-list.html"
})
export class ProductsListPage {
  canSelect: any;
  products: Observable<Extended<Product>[]>;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private alertController: AlertController,
    private modalController: ModalController,
    @Optional() private productsRep: ProductsFsRepository,
    @Optional() private titleService: TitleServiceProvider
  ) {
    this.canSelect = this.navParams.get("canSelect")
    const productsFsRepository = this.navParams.get("productsFsRepository")
    if(productsFsRepository)
    this.productsRep = productsFsRepository
    this.products = this.productsRep.List();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductsPage");
  }
  delete(extProduct: Extended<Product>) {
    let modal = this.alertController.create({
      message: `Are you sure deleting product: ${extProduct.data.name}`,
      title: `Deleteing Product`,
      buttons: [
        {
          text: "Delete",
          handler: () => {
            this.productsRep.remove(extProduct);
          }
        },
        { text: "cancel", cssClass: "danger" }
      ]
    });
    modal
      .present()
      .then(val => {
        console.log("val", val);
      })
      .catch(console.log);
  }
  presentEditProductModal(product?: Extended<Product>) {
    if(product&&this.canSelect)
    this.viewCtrl.dismiss(product)
    else
    this.navCtrl.push("EditProductPage",
     { productId:product && product.id,
      productsRep : this.productsRep });
  }
  showProductImage(productSnapshot: Extended<Product>) {
    if (productSnapshot.ext.imageFile) {
      let modal = this.modalController.create("PhotoDetailPage", {
        canDelete: false,
        canSelect: false,
        images: [productSnapshot.data.thumbUrl]
      });
      modal.present();
    }
  }

  onDelete(productSnapshot: Extended<Product>) {
    const alert = this.alertController.create({
      message: `Are u sure. deleting ${productSnapshot.data.name} Product`,
      title: "Deleting Product",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.productsRep.remove(productSnapshot);
          }
        },
        {
          text: "Cancel"
        }
      ]
    });
    alert.present();
  }

  presentNewProductModal() {
    let date = new Date().toISOString();
    //    date = UTCToLocal(date)

    return this.presentEditProductModal();
  }
}
