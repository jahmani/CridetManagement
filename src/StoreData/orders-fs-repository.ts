import { AngularFirestore } from "angularfire2/firestore";
import { Injectable } from "@angular/core";
import { StoreDataFsRepository } from "./store-data-fs-repository";
import { AccountsFsRepository } from "./accounts-fb-repository";
import { StorePathConfig } from "./StorePathConfig";
import { Extended, ExtMap, ExtType, Order } from "../interfaces/data-models";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import { ActiveStoreService } from "../FireStoreData/activeStore";
import { ImagesFsRepository } from "./images-fs-repository";
import { combineLatest } from "rxjs/operators/combineLatest";
import { map } from "rxjs/operators/map";
import { compareTimeStamp } from "../Util/compareDateString";

/*
  Generated class for the AccountsFBRepository provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrdersFsRepository extends StoreDataFsRepository<Order> {
  private formatedList;

  constructor(
    afs: AngularFirestore,
    activeStoreService: ActiveStoreService,
    private accountsRep: AccountsFsRepository,
    private imagesFsRepository: ImagesFsRepository
  ) {
    super(afs, activeStoreService, StorePathConfig.Orders);
    console.log("Hello TransactionsFsRepository Provider");
  }
  forAccount(accountKey: string) {
    let OrdersColl = this.afs.collection<Order>(this.collection.ref.path, ref =>
      ref.where("accountId", "==", accountKey)
    );
    // const transactionsList = super.snapList(transactionsColl);
    const ordersMap = super.snapshotMap(OrdersColl);
    //return transactionsMap
    return ordersMap;
  }
  get FormatedList(): Observable<any[]> {
    return this.List().pipe(
      /*  */

      combineLatest(this.accountsRep.dataMap, (orders, accountsMap) => {
        orders.forEach(order => {
          order.ext = order.ext || ({} as ExtType);
          order.ext.account = accountsMap.get(order.data.accountId);
        });
        return orders;
      }),
      map(ordersArray => {
        return ordersArray.sort((a, b) => {
          return compareTimeStamp(
            a.ext.$computedLastEditedOn,
            b.ext.$computedLastEditedOn
          );
        });
      })
    );
  }

}
