import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order, Extended, PLLine } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersFsRepository } from '../../StoreData/orders-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { take } from 'rxjs/operators/take';
import { PLLinesFsRepository } from '../../StoreData/orderPLLines-fs-repository';
import { EditPlLinePage } from '../edit-pl-line/edit-pl-line';

/**
 * Generated class for the EditOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-order',
  templateUrl: 'edit-order.html',
})
export class EditOrderPage {

  submitAttempt: boolean;
  order: Extended<Order>;
  order$: Observable<Extended<Order>>;
  orderPlLines$ : Observable<Extended<PLLine>[]>
  form: FormGroup;
  orderId: string;
  constructor(
    private fb: FormBuilder
    , private ordersFsRep: OrdersFsRepository
    , private titleService : TitleServiceProvider
    , private pLLinesFsRepository:PLLinesFsRepository
    , public navCtrl: NavController, public navParams: NavParams) {


    this.orderId = this.navParams.get('orderId')

    this.form = this.fb.group(
      {
        date :'',
        deliveryDate:'',
        notice:'',
        imageUrl:'',
        accountId: '',
        ammount : '',
        cbm:''
      }
    );

    if (this.orderId) {
      this.order$ = this.ordersFsRep.get(this.orderId)
      this.orderPlLines$ = this.pLLinesFsRepository.forOrder(this.orderId)
    }
    else{
      const newOrder : Order = {} as Order
      this.order$ = Observable.of({ data: newOrder, id:null } as Extended<Order>)

    }
    this.order$.pipe(take(1)).subscribe((extOrder) => {
      this.order = extOrder
      this.form.patchValue(this.order.data)
    })
  

  }
  presentEditPlLine(plLineId){
    this.navCtrl.push("EditPlLinePage",{plLineId})
  }
  ionViewDidEnter(){
    if (this.titleService){
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("Edit Order")
    }

  }

  ionViewDidLoad() {
    //// this.form.patchValue(this.order)
  }

  dismiss(data) {
    this.navCtrl.pop();
  }
  onCancel() {
    return this.dismiss(null);
  }
  onSubmit({ value, valid }: { value: Order, valid: boolean }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.onSave(value);
    //throw "please take care , invalid form"
  }

  onSave(order: Order) {
    let extOrder = { data: order } as Extended<Order>
    if (this.order.id) {
      extOrder.id = this.order.id
      this.ordersFsRep.saveOld(extOrder)
    }
    else
      this.ordersFsRep.saveNew(extOrder);

    this.dismiss(extOrder);
  }
  presentNewPLLineModal() {
    return this.presentEditPLLineModal();
  }

  presentEditPLLineModal(plLineId?: string) {
    this.navCtrl.push("EditPlLinePage", { plLineId ,orderId:this.orderId});
  }
}
