import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import Cropper from "cropperjs";
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from "angularfire2/storage";
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the ImageCropperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-image-cropper",
  templateUrl: "image-cropper.html"
})
export class ImageCropperPage {
  uploadProgress: Observable<number>;
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  @ViewChild("imageSrc") input: ElementRef;
  @ViewChild("fileInput") fileInput: ElementRef;

  imageB64: any;
  imageB64Tagged: any = "../../assets/img/10.jpg";
  cropper: Cropper;
  loader: any = {
    previousUrl: null,
    loaded: false,
    name: "",
    type: "",
    url: null,
    size: 0
  };
  editor = { cropping: false, rotating: false };
  private extractExt(fileName: string) {
    const dotIndex = fileName.lastIndexOf(".");
    const ext = fileName.substring(dotIndex);
    return ext;
  }
  constructor(
    public viewCtrl: ViewController,
    private afStorage: AngularFireStorage,
    public navParams: NavParams
  ) {
    this.imageB64 = this.navParams.get("imageB64String");
    if (this.imageB64)
      this.imageB64Tagged = "data:image/jpeg;base64," + this.imageB64;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ImageCropperPage");
  }
  ionViewWillUnload(){
   this.clear()
  }

  imageLoaded() {
    console.log("starting Cropper... ");
    if (!this.cropper)
      this.cropper = new Cropper(this.input.nativeElement, {
        //aspectRatio: 1 / 1,
        autoCrop: false,
        dragMode: "move",
        viewMode: 2,
        modal: true,
        guides: true,
        highlight: false,
        background: true,
        autoCropArea: 0.8,
        responsive: true,
        crop: (e: Cropper.CropperCustomEvent) => {
          //  if (!this.editor.cropping) this.editor.cropping = true;
        }
      });
  }

  imageRotate() {
    this.cropper.rotate(90);
    this.editor.rotating = true;
  }
  selectImage() {
    this.fileInput.nativeElement.click();
  }
  cancel() {
    this.cropper.reset();
    this.cropper.clear();
    this.editor.cropping = false;
    this.editor.rotating = false;
  }
  clear() {
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = null;
      this.editor.cropping = false;
    }
  }
  startCrop() {
    this.cropper.crop();
    this.editor.cropping = true;
  }

  finish() {
    const cropper = this.cropper;
    if (this.editor.cropping || this.editor.rotating) {
      this.editor.cropping = false;
      this.editor.rotating = false;
      let croppedImgB64String: string = this.cropper
        .getCroppedCanvas(
          this.loader.type == "image/png"
            ? {}
            : {
                fillColor: "#fff"
              }
        )
        .toDataURL(this.loader.type, 100 / 100); // 90 / 100 = photo quality
      //this.imageB64Tagged = croppedImgB64Strming
      this.loader.previousUrl = this.loader.url;
      this.loader.url = croppedImgB64String;
      this.cropper.replace(croppedImgB64String);
    }
  }
  onImageSelected(event) {
    event.stopPropagation();
    this.setCropperImage(event);
  }
  setCropperImage($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function(loadEvent: any) {
       that.loader = {
        loaded: true,
        name: file.name,
        type: file.type,
        size: file.size,
        url: myReader.result
      };
      that.cropper.replace(loadEvent.target.result);
    };

    myReader.readAsDataURL(file);
  }
  upload() {
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    this.ref = this.afStorage.ref(randomId + this.extractExt(this.loader.name));
    this.input.nativeElement.src;
    this.task = this.ref.putString(this.input.nativeElement.src, "data_url");
    this.uploadProgress = this.task.percentageChanges();
    /*
    this.downloadURL = this.task.downloadURL();
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    */
  }
}
