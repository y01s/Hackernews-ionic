import {Component, OnInit} from '@angular/core';
import {NavController, LoadingController, InfiniteScroll} from 'ionic-angular';
import {CONFIG} from "../../app/config";
import {AppService} from "../../app/app.service";
import {Subject} from "rxjs";

@Component({
  selector: 'page-best',
  templateUrl: 'best.html'
})
export class BestPage implements OnInit{

  title=CONFIG.title;
  isLoading=false;
  infiniteScroll:InfiniteScroll;
  items:any;
  itemsToLoad=CONFIG.ITEMS_TO_LOAD;
  loadSubject:Subject<any>;

  constructor(public navCtrl: NavController, public appService:AppService,public loading:LoadingController) {

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
    this.appService.getItems(this.loadSubject).subscribe(
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
