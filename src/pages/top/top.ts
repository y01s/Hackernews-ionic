import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CONFIG} from "../../app/config";

@Component({
  selector: 'page-top',
  templateUrl: 'top.html'
})
export class TopPage {

  title=CONFIG.title;

  constructor(public navCtrl: NavController) {

  }

}
