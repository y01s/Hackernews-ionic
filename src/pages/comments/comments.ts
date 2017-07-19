import {Component, OnInit, Input} from '@angular/core';
import {NavController, LoadingController, NavParams} from 'ionic-angular';
import {CONFIG} from "../../app/config";
import {AppService} from "../../app/app.service";
import {Item} from "../../models/item.model";

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage implements OnInit{

  item:Item;
  constructor(public navCtrl: NavController,public params: NavParams) {

  }

  ngOnInit(){
    this.item=this.params.get("item");
  }


}
