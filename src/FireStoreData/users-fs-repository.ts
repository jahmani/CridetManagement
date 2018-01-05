import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { User } from "../interfaces/data-models";
import { first } from "rxjs/operators/first";



@Injectable()
export class UsersFsRepository extends FsRepository<User> {
  constructor(
    protected afs: AngularFirestore,
  ) {
    super(afs, "users")
    console.log('Hello StoreUsersFsRepository Provider');
  }
  
  getByEmail(email:string){
    const encodedEmal = email.replace('.','|')
    return this.afs.doc<{uid:string}>(`usersByEmail/${encodedEmal}`).valueChanges().pipe(first()).toPromise()
  }

}
