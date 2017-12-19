
import {take} from 'rxjs/operators/take';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../app/core/auth';
import { Injectable } from '@angular/core';
import { ActiveStoreService } from '../../FireStoreData/activeStore';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface userPartial {
  fcmTokens: { [token: string]: boolean }
}
@Injectable()
export class UserService {

  private getUserSettingsPath(uid, storeId) {
    //return `/versions/v4/users/${uid}`
    return `/versions/v4/stores/${storeId}/users/${uid}`
  }

  constructor(
    protected afs: AngularFirestore,
    protected auth: AuthService,
    private activeStore: ActiveStoreService
  ) {///fcmTokens
    console.log('Hello UserServiceProvider Provider');
  }
  private getCurrentUserId(){
    return this.auth.user.filter((user=>!!user)).pipe(take(1)).toPromise().then((user)=>user.uid)
  }
  private editUserFcmKey(currentToken, remove?: boolean): Promise<any> {
    return this.getCurrentUserId().then((uid)=>{
      const userId = uid
      const storeId = this.activeStore.activeStoreKey
      const fsPath = this.getUserSettingsPath(userId, storeId);
      let fsRef = this.afs.doc<userPartial>(fsPath);
      return fsRef
    }).then((fsRef)=>{
      return fsRef.valueChanges().pipe(take(1)).toPromise().then((userSettings) => {
        let fcmTokens = userSettings ? { ...(userSettings.fcmTokens) } : {}
        //let userProfile = { fcmTokens: (userSettings && userSettings.fcmTokens) || {} }
        if (remove) {
          if (currentToken)//clear all user tokens
            delete fcmTokens[currentToken]
        }
        else
          fcmTokens[currentToken] = true;
        const newUserSettings = { ...userSettings, fcmTokens }
        if (userSettings)
          return fsRef.update(newUserSettings)
        else
          return fsRef.set(newUserSettings)
      })
    })

  }
  
  setFcmToken(token: string): Promise<any> {
    return this.editUserFcmKey(token).then(() => {
      this.setFcmTokenLocal(token);
    })
  }
  removeFcmToken(token?: string): Promise<any> {
    const tokenPromis = token ? Promise.resolve(token) : this.getFcmTokenLocal() 
    return tokenPromis.then((token)=>{
      return this.editUserFcmKey(token, true).then(() => {
        return this.removeFcmTokenLocal();
      })
  
    })
  }

  private tokenKey: string = 'fcm_token';

  public getFcmTokenLocal(){
    return this.getCurrentUserId().then((userId)=>{
      let userSettings = JSON.parse(localStorage.getItem(userId))
      return userSettings ? userSettings[this.tokenKey] : undefined
      })
    //return localStorage.getItem(this.tokenKey)
  }
  private setFcmTokenLocal(token: string) {
    const userId = this.auth.currentUser.uid;
    let userSettings = JSON.parse(localStorage.getItem(userId))
    userSettings = userSettings || {}
    userSettings[this.tokenKey]=token
    return localStorage.setItem(userId, JSON.stringify(userSettings));
  }
  private removeFcmTokenLocal() {
    const userId = this.auth.currentUser.uid;
    let userSettings = JSON.parse(localStorage.getItem(userId))
    userSettings = userSettings || {}
    delete userSettings[this.tokenKey]
    return localStorage.setItem(userId, JSON.stringify(userSettings));

//    return localStorage.removeItem(this.tokenKey);
  }

}
