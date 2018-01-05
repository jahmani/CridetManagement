import { Injectable } from "@angular/core";
import { FsRepository } from "./fs-repository";
import { AngularFirestore } from "angularfire2/firestore";
import { User, Extended, StoreDoc, Invite, InviteState } from "../interfaces/data-models";
import { UsersFsRepository } from "./users-fs-repository";
import { mergeMap } from "rxjs/Operators/mergeMap";
import { StoresFsRepository } from "./stores-fs-repository";



@Injectable()
export class InvitesFsRepository extends FsRepository<Invite> {
  constructor(
    afs: AngularFirestore,
    private usersFsRepository : UsersFsRepository,
    private storesFsRepository : StoresFsRepository
  ) {
    super(afs, "versions/v4/invites")
    console.log('Hello StoreUsersFsRepository Provider');
  }

  invite(userId : string, storeId: string){
    const invite : Invite = {userId,storeId, state:"PENDING"} as Invite
    const extInvite : Extended<Invite> = {data:invite} as Extended<Invite>
    return super.saveNew(extInvite)
  }

  getStoreInvites(storeId:string, state?:InviteState){
    let invitesColl = this.afs.collection<Invite>(this.collection.ref.path, (ref)=>{
      let reference  = ref.where('storeId','==',storeId)
      if(state)
        reference = reference.where("state","==",state)
      return reference
    })
     return this.snapList(invitesColl).pipe(mergeMap(this.extendUsers.bind(this)))
  }

  getUserInvites(userId:string, state?:InviteState){
    let invitesColl = this.afs.collection<Invite>(this.collection.ref.path, (ref)=>{
      let reference  = ref.where('userId','==',userId)
      if(state)
        reference = reference.where("state","==",state)
      return reference
    })
     return this.snapList(invitesColl).pipe(mergeMap(this.extendStores))
  }

  extendUsers(extInvites: Extended<Invite>[]) : Promise<Extended<Invite>[]> {
    const promises =  extInvites.map((extInvite) => {
      return this.usersFsRepository.getOnce(extInvite.data.userId).then((extUser) => {
        extInvite.ext.user = extUser.data
        return extInvite
      })
    })
    return Promise.all(promises)
  }
  extendStores(extInvites: Extended<Invite>[]) : Promise<Extended<Invite>[]>  {
    const promises = extInvites.map((extInvite) => {
      return this.storesFsRepository.getOnce(extInvite.data.storeId).then((extStore) => {
        extInvite.ext.store = extStore.data
        return extInvite
      })
    })
    return Promise.all(promises)
  }

  accpetInvite(inviteId){
    return this.InviteState(inviteId,"ACCEPTED")
  }

  rejectInvite(inviteId){
    return this.InviteState(inviteId,"REJECTED")
  }

  canceleInvite(inviteId){
    return this.InviteState(inviteId,"CANCELED")
  }

  private InviteState(inviteId:string, inviteState:InviteState){
    return this.getOnce(inviteId).then(extInvite=>{
      const  copyExtInvite = {...extInvite,data: {...(extInvite.data)}}
      copyExtInvite.data.state = inviteState
      return this.saveOld(copyExtInvite)
    })
  }
}
