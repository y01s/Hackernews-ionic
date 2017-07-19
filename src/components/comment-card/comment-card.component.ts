import {Component, Input, OnInit} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {CONFIG} from "../../app/config";
import {Item} from "../../models/item.model";
import {AppService} from "../../app/app.service";


@Component({
  selector: 'comment-card',
  templateUrl: 'comment-card.component.html'
})
export class CommentCardComponent implements OnInit{

  title=CONFIG.title;
  @Input() itemId;
  @Input() commentLevel;
  item:Item;
  isReplies=false;
  repliesOn=false;

  constructor(public navCtrl: NavController,public appService:AppService,public loading:LoadingController) {

  }

  ngOnInit(){
    this.appService.getItemById(this.itemId).subscribe(
      res=>{

        this.item=res;
      },
      err=>{
        //retry?
      }
    )
  }

  offReplies(){
    this.isReplies=false;
  }

  onReplies(){
    this.repliesOn=true;
    this.isReplies=true;
  }
}
