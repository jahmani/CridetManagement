import { Component, ViewChild, ElementRef, forwardRef } from "@angular/core";
import { IonicPage, NavController, NavParams,ModalController } from "ionic-angular";
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from "angularfire2/storage";
import { map } from "rxjs/operators/map";
import { Observable } from "rxjs/Observable";
import { ControlValueAccessor } from "@angular/forms/src/directives/control_value_accessor";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { CropperSettings, ImageCropperComponent } from "ngx-img-cropper";

/**
 * Generated class for the ImageUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "image-upload",
  templateUrl: "image-upload.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploadComponent),
      multi: true
    }
  ]
})
export class ImageUploadComponent implements ControlValueAccessor {
  lastCropped: HTMLImageElement;
  data: any;
  cropperSettings: CropperSettings;
  @ViewChild("cropper", undefined)
  cropper: ImageCropperComponent; 
  fileSrc: any;
  writeValue(imgSrc: any): void {
    this.imgSrc = imgSrc;
    if (imgSrc) {
      let storageRef = this.afStorage.storage.refFromURL(imgSrc);
      this.ref = this.afStorage.ref(storageRef.fullPath);
    }
  }
  registerOnChange(fn: any): void {
    this.srcChangeFunction = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
  srcChangeFunction;
  uploadState: Observable<{}>;
  ref: AngularFireStorageReference;
  uploadProgress;
  task: AngularFireUploadTask;
  imgSrc;
  placeHoldereSrc = "../../assets/icon/attachImage.png";
  downloadURL;
  @ViewChild("fileInput") fileInput: ElementRef;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afStorage: AngularFireStorage,
    private modalCtrl : ModalController
  ) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.keepAspect = false;
    this.cropperSettings.compressRatio
    //this.cropper.
    this.data = {};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ImageUploadPage");
    //firebase.storage.TaskState.SUCCESS
  }
  upload(event) {
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    this.ref = this.afStorage.ref(randomId);
    this.task = this.ref.put(event.target.files[0]);
    this.task
      .downloadURL()
      .toPromise()
      .then(url => {
        this.imgSrc = url;
        this.srcChangeFunction && this.srcChangeFunction(url);
      });
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  }

  deleteImage() {
    this.ref.delete().subscribe();
    this.task = null;
    this.imgSrc = null;
    this.srcChangeFunction && this.srcChangeFunction(null);
  }
  cancelImage() {
    event.stopPropagation();
    this.task.cancel();
    this.task = null;
    this.imgSrc = null;
  }
  crop(){

    let s3 = this.data.image 
    let img = new Image()
    img.src = s3
    this.cropper.setImage(img)
  }
  setCropperImage($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function(loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  } 
   presentImageCropper($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function(loadEvent: any) {
      let modal = that.modalCtrl.create("ImageCropperPage",{imageB64String:loadEvent.target.result})
      modal.present().then(val=>{
        image.src = val;
        that.cropper.setImage(image);

      })
    };

    myReader.readAsDataURL(file);
  }
  displayImage(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      this.fileSrc = reader.result;
    };
    reader.readAsDataURL(selectedFile);
  }
  selectImage() {
    this.fileInput.nativeElement.click();
  }
  onImageSelected(event) {
    event.stopPropagation();
    this.presentImageCropper(event);
    // this.upload(event)
  }
}
