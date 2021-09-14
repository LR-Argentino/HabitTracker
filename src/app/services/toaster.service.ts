import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastController: ToastController) { }

  public async presentToast(headerMsg: string, bodyMsg: string, color: string = "primary"): Promise<any> {
    const toast = await this.toastController.create({
      header: headerMsg,
      message: bodyMsg,
      position: 'top',
      duration: 1000,
      color: color,
    });

    return toast.present();
  }
}
