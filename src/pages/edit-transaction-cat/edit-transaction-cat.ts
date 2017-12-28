import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionCatigory, Extended, ExtMap } from '../../interfaces/data-models';
import { TCatigoriesFsRepositoryProvider } from '../../StoreData/index';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { TransactionCatsPage } from '../transaction-cats/transaction-cats';
import { Subscription } from 'rxjs/Subscription';
import { TitleServiceProvider } from '../../providers/title-service/title-service';

/**
 * Generated class for the EditTransactionCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-edit-transaction-cat',
  templateUrl: 'edit-transaction-cat.html',
})
export class EditTransactionCatPage {

  transactionCatId: string;
  transactionCat$: Observable<Extended<TransactionCatigory>>;
  transCatsRoot$: Observable<Extended<TransactionCatigory>>
  transCatsMap$: Observable<ExtMap<Extended<TransactionCatigory>>>

  transactionCat: Extended<TransactionCatigory>;

  subscription: Subscription

  form: FormGroup
  submitAttempt: boolean = false
  constructor(
    private fb: FormBuilder
    , private tCatsFSR: TCatigoriesFsRepositoryProvider
    , private titleService : TitleServiceProvider
    , public navCtrl: NavController, public navParams: NavParams) {


    this.transactionCatId = this.navParams.get('transactionCatId')
    this.transCatsRoot$ = this.tCatsFSR.treeRoot as Observable<Extended<TransactionCatigory>>;
    this.transCatsMap$ = this.tCatsFSR.dataMap

    this.form = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
        isDebit: ['', Validators.required],
        isCredit: ['', Validators.required],
        parentId: ['', Validators.required]
      }
    );

    if (this.transactionCatId) {
      this.transactionCat$ = this.tCatsFSR.dataMap.pipe(map((catsMap) => catsMap.get(this.transactionCatId)))
    }
    else
      this.transactionCat$ = Observable.of({ data: { name: "", isCredit: true, isDebit: true, parentId: "0" } } as Extended<TransactionCatigory>)
    this.subscription = this.transactionCat$.subscribe((extTrans) => {
      this.transactionCat = extTrans
      this.form.patchValue(this.transactionCat.data)
    })

    this.transCatsRoot$.subscribe(console.log)
  }

  get nameCtrl() {
    return this.form.get("name")
  }
  ionViewDidEnter(){
    if (this.titleService){
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("Edit Trans Catigory")
    }

  }
  ionViewWillUnload() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTransactionCatPage');
    this.form.patchValue(this.transactionCat)
  }

  dismiss(data) {
    this.navCtrl.pop();
  }
  onCancel() {
    return this.dismiss(null);
  }
  onSubmit({ value, valid }: { value: TransactionCatigory, valid: boolean }) {
    console.log(value, valid);
    this.submitAttempt = true
    if (valid)
      this.onSave(value);
    //throw "please take care , invalid form"
  }

  onSave(transCatigory: TransactionCatigory) {
    let extTransCat = { data: transCatigory } as Extended<TransactionCatigory>
    if (this.transactionCat.id) {
      extTransCat.id = this.transactionCat.id
      this.tCatsFSR.saveOld(extTransCat)
    }
    else
      this.tCatsFSR.saveNew(extTransCat);

    this.dismiss(extTransCat);
  }
}
