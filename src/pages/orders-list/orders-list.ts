import { Component, Optional } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { OrdersFsRepository } from '../../StoreData/orders-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { Observable } from 'rxjs/Observable';
import { Extended, Order } from '../../interfaces/data-models';

/**
 * Generated class for the OrdersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-orders-list',
  templateUrl: 'orders-list.html',
})
export class OrdersListPage {
  orders: Observable<Extended<Order>[]>;

  constructor(
    public navCtrl: NavController,
    private ordersRep: OrdersFsRepository,
    public navParams: NavParams,
    private alertController: AlertController,
    private modalController: ModalController,
    @Optional() private titleService: TitleServiceProvider
  ) {
    this.orders = this.ordersRep.FormatedList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersListPage');
  }
  delete(extOrder: Extended<Order>) {
    let modal = this.alertController.create({
      message: `Are you sure deleting order: `,
      title: `Deleteing Order`,
      buttons: [
        {
          text: "Delete",
          handler: () => {
            this.ordersRep.remove(extOrder);
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
  presentEditOrderModal(orderId?: string) {
    this.navCtrl.push("EditOrderPage", { orderId });
  }
  showOrderImage(orderSnapshot: Extended<Order>) {
    if (orderSnapshot.ext.imageFile) {
      let modal = this.modalController.create("PhotoDetailPage", {
        canDelete: false,
        canSelect: false,
        images: [orderSnapshot.data.imageUrl]
      });
      modal.present();
    }
  }

  onDelete(orderSnapshot: Extended<Order>) {
    const alert = this.alertController.create({
      message: `Are u sure. deleting ${orderSnapshot.data.accountId} Order`,
      title: "Deleting Order",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.ordersRep.remove(orderSnapshot);
          }
        },
        {
          text: "Cancel"
        }
      ]
    });
    alert.present();
  }

  presentNewOrderModal() {
    let date = new Date().toISOString();
    //    date = UTCToLocal(date)

    return this.presentEditOrderModal();
  }
}
