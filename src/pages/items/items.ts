import {Component, OnInit} from '@angular/core';
import {NavController, LoadingController, InfiniteScroll, NavParams} from 'ionic-angular';
import {CONFIG} from "../../app/config";
import {AppService} from "../../app/app.service";
import {Subject} from "rxjs";

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage implements OnInit{

  isLoading=false;
  infiniteScroll:InfiniteScroll;
  items:any;
  itemsToLoad=CONFIG.ITEMS_TO_LOAD;
  loadSubject:Subject<any>;
  title=CONFIG.title;
  type:string;

  constructor(public navCtrl: NavController, public appService:AppService,public loading:LoadingController
              ,public params:NavParams) {
      this.type=params.data;
  }

  fetchOlderItems(infiniteScroll){
    this.isLoading=true;
    this.infiniteScroll=infiniteScroll;
    this.itemsToLoad+=CONFIG.ITEMS_TO_LOAD;
    this.loadSubject.next(this.itemsToLoad);
  }

  ngOnInit(){
    let loading=this.loading.create();
    loading.present();
    this.loadSubject=new Subject<any>();
    this.appService.getItems(this.type,this.loadSubject).subscribe(
      res=>{
        loading.dismiss();
        this.items=res;
        if(this.isLoading){
          this.infiniteScroll.complete();
          this.isLoading=false;
        }
      }
    );
    this.loadSubject.next(this.itemsToLoad);
  }


}
