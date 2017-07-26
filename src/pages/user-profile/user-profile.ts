import {Component, OnInit} from '@angular/core';
import {NavController, LoadingController, NavParams} from 'ionic-angular';
import {AppService} from "../../app/app.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage implements OnInit{

  user=new User();
  username:string;
  constructor(public navCtrl: NavController,public params: NavParams,public appService:AppService
              ,public loading:LoadingController) {

  }

  fetchUser(){
    let loading=this.loading.create();
    loading.present();
    this.appService.getUserById(this.username).subscribe(
      res=>{
        loading.dismiss();
        this.user=res;
      },
      err=>{
        loading.dismiss();
        // retry, timeout -> display error
      }
    )
  }

  ngOnInit(){
    this.username=this.params.get("username");
    this.fetchUser();
  }

  openUserSubmissions(){

  }


}
