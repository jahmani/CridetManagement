import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitleServiceProvider } from '../../providers/title-service/title-service';
import { StoresFsRepository } from '../../FireStoreData/stores-fs-repository';
import { StoreDoc, Extended, StoreInfo } from '../../interfaces/data-models';
import { ActiveStoreService } from '../../FireStoreData/activeStore';

/**
 * Generated class for the EditStoreInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-store-info',
  templateUrl: 'edit-store-info.html',
})
export class EditStoreInfoPage {

  form: FormGroup
  submitAttempt: boolean = false
  storeDoc: Extended<StoreDoc>
  storeId: string

  constructor(
    private fb: FormBuilder
    , private titleService: TitleServiceProvider
    , private storesFsRepository: StoresFsRepository
    , private activeStoreService: ActiveStoreService
    , public navCtrl: NavController, public navParams: NavParams) {
    this.form = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        currency: ['', Validators.compose([Validators.required])],
      }
    );

    this.storeId = this.navParams.get('storeId')
    if (!this.storeId) {
      this.storeId = this.activeStoreService.activeStoreKey
    }

  }

  get nameCtrl() {
    return this.form.get("name")
  }
  get currencyCtrl(){
    return this.form.get("currency")
  }

  ionViewDidLoad() {
    if (this.titleService) {
      this.titleService.setNav(this.navCtrl)
      this.titleService.setTitle("Edit Store Info")
    }

    this.storesFsRepository.getOnce(this.storeId).then(extStoreDoc => {
      this.form.patchValue(extStoreDoc.data.storeInfo)
      this.storeDoc = extStoreDoc
    })
    console.log('ionViewDidLoad EditStoreInfoPage');
  }



  onSubmit({ value, valid }: { value: StoreInfo, valid: boolean }) {
    if (valid) {
      const updatedStoreDoc = {...this.storeDoc,data:{...this.storeDoc.data,storeInfo:value}}
      return this.storesFsRepository.saveOld(updatedStoreDoc)
    }
  }
  onCancel() {
    this.navCtrl.pop()
  }
}
