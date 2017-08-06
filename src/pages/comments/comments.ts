import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {Item} from "../../models/item.model";

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage implements OnInit{

  item:Item;
  shownComments=20;

  constructor(public params: NavParams) {

  }

  fetchOlderItems(infiniteScroll){
    this.shownComments+=10;
    setTimeout(()=>{
      infiniteScroll.complete();
    },1000);
  }

  ngOnInit(){
    this.item=this.params.get("item");
  }


}
