import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import * as Cropper from "cropperjs";
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from "angularfire2/storage";
import { Observable } from "rxjs/Observable";
import { ImageServiceProvider, ImageMeta } from "../../providers/image-service/image-service";
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
  private extractExt() {
    const fileName: string = this.loader.name;
    const dotIndex = fileName.lastIndexOf(".");
    const ext = fileName.substring(dotIndex);
    return ext;
  }
  constructor(
    public viewCtrl: ViewController,
    private afStorage: AngularFireStorage,
    public navParams: NavParams,
    private imageService: ImageServiceProvider
  ) {
    this.imageB64 = this.navParams.get("imageB64String");
    if (this.imageB64)
      this.imageB64Tagged = "data:image/jpeg;base64," + this.imageB64;
  }

  ionViewDidLoad() {
    
    console.log("ionViewDidLoad ImageCropperPage");
    this.selectImage();
  }
  ionViewWillUnload() {
    this.clear();
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
        crop: (e: Cropper.CropperCropEvent) => {
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
      let croppedImgB64String: string = this.getCroppedImage().imageString;
      //this.imageB64Tagged = croppedImgB64Strming
      this.loader.previousUrl = this.loader.url;
      this.loader.url = croppedImgB64String;
      this.cropper.replace(croppedImgB64String);
    }
  }  upload2() {

    let imageData = this.getCroppedImage()
    return this.viewCtrl.dismiss({imageData})
  }
  getCroppedImage() {
    let croppedCanava = this.cropper.getCroppedCanvas(
      this.loader.type == "image/png"
        ? {}
        : {
            fillColor: "#fff"
          }
    );
    let imageData : Partial<ImageMeta> = {}
    imageData.imageString = croppedCanava.toDataURL(this.loader.type); // 90 / 100 = photo quality
    imageData.width = croppedCanava.width;
    imageData.height = croppedCanava.height;
    imageData.type = this.loader.type;
    imageData.ext = this.extractExt();
    imageData.size = this.imageService.getImageSize(imageData.imageString)
    //this.cropper.setCropBoxData({})
    return imageData;
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
      that.cropper.setCanvasData({ left: 0, top: 0, width: 100, height: 100 });
    };

    myReader.readAsDataURL(file);
  }


}
