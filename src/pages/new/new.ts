import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CONFIG} from "../../app/config";

@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {

  title=CONFIG.title;

  constructor(public navCtrl: NavController) {

  }

}
