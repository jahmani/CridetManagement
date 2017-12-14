import { Injectable, Inject } from '@angular/core';
import * as firebase from "firebase"
import { UserService } from '../user-service/user-service';
/*
  Generated class for the MessagingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

// based on https://github.com/firebase/quickstart-js/
export class MessagingService {
  private messaging: firebase.messaging.Messaging;
  private unsubscribeOnTokenRefresh = () => { };

  constructor(
    private userService: UserService
  ) {
    this.messaging = firebase.messaging();
  }

  public enableNotifications(): Promise<any> {
    console.log('Requesting permission...');
    return this.messaging.requestPermission().then(() => {
      console.log('Permission granted');
      return this.messaging.getToken().then((token)=>{
      // token might change - we need to listen for changes to it and update it
      this.setupOnTokenRefresh();
      return this.updateToken(token)
      })
    });
  }

  public disableNotifications(): Promise<any> {
    this.unsubscribeOnTokenRefresh();
    this.unsubscribeOnTokenRefresh = () => { };
    //    return this.userService.removeFcmToken().then();
    
    return this.userService.getFcmTokenLocal().then((token)=>{
      let proms1 
      if(token)
       proms1 = this.messaging.deleteToken(token)
      const proms2 = this.userService.removeFcmToken(token)
      return Promise.all([proms1, proms2])
    })
  }

  private updateToken(currentToken): Promise<any> {
      if (currentToken) {
        // we've got the token from Firebase, now let's store it in the database
        try {
          this.userService.removeFcmToken()
        }
        finally{
          return this.userService.setFcmToken(currentToken);
         }
      } else {
        console.log('No Instance ID token available. Request permission to generate one.');
      }
  }

  getFcmTokenLocal(){
    return this.userService.getFcmTokenLocal()
  }

  private setupOnTokenRefresh(): void {
    this.unsubscribeOnTokenRefresh = this.messaging.onTokenRefresh(() => {
      console.log("Token refreshed")
      this.messaging.getToken().then((token)=>{
        this.updateToken(token)
      })
    });
  }

}