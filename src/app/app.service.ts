import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class AppService {

  constructor(private fireDB:AngularFireDatabase) { }

  public getItems (loadSubject:Subject<any>): Observable<any>{
    return this.fireDB.list("/v0/beststories", {
      query: {limitToFirst: loadSubject}});
  }

  public getItemById (itemId): Observable<any>{
    return this.fireDB.object("/v0/item/"+itemId);
  }

  public getUserById (username): Observable<any>{
    return this.fireDB.object("/v0/user/"+username);
  }

}
