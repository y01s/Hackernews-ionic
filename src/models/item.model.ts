import {User} from "./user.model";
/**
 * Created by ys on 18-Jul-17.
 */


export class Item {
  public id: number;
  public deleted:boolean;
  public type:string;
  public by: User;
  public time: string;
  public text: string;
  public dead:boolean;
  public parent: number
  public poll: number;
  public kids: number[];
  public url:string;
  public score: number;
  public title: string;
  public parts: number[];
  public descendants: number;
}
