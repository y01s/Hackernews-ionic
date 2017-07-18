import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CONFIG} from "../../app/config";

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})
export class ShowPage {

  title=CONFIG.title;

  constructor(public navCtrl: NavController) {

  }

}
