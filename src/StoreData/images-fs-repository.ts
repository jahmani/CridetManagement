import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { ImageFile, Extended } from "../interfaces/data-models";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import {
  ImageServiceProvider,
  ImageMeta
} from "../providers/image-service/image-service";
import { StorePathConfig } from "./StorePathConfig";

/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ImagesFsRepository extends StoreDataFsRepository<ImageFile> {
  private formatedList;

  constructor(
    afs: AngularFirestore,
    private activeStoreService: ActiveStoreService,
    private imageService: ImageServiceProvider
  ) {
    super(afs, activeStoreService, StorePathConfig.Images);
    console.log("Hello ImagesFsRepository Provider");
  }

  beforeImageUploaded(newImage: Extended<ImageFile>, newId?: string) {
    return super.saveNew(newImage, newId);
  }
  beforeImageRemoved(newImage: Extended<ImageFile>) {
    newImage.data.isDelted = true;
    return super.saveOld(newImage);
  }
  afterImageRemoved(removedItem: Extended<ImageFile>): any {
    super.remove(removedItem);
  }

  saveNewImage(imgMeta: ImageMeta, id?: string) {
    id = id || this.getNewDocId();
    let newItem: ImageFile = {
      height: imgMeta.height,
      //  name: imgMeta.imageId,
      size: imgMeta.size,
      width: imgMeta.width
    } as ImageFile;
    return this.beforeImageUploaded({ data: newItem, id: null }, id).then(
      key => {
        return this.imageService
          .upload(imgMeta, key, this.activeStoreService.activeStoreKey)
          .then(res => {
            return Promise.all([res.imageTask, res.thumbTask]).then(
              ([imgSnapshot, thumbSnapshot]) => {
                newItem.url = imgSnapshot.downloadURL;
                newItem.thumbUrl = thumbSnapshot.downloadURL;
                return this.afterImageUploaded(null, { data: newItem, id });
              }
            );
          });
      }
    );
  }
  

  remove(removedItem: Extended<ImageFile>) {
    return this.beforeImageRemoved(removedItem).then(() => {
      return this.imageService.remove(removedItem.data).then(removeRes => {
        return this.afterImageRemoved(removedItem);
      });
    });
  }

  afterImageUploaded(
    oldImage: Extended<ImageFile>,
    newImage: Extended<ImageFile>
  ) {
    return super.saveOld(newImage);
  }
}

/*

*/
