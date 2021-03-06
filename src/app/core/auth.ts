import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators/switchMap'
import { User } from '../../interfaces/user';

@Injectable()
export class 
AuthService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
    /*.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
    )
    */
    this.user.subscribe((user) => {
      console.log("Currently Loged in : ", user)
    })

  }
  get currentUser() {
    return this.afAuth.auth.currentUser;
  }
  signInWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }


  signupUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (newUser) => {
        return this.signInWithEmail(email, password)
          .then((credential) => {
        //   this.updateUserData(credential);
          })
      })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
       // this.updateUserData(credential.user)
      })
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const { uid, email, displayName, photoURL } = user

    const data: User = { uid, email, displayName, photoURL }
    return userRef.set(data)
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      //todo: add after logout logic here
    });
  }
}