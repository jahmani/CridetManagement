var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";
import * as Cropper from "cropperjs";
import { AngularFireStorage } from "angularfire2/storage";
import { ImageServiceProvider } from "../../providers/image-service/image-service";
/**
 * Generated class for the ImageCropperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageCropperPage = /** @class */ (function () {
    function ImageCropperPage(viewCtrl, afStorage, navParams, imageService) {
        this.viewCtrl = viewCtrl;
        this.afStorage = afStorage;
        this.navParams = navParams;
        this.imageService = imageService;
        this.imageB64Tagged = "../../assets/img/10.jpg";
        this.loader = {
            previousUrl: null,
            loaded: false,
            name: "",
            type: "",
            url: null,
            size: 0
        };
        this.editor = { cropping: false, rotating: false };
        this.imageB64 = this.navParams.get("imageB64String");
        if (this.imageB64)
            this.imageB64Tagged = "data:image/jpeg;base64," + this.imageB64;
    }
    ImageCropperPage.prototype.extractExt = function () {
        var fileName = this.loader.name;
        var dotIndex = fileName.lastIndexOf(".");
        var ext = fileName.substring(dotIndex);
        return ext;
    };
    ImageCropperPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ImageCropperPage");
        this.selectImage();
    };
    ImageCropperPage.prototype.ionViewWillUnload = function () {
        this.clear();
    };
    ImageCropperPage.prototype.imageLoaded = function () {
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
                crop: function (e) {
                    //  if (!this.editor.cropping) this.editor.cropping = true;
                }
            });
    };
    ImageCropperPage.prototype.imageRotate = function () {
        this.cropper.rotate(90);
        this.editor.rotating = true;
    };
    ImageCropperPage.prototype.selectImage = function () {
        this.fileInput.nativeElement.click();
    };
    ImageCropperPage.prototype.cancel = function () {
        this.cropper.reset();
        this.cropper.clear();
        this.editor.cropping = false;
        this.editor.rotating = false;
    };
    ImageCropperPage.prototype.clear = function () {
        if (this.cropper) {
            this.cropper.destroy();
            this.cropper = null;
            this.editor.cropping = false;
        }
    };
    ImageCropperPage.prototype.startCrop = function () {
        this.cropper.crop();
        this.editor.cropping = true;
    };
    ImageCropperPage.prototype.finish = function () {
        var cropper = this.cropper;
        if (this.editor.cropping || this.editor.rotating) {
            this.editor.cropping = false;
            this.editor.rotating = false;
            var croppedImgB64String = this.getCroppedImage().imageString;
            //this.imageB64Tagged = croppedImgB64Strming
            this.loader.previousUrl = this.loader.url;
            this.loader.url = croppedImgB64String;
            this.cropper.replace(croppedImgB64String);
        }
    };
    ImageCropperPage.prototype.upload2 = function () {
        var imageData = this.getCroppedImage();
        return this.viewCtrl.dismiss({ imageData: imageData });
    };
    ImageCropperPage.prototype.getCroppedImage = function () {
        var croppedCanava = this.cropper.getCroppedCanvas(this.loader.type == "image/png"
            ? {}
            : {
                fillColor: "#fff"
            });
        var imageData = {};
        imageData.imageString = croppedCanava.toDataURL(this.loader.type); // 90 / 100 = photo quality
        imageData.width = croppedCanava.width;
        imageData.height = croppedCanava.height;
        imageData.type = this.loader.type;
        imageData.ext = this.extractExt();
        imageData.size = this.imageService.getImageSize(imageData.imageString);
        //this.cropper.setCropBoxData({})
        return imageData;
    };
    ImageCropperPage.prototype.onImageSelected = function (event) {
        event.stopPropagation();
        this.setCropperImage(event);
    };
    ImageCropperPage.prototype.setCropperImage = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
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
    };
    __decorate([
        ViewChild("imageSrc"),
        __metadata("design:type", ElementRef)
    ], ImageCropperPage.prototype, "input", void 0);
    __decorate([
        ViewChild("fileInput"),
        __metadata("design:type", ElementRef)
    ], ImageCropperPage.prototype, "fileInput", void 0);
    ImageCropperPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-image-cropper",
            templateUrl: "image-cropper.html"
        }),
        __metadata("design:paramtypes", [ViewController,
            AngularFireStorage,
            NavParams,
            ImageServiceProvider])
    ], ImageCropperPage);
    return ImageCropperPage;
}());
export { ImageCropperPage };
//# sourceMappingURL=image-cropper.js.map