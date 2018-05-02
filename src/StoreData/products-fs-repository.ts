import { Injectable } from "@angular/core";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { StorePathConfig } from "./StorePathConfig";
import { Observable } from "rxjs/Observable";
import { compareTimeStamp } from "../Util/compareDateString";
import { map } from "rxjs/operators/map";
import { Extended, Product } from "../interfaces/data-models";

@Injectable()
export class ProductsFsRepository extends StoreDataFsRepository<Product> {
  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
  ) {
    super(afs, activeStoreService, StorePathConfig.ProductsInfo)
    console.log('Hello ProductsFBRepository Provider');
  }
  get FormatedList(): Observable<Extended<Product>[]> {
    return this.List().pipe(map(productsArray => {
        return productsArray.sort((a, b) => {
          return compareTimeStamp(a.ext.$computedLastEditedOn, b.ext.$computedLastEditedOn)
        })
      }))
  }
}
