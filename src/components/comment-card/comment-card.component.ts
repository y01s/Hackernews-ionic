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

  charsShown:number;
  isHidden:boolean;
  isReplies:boolean;
  item:Item;
  MAX_CHARS_SHOWN=150;
  repliesOn=false;
  title=CONFIG.title;

  @Input() itemId;
  @Input() commentLevel;

  constructor(public navCtrl: NavController,public appService:AppService,public loading:LoadingController) {

  }

  hideAll(){
    this.isHidden=true;
    this.charsShown=this.MAX_CHARS_SHOWN;
  }

  ngOnInit(){
    this.hideAll();
    this.isReplies=false;
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

  showAll(){
    this.isHidden=false;
    this.charsShown=this.item.text.length;
  }
}
