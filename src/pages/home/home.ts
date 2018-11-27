import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ENV } from '@env/environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  env: string = "";
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    console.log("ionViewDidLoad...");

    this.env = ENV.mode;

  }

}
