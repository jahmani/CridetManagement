import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { StorePathConfig } from "./StorePathConfig";
import { Extended, ExtMap, ExtType, PLLine } from "../interfaces/data-models";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { ImagesFsRepository } from "./images-fs-repository";
import { combineLatest } from "rxjs/operators/combineLatest";
import { map } from "rxjs/operators/map";
import { compareTimeStamp } from "../Util/compareDateString";
import { OrdersFsRepository } from "./orders-fs-repository";
import { ProductsFsRepository } from "./products-fs-repository";

/*
  Generated class for the OrderPLLinesFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PLLinesFsRepository extends StoreDataFsRepository<PLLine> {
  private formatedList;

  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    private ordersRep: OrdersFsRepository,
    private productsRep: ProductsFsRepository,
  ) {
    super(afs, activeStoreService, StorePathConfig.OrderPLLines);
    console.log("Hello OrderPLLinesPLLinesFsRepository Provider");
  }
  forOrder(orderKey: string) {
    let OrderPLLinesColl = this.afs.collection<PLLine>(this.collection.ref.path, ref =>
      ref.where("orderId", "==", orderKey)
    );
    // const transactionsList = super.snapList(transactionsColl);
    const orderPLLinesMap = super.snapList(OrderPLLinesColl);
    //return transactionsMap
    return this.formateList(orderPLLinesMap);
  }
  get FormatedList(): Observable<Extended<PLLine>[]> {
    return this.formateList(this.List())
  }
  formateList(list:Observable<Extended<PLLine>[]>) :Observable<Extended<PLLine>[]>{
    return list.pipe(
      /*  */
      combineLatest(this.productsRep.dataMap, (orderPLLines, productsMap) => {
        orderPLLines.forEach(orderPLLine => {
          orderPLLine.ext = orderPLLine.ext || ({} as ExtType);
          orderPLLine.ext.Product = productsMap.get(orderPLLine.data.productId);
        });
        return orderPLLines;
      }),
      map(orderPLLinesArray => {
        return orderPLLinesArray.sort((a, b) => {
          return compareTimeStamp(
            a.ext.$computedLastEditedOn,
            b.ext.$computedLastEditedOn
          );
        });
      })
    );
  }

}
