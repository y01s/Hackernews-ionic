import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {CONFIG} from "../../app/config";

@Component({
  selector: 'page-best',
  templateUrl: 'best.html'
})
export class BestPage implements OnInit{

  title=CONFIG.title;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
  }


}
