var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Optional } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController } from "ionic-angular";
import { ProductsFsRepository } from "../../StoreData/products-fs-repository";
import { TitleServiceProvider } from "../../providers/title-service/title-service";
/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsListPage = /** @class */ (function () {
    function ProductsListPage(navCtrl, viewCtrl, navParams, alertController, modalController, productsRep, titleService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.modalController = modalController;
        this.productsRep = productsRep;
        this.titleService = titleService;
        this.canSelect = this.navParams.get("canSelect");
        var productsFsRepository = this.navParams.get("productsFsRepository");
        if (productsFsRepository)
            this.productsRep = productsFsRepository;
        this.products = this.productsRep.List();
    }
    ProductsListPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductsPage");
    };
    ProductsListPage.prototype.delete = function (extProduct) {
        var _this = this;
        var modal = this.alertController.create({
            message: "Are you sure deleting product: " + extProduct.data.name,
            title: "Deleteing Product",
            buttons: [
                {
                    text: "Delete",
                    handler: function () {
                        _this.productsRep.remove(extProduct);
                    }
                },
                { text: "cancel", cssClass: "danger" }
            ]
        });
        modal
            .present()
            .then(function (val) {
            console.log("val", val);
        })
            .catch(console.log);
    };
    ProductsListPage.prototype.presentEditProductModal = function (product) {
        if (product && this.canSelect)
            this.viewCtrl.dismiss(product);
        else
            this.navCtrl.push("EditProductPage", { productId: product && product.id,
                productsRep: this.productsRep });
    };
    ProductsListPage.prototype.showProductImage = function (productSnapshot) {
        if (productSnapshot.ext.imageFile) {
            var modal = this.modalController.create("PhotoDetailPage", {
                canDelete: false,
                canSelect: false,
                images: [productSnapshot.data.thumbUrl]
            });
            modal.present();
        }
    };
    ProductsListPage.prototype.onDelete = function (productSnapshot) {
        var _this = this;
        var alert = this.alertController.create({
            message: "Are u sure. deleting " + productSnapshot.data.name + " Product",
            title: "Deleting Product",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        _this.productsRep.remove(productSnapshot);
                    }
                },
                {
                    text: "Cancel"
                }
            ]
        });
        alert.present();
    };
    ProductsListPage.prototype.presentNewProductModal = function () {
        var date = new Date().toISOString();
        //    date = UTCToLocal(date)
        return this.presentEditProductModal();
    };
    ProductsListPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-products-list",
            templateUrl: "products-list.html"
        }),
        __param(5, Optional()),
        __param(6, Optional()),
        __metadata("design:paramtypes", [NavController,
            ViewController,
            NavParams,
            AlertController,
            ModalController,
            ProductsFsRepository,
            TitleServiceProvider])
    ], ProductsListPage);
    return ProductsListPage;
}());
export { ProductsListPage };
//# sourceMappingURL=products-list.js.map