import {Component, Input, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Item} from "../../models/item.model";
import {CommentsPage} from "../../pages/comments/comments";
import {UserProfilePage} from "../../pages/user-profile/user-profile";
import {InAppBrowser} from "@ionic-native/in-app-browser";


@Component({
  selector: 'card-header',
  templateUrl: 'card-header.component.html'
})
export class CardHeaderComponent implements OnInit{

  @Input() item:Item;

  constructor(public navCtrl: NavController,public iab:InAppBrowser) {

  }

  ngOnInit(){
  }

  openInAppBrower(){
    if(this.item.url){
      let inAppBrower=this.iab.create(this.item.url);
      inAppBrower.show();
    }
  }

  openComments(){
    this.navCtrl.parent.parent.push(CommentsPage,{item:this.item});
  }

  openUserProfile(username){
    this.navCtrl.parent.parent.push(UserProfilePage,{username:username});
  }

}
