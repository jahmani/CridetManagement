import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Extended, PLLine } from '../../interfaces/data-models';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { PLLinesFsRepository } from '../../StoreData/orderPLLines-fs-repository';
import { map } from 'rxjs/operators/map';

/**
 * Generated class for the PlLineListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pl-line-list',
  templateUrl: 'pl-line-list.html'
})
export class PlLineListComponent {

  @Input()  plLines :Extended<PLLine>[]
  columns = [
    { name: 'packing' },
    { name: 'ctns' },
    { name: 'productId' }
  ];
  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
  ) {
   }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PLLinesPage");
  }

  
  showPLLineImage(pLLineSnapshot: Extended<PLLine>) {
    if (pLLineSnapshot.ext.imageFile) {
      let modal = this.modalController.create("PhotoDetailPage", {
        canDelete: false,
        canSelect: false,
        images: [pLLineSnapshot.ext.Product.data.thumbUrl]
      });
      modal.present();
    }
  }


  presentNewPlLineModal() {
    let date = new Date().toISOString();
    return this.presentEditPlLineModal();
  }

  presentEditPlLineModal(pLLineId?: string) {
    this.navCtrl.push("EditPlLinePage", { pLLineId });
  }
}
