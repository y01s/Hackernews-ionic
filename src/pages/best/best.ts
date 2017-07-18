import {Component, OnInit} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {CONFIG} from "../../app/config";
import {AppService} from "../../app/app.service";

@Component({
  selector: 'page-best',
  templateUrl: 'best.html'
})
export class BestPage implements OnInit{

  title=CONFIG.title;
  items:any;

  constructor(public navCtrl: NavController, public appService:AppService,public loading:LoadingController) {

  }

  ngOnInit(){
    let loading=this.loading.create();
    loading.present();
    this.appService.getItems("beststories").subscribe(
      res=>{
        loading.dismiss();
        this.items=res.slice(0,10);
      },
      err=>{
        loading.dismiss();
        console.error(err);
        // display an error to the user
      }
    )
  }


}
