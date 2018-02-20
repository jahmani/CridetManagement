import { Component, ViewChild, ElementRef, forwardRef } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from "angularfire2/storage";
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
var /**
 * Generated class for the ImageUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(navCtrl, navParams, afStorage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afStorage = afStorage;
        this.modalCtrl = modalCtrl;
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.keepAspect = false;
        this.cropperSettings.compressRatio;
        //this.cropper.
        this.data = {};
    }
    ImageUploadComponent.prototype.writeValue = function (imgSrc) {
        this.imgSrc = imgSrc;
        if (imgSrc) {
            var storageRef = this.afStorage.storage.refFromURL(imgSrc);
            this.ref = this.afStorage.ref(storageRef.fullPath);
        }
    };
    ImageUploadComponent.prototype.registerOnChange = function (fn) {
        this.srcChangeFunction = fn;
    };
    ImageUploadComponent.prototype.registerOnTouched = function (fn) { };
    ImageUploadComponent.prototype.setDisabledState = function (isDisabled) { };
    ImageUploadComponent.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ImageUploadPage");
        //firebase.storage.TaskState.SUCCESS
    };
    ImageUploadComponent.prototype.upload = function (event) {
        var _this = this;
        var randomId = Math.random()
            .toString(36)
            .substring(2);
        this.ref = this.afStorage.ref(randomId);
        this.task = this.ref.put(event.target.files[0]);
        this.task
            .downloadURL()
            .toPromise()
            .then(function (url) {
            _this.imgSrc = url;
            _this.srcChangeFunction && _this.srcChangeFunction(url);
        });
        this.uploadProgress = this.task.percentageChanges();
        this.downloadURL = this.task.downloadURL();
        this.uploadState = this.task.snapshotChanges().pipe(map(function (s) { return s.state; }));
    };
    ImageUploadComponent.prototype.deleteImage = function () {
        this.ref.delete().subscribe();
        this.task = null;
        this.imgSrc = null;
        this.srcChangeFunction && this.srcChangeFunction(null);
    };
    ImageUploadComponent.prototype.cancelImage = function () {
        event.stopPropagation();
        this.task.cancel();
        this.task = null;
        this.imgSrc = null;
    };
    ImageUploadComponent.prototype.crop = function () {
        var s3 = this.data.image;
        var img = new Image();
        img.src = s3;
        this.cropper.setImage(img);
    };
    ImageUploadComponent.prototype.setCropperImage = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    ImageUploadComponent.prototype.presentImageCropper = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            var modal = that.modalCtrl.create("ImageCropperPage", { imageB64String: loadEvent.target.result });
            modal.present().then(function (val) {
                image.src = val;
                that.cropper.setImage(image);
            });
        };
        myReader.readAsDataURL(file);
    };
    ImageUploadComponent.prototype.displayImage = function (event) {
        var _this = this;
        var selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.fileSrc = reader.result;
        };
        reader.readAsDataURL(selectedFile);
    };
    ImageUploadComponent.prototype.selectImage = function () {
        this.fileInput.nativeElement.click();
    };
    ImageUploadComponent.prototype.onImageSelected = function (event) {
        event.stopPropagation();
        this.presentImageCropper(event);
        // this.upload(event)
    };
    return ImageUploadComponent;
}());
/**
 * Generated class for the ImageUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export { ImageUploadComponent };
//# sourceMappingURL=image-upload.js.map