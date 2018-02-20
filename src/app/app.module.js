import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ComponentsModule } from "../components/components.module";
import { MessagingService } from "../providers/messaging-service/messaging-service";
import { UserService } from "../providers/user-service/user-service";
import { FirestoreDataModule } from "../FireStoreData/firestoreData.module";
import { TitleServiceProvider } from "../providers/title-service/title-service";
import { TabServiceProvider } from "../providers/tab-service/tab-service";
import { ConnectionServiceProvider } from "../providers/connection-service/connection-service";
import { environment } from "../environments/environment";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map