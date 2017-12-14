import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from "angularfire2"
import {AngularFirestoreModule} from "angularfire2/firestore"
import { environment } from "../environments";

import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreDataModule, TCatigoriesFsRepositoryProvider } from '../StoreData/index';
import { ComponentsModule } from '../components/components.module';
import { MessagingService } from '../providers/messaging-service/messaging-service';
import { UserService } from '../providers/user-service/user-service';
import { FirestoreDataModule } from '../FireStoreData/firestoreData.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    SharedModule,
    CoreModule,
    ComponentsModule,
    FirestoreDataModule, StoreDataModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TCatigoriesFsRepositoryProvider,
    UserService,MessagingService
  ]
})
export class AppModule {}
