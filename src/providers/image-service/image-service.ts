import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireStorage } from "angularfire2/storage";
import { ImageFile } from "../../interfaces/data-models";

/*
  Generated class for the ImageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface ImageMeta {
  imageString: string;
  thumbString: string;
  imageUri: string;
  thumbUri: string;
  imageId: string;
  width: number;
  height: number;
  type: string;
  ext: string;
  size: number;
  thumbSize: number;
}

@Injectable()
export class ImageServiceProvider {
  constructor(private afStorage: AngularFireStorage) {}

  async remove(image: ImageFile) {
    let imageRef = this.afStorage.storage.refFromURL(image.url);
    let thumbRef = this.afStorage.storage.refFromURL(image.thumbUrl);
    return Promise.all([imageRef.delete(), thumbRef.delete()]);
  }
  async upload(imgMeta: Partial<ImageMeta>, id, folder) {
    if (!imgMeta.size) imgMeta.size = this.getImageSize(imgMeta.imageString);
    if (!imgMeta.thumbString) {
      imgMeta.thumbString = await this.generateThumb(
        imgMeta.imageString,
        500,
        500,
        1,
        imgMeta.type
      );
      imgMeta.thumbSize = this.getImageSize(imgMeta.thumbString);
    }
    let randomId = Math.random()
      .toString(36)
      .substring(2);
    randomId = id ? id : randomId;
    imgMeta.imageId = randomId;
    let ref = this.afStorage.ref(folder).child(randomId + imgMeta.ext);
    let thumbRef = this.afStorage
      .ref(folder)
      .child(randomId + ".thumb" + imgMeta.ext);
    let imageTask = ref.putString(imgMeta.imageString, "data_url");
    let thumbTask = thumbRef.putString(imgMeta.thumbString, "data_url");
    let completed = Promise.all([imageTask, thumbTask]);
    imageTask.then(a => {
      console.log("Done imageTask");
      imgMeta.imageUri = a.downloadURL;
    });
    thumbTask.then(a => {
      console.log("Done thumbTask");

      imgMeta.thumbUri = a.downloadURL;
    });
    completed.then(() => console.log("Done uploaDING"));
    return { imgMeta, imageTask, thumbTask };
  }
  generateThumb(
    img,
    MAX_WIDTH: number = 700,
    MAX_HEIGHT: number = 700,
    quality: number = 1,
    type?: string
  ) {
    return new Promise<string>(resolve => {
      return this.generateThumbCB(
        img,
        MAX_WIDTH,
        MAX_HEIGHT,
        quality,
        resolve,
        type
      );
    });
  }
  getImageId(imageUrl: string) {
    let name: string;
    try {
      name = this.afStorage.storage.refFromURL(imageUrl).name;
      name = name.replace(".thumb", "");
      const dotIndex = name.lastIndexOf(".");
      name = name.substring(0, dotIndex);
      return name;
    } catch (err) {
      name = undefined;
    } finally {
      return name;
    }
  }
  private generateSquareThumb(
    img,
    MAX_LENGTH: number = 700,
    quality: number = 1,
    callback
  ) {
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    var image = new Image();

    image.onload = () => {
      var width = image.width;
      var height = image.height;
      let srcX = 0,
        srcY = 0;
      let srcLength = image.height < image.width ? image.height : image.width;

      if (width > height) {
        if (width > MAX_LENGTH) {
          height *= MAX_LENGTH / width;
          width = MAX_LENGTH;
          srcX = (image.width - image.height) / 2;
        }
      } else {
        if (height > MAX_LENGTH) {
          width *= MAX_LENGTH / height;
          height = MAX_LENGTH;
          srcY = (image.height - image.width) / 2;
        }
      }
      canvas.width = MAX_LENGTH;
      canvas.height = MAX_LENGTH;
      var ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        srcX,
        srcY,
        srcLength,
        srcLength,
        0,
        0,
        MAX_LENGTH,
        MAX_LENGTH
      );

      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL("image/jpeg", quality);

      callback(dataUrl);
    };
    image.src = img;
  }
  private generateThumbCB(
    img,
    MAX_WIDTH: number = 700,
    MAX_HEIGHT: number = 700,
    quality: number = 1,
    callback,
    type?: string
  ) {
    var canvas: any = document.createElement("canvas");
    var image: HTMLImageElement = new Image();

    image.onload = () => {
      var width = image.width;
      var height = image.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");

      ctx.drawImage(image, 0, 0, width, height);

      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL(type ? type : "image/jpeg", quality);

      callback(dataUrl);
    };
    image.src = img;
  }

  getImageSize(data_url) {
    var head = "data:image/jpeg;base64,";
    return (data_url.length - head.length) * 3 / 4 / (1024 * 1024);
  }
}
