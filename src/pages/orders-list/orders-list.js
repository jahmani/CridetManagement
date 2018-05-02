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
import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { OrdersFsRepository } from '../../StoreData/orders-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
/**
 * Generated class for the OrdersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersListPage = /** @class */ (function () {
    function OrdersListPage(navCtrl, ordersRep, navParams, alertController, modalController, titleService) {
        this.navCtrl = navCtrl;
        this.ordersRep = ordersRep;
        this.navParams = navParams;
        this.alertController = alertController;
        this.modalController = modalController;
        this.titleService = titleService;
        this.orders = this.ordersRep.FormatedList;
    }
    OrdersListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersListPage');
    };
    OrdersListPage.prototype.delete = function (extOrder) {
        var _this = this;
        var modal = this.alertController.create({
            message: "Are you sure deleting order: ",
            title: "Deleteing Order",
            buttons: [
                {
                    text: "Delete",
                    handler: function () {
                        _this.ordersRep.remove(extOrder);
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
    OrdersListPage.prototype.presentEditOrderModal = function (orderId) {
        this.navCtrl.push("EditOrderPage", { orderId: orderId });
    };
    OrdersListPage.prototype.showOrderImage = function (orderSnapshot) {
        if (orderSnapshot.ext.imageFile) {
            var modal = this.modalController.create("PhotoDetailPage", {
                canDelete: false,
                canSelect: false,
                images: [orderSnapshot.data.imageUrl]
            });
            modal.present();
        }
    };
    OrdersListPage.prototype.onDelete = function (orderSnapshot) {
        var _this = this;
        var alert = this.alertController.create({
            message: "Are u sure. deleting " + orderSnapshot.data.accountId + " Order",
            title: "Deleting Order",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        _this.ordersRep.remove(orderSnapshot);
                    }
                },
                {
                    text: "Cancel"
                }
            ]
        });
        alert.present();
    };
    OrdersListPage.prototype.presentNewOrderModal = function () {
        var date = new Date().toISOString();
        //    date = UTCToLocal(date)
        return this.presentEditOrderModal();
    };
    OrdersListPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-orders-list',
            templateUrl: 'orders-list.html',
        }),
        __param(5, Optional()),
        __metadata("design:paramtypes", [NavController,
            OrdersFsRepository,
            NavParams,
            AlertController,
            ModalController,
            TitleServiceProvider])
    ], OrdersListPage);
    return OrdersListPage;
}());
export { OrdersListPage };
//# sourceMappingURL=orders-list.js.map