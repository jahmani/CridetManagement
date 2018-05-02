import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PLLine, Extended } from '../../interfaces/data-models';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PLLinesFsRepository } from '../../StoreData/orderPLLines-fs-repository';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { take } from 'rxjs/operators/take';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditPlLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-pl-line',
  templateUrl: 'edit-pl-line.html',
})
export class EditPlLinePage {

  recalculateAmmount(): void {
    const qty = this.qtyControl.value || 0
    const price = this.priceControl.value || 0
    this.ammountControl.setValue(qty*price)
  }
  recalculateQuantity(): void {
    const ctns = this.ctnsControl.value || 0
    const packing = this.packingControl.value || 0
    if(packing && ctns)
      this.qtyControl.setValue(ctns*packing)
  }
  submitAttempt: boolean;
  pLLine: Extended<PLLine>;
  pLLine$: Observable<Extended<PLLine>>;
  form: FormGroup;
  pLineId: string;
  subscribtions : Subscription[]=[]
  constructor(
    private fb: FormBuilder
    , private pLLinesFsRep: PLLinesFsRepository
    , private titleService : TitleServiceProvider
    , public navCtrl: NavController, public navParams: NavParams) {
    this.pLineId = this.navParams.get('plLineId')
    this.form = this.fb.group(
      {
        productId :['', Validators.required],
        packing:'',
        notice:'',
        shippingMark:['', Validators.required],
        qty:['', Validators.required],
        ctns:'',
        price: ['', Validators.required],
        ammount : ['', Validators.required],
        orderId:['', Validators.required]
      }
    );

    if (this.pLineId) {
      this.pLLine$ = this.pLLinesFsRep.get(this.pLineId)
    }
    else{
      const orderId = this.navParams.get("orderId")
      const newPLLine : PLLine = {} as PLLine
      newPLLine.orderId = orderId
      this.pLLine$ = Observable.of({ data: newPLLine, id:null } as Extended<PLLine>)

    }
    this.pLLine$.pipe(take(1)).subscribe((extPLLine) => {
      this.pLLine = extPLLine
      this.form.patchValue(this.pLLine.data)

    })
    this.subscribtions.push(this.qtyControl.valueChanges.subscribe(()=>this.recalculateAmmount()))
    this.subscribtions.push(this.priceControl.valueChanges.subscribe(()=>this.recalculateAmmount()))
    this.subscribtions.push(this.ctnsControl.valueChanges.subscribe(()=>this.recalculateQuantity()))
    this.subscribtions.push(this.packingControl.valueChanges.subscribe(()=>this.recalculateQuantity()))
  }
  get productIdControl(){
    return this.form.get("productId")
  }
  get qtyControl(){
    return this.form.get("qty")
  }
  get priceControl(){
    return this.form.get("price")
  }  get ctnsControl(){
    return this.form.get("ctns")
  }
  get packingControl(){
    return this.form.get("packing")
  }
  get ammountControl(){
    return this.form.get("ammount")
  }
  ionViewDidEnter(){
    if (this.titleService){
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("Edit PLLine")
    }

  }

  ionViewDidLoad() {
    //// this.form.patchValue(this.pLLine)
  }

  ionViewWillUnload(){
   this.subscribtions.forEach(sub=>sub.unsubscribe())
  }

  dismiss(data?) {
    this.navCtrl.pop();
  }

  onCancel() {
    return this.dismiss(null);
  }
  onSubmit({ value, valid }: { value: PLLine, valid: boolean }) {
    
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.onSave(value);
    //throw "please take care , invalid form"
  }
  onDelete(){
    if (this.pLineId) {
      this.pLLinesFsRep.remove(this.pLLine).then(()=>this.dismiss())
    }
  }
  onSave(pLLine: PLLine) {
    let extPLLine = { data: pLLine } as Extended<PLLine>
    if (this.pLLine.id) {
      extPLLine.id = this.pLLine.id
      this.pLLinesFsRep.saveOld(extPLLine)
    }
    else
      this.pLLinesFsRep.saveNew(extPLLine);

    this.dismiss(extPLLine);
  }

}
