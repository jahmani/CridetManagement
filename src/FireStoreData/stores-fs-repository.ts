import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { StoreInfo } from "../interfaces/data-models";
import { StorePathConfig } from "../StoreData/StorePathConfig";




@Injectable()
export class StoresFsRepository extends FsRepository<{storeInfo:StoreInfo}> {
  constructor(
    afs: AngularFirestore,
  ) {
    super(afs,  StorePathConfig.basePath)
    console.log('Hello StoreUsersFsRepository Provider');
  }

}
