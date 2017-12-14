import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AuthService } from './auth';
@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService]
})
export class CoreModule { }