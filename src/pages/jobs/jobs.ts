import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CONFIG} from "../../app/config";


@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {

  title=CONFIG.title;

  constructor(public navCtrl: NavController) {

  }

}
