import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {CONFIG} from "./config";

@Injectable()
export class AppService {

  SERVER_URL=CONFIG.API_URL;
  headers = new Headers({ 'content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers});

  constructor(private http: Http) { }

  public getItems (category): Observable<any>{

    return this.http.get(this.SERVER_URL+"/v0/"+category+".json",this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getItemById (itemId): Observable<any>{

    return this.http.get(this.SERVER_URL+"/v0/item/"+itemId+".json",this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) :any{
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    return Observable.throw(error);
  }

}
