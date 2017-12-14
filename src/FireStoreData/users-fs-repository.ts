import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../interfaces/data-models";



@Injectable()
export class UsersFsRepository extends FsRepository<User> {
  constructor(
    afs: AngularFirestore,
  ) {
    super(afs, "users")
    console.log('Hello StoreUsersFsRepository Provider');
  }

}
