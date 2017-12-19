var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ComponentsModule } from '../components/components.module';
import { MessagingService } from '../providers/messaging-service/messaging-service';
import { UserService } from '../providers/user-service/user-service';
import { FirestoreDataModule } from '../FireStoreData/firestoreData.module';
import { TitleServiceProvider } from '../providers/title-service/title-service';
import { TabServiceProvider } from '../providers/tab-service/tab-service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                FirestoreDataModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                ListPage
            ],
            providers: [
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                UserService, MessagingService,
                TitleServiceProvider,
                TabServiceProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map