import {Component, Input, OnInit} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {CONFIG} from "../../app/config";
import {Item} from "../../models/item.model";
import {AppService} from "../../app/app.service";
import {CommentsPage} from "../../pages/comments/comments";


@Component({
  selector: 'item-card',
  templateUrl: 'item-card.component.html'
})
export class ItemCardComponent implements OnInit{

  title=CONFIG.title;
  @Input() itemId;
  item:Item;

  constructor(public navCtrl: NavController,public appService:AppService,public loading:LoadingController) {

  }

  ngOnInit(){
    this.appService.getItemById(this.itemId.$value).subscribe(
      res=>{
        this.item=res;
      },
      err=>{
        //retry?
      }
    )
  }

  openComments(){
    this.navCtrl.parent.parent.push(CommentsPage,{item:this.item});
  }

}
