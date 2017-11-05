import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }


  	// Contact toast button
  showToast() {
    const toast = this.toastCtrl.create({
    	// message in the toast
      message: 'e-mail: Pasi.Marttila@student.laurea.fi',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
}



  

}

// Pasi Marttila. 1601790.