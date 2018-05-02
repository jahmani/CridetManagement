import { Component, Optional } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { ModalController } from "ionic-angular";
import { ImagesFsRepository } from "../../StoreData/images-fs-repository";
import { Observable } from "rxjs/Observable";
import { ImageFile, Extended } from "../../interfaces/data-models";
import { map } from "rxjs/operators/map";
import { ImageCropperPage } from "../image-cropper/image-cropper";
import { ImageMeta } from "../../providers/image-service/image-service";
//import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-image-gallery",
  templateUrl: "image-gallery.html"
})
export class ImageGalleryPage {
  timer: number;
  preventSimpleClick: boolean;
  images: { url: string }[];
  storeImages: Observable<Extended<ImageFile>[]>;
  canSelect: boolean = false;
  canGoBack: boolean = false;
  galleryType = "slides";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
    @Optional() private imagesFsRepository: ImagesFsRepository
  ) {
    this.canSelect = navParams.get("canSelect");
    this.canGoBack = navParams.get("canGoBack");

    if (!imagesFsRepository) {
      this.imagesFsRepository = navParams.get("imagesFsRepository");
    }
    this.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
      return { url: `../../assets/img/${num}.jpg` };
    });
    this.storeImages = this.imagesFsRepository.List();
    //.pipe(map((extImages=>{
    //  return extImages.map(extImage=>extImage.data)
    //})))
  }

  openPhoto(index, images) {
    let modal = this.modalCtrl.create("PhotoDetailPage", {
      photo_index: index,
      canSelect: this.canSelect,
      images,
      imagesFsRepository: this.imagesFsRepository
    });
    modal.present();
    modal.onDidDismiss((extImageFile: Extended<ImageFile>) => {
      this.selectPhoto(extImageFile);
    });
  }
  
  selectPhoto(image: Extended<ImageFile>) {
    if (image) this.viewCtrl.dismiss(image);
  }
  onClick(index, images): void{
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;

    this.timer = setTimeout(() => {
      if(!this.preventSimpleClick){
        //whatever you want with simple click go here
        this.openPhoto(index,images)
        console.log("simple click");
      }
    }, delay);

  }

  onDoubleClick(image): void{
    this.preventSimpleClick = true;
    clearTimeout(this.timer);
    //whatever you want with double click go here
    this.selectPhoto(image)
    console.log("double click");
  }
  close() {
    this.viewCtrl.dismiss();
  }
  AddNewImage() {
    //this.navCtrl.p
    let newImageModal = this.modalCtrl.create("ImageCropperPage");
    newImageModal.present();
    newImageModal.onDidDismiss(res => {
      console.log(res);
      const imgData: ImageMeta = res.imageData;
      this.imagesFsRepository.saveNewImage(imgData);
    });
  }
  /*
 presentImage(index){
  let modal = this.modalCtrl.create(GalleryModal, {
    photos: this.images,
    initialSlide: index
  });
  modal.present();
 }
 */
  ionViewDidLoad() {
    console.log("ionViewDidLoad ImageGalleryPage");
  }
}
