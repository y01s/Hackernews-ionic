import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CONFIG} from "../../app/config";


@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})
export class AskPage {

  title=CONFIG.title;

  constructor(public navCtrl: NavController) {

  }

}
