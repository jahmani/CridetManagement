import { ErrorHandler, Optional } from "@angular/core";
import { ToastController } from "ionic-angular";

export class AppErrorHandler extends ErrorHandler {
    handleError(err: any): void {
      
      // do something with the error
      super.handleError(err)
        let rejection : Error = err.rejection || err
        this.presentToast(rejection.message)
      console.log("ERROR",rejection.message)
    }
    
    constructor(@Optional() private toastCtrl: ToastController) {
        super()
    }
    
    presentToast(message) {
      let toast = this.toastCtrl.create({
        message:message,
        duration: 3000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }
  
  }