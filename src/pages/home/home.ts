import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   
  username: string= '';
  password: string= '';

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  alert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }



  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username) && this.password== "sas22"){
          this.navCtrl.push(ChatPage, {
            username: this.username
          });
    }
    else{
      this.alert('Sorry','May be your Username or given Password may be incorrect');
    }
  }

}
