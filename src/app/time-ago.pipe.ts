/**
 * Created by y01s on 5/29/17.
 */

import {Pipe, ChangeDetectorRef, PipeTransform, OnDestroy, NgZone} from '@angular/core';
import * as moment from 'moment';

// under systemjs, moment is actually exported as the default export, so we account for that
const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({name: 'timeAgo', pure: false})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private currentTimer: number;

  private lastTime: Number;
  private lastValue: Date | moment.Moment;
  private lastOmitSuffix: boolean;
  private lastText: string;

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) {
  }

  transform(value: Date | moment.Moment,local?:string ,omitSuffix?: boolean): string {

    if (this.hasChanged(value, omitSuffix)) {
      this.lastTime = this.getTime(value);
      this.lastValue = value;
      this.lastOmitSuffix = omitSuffix;
      this.removeTimer();
      this.createTimer();
      this.lastText = momentConstructor(value).from(momentConstructor(), omitSuffix);

    } else {
      this.createTimer();
    }

    if(this.lastText.indexOf("day")!=-1){
      this.lastText=moment(value).toDate().toLocaleDateString('en-US',{ month:'long', day:'numeric',hour:'numeric',minute:"numeric" });
    }
    else if(this.lastText.indexOf("year")!=-1){
      this.lastText=moment(value).toDate().toLocaleDateString('en-US',{ year: "numeric",month:'long', day:'numeric',hour:'numeric',minute:"numeric" });
    }

    return this.lastText;
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }


  private createTimer() {
    if (this.currentTimer) {
      return;
    }
    const momentInstance = momentConstructor(this.lastValue);

    const timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
    this.currentTimer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.lastText = momentConstructor(this.lastValue).from(momentConstructor(), this.lastOmitSuffix);

          this.currentTimer = null;
          this.ngZone.run(() => this.cdRef.markForCheck());
        }, timeToUpdate);
      }
    });
  }


  private removeTimer() {
    if (this.currentTimer) {
      window.clearTimeout(this.currentTimer);
      this.currentTimer = null;
    }
  }

  private getSecondsUntilUpdate(momentInstance: moment.Moment) {
    const howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));
    if (howOld < 1) {
      return 1;
    } else if (howOld < 60) {
      return 30;
    } else if (howOld < 180) {
      return 300;
    } else {
      return 3600;
    }
  }

  private hasChanged(value: Date | moment.Moment, omitSuffix?: boolean) {
    return this.getTime(value) !== this.lastTime || omitSuffix !== this.lastOmitSuffix;
  }

  private getTime(value: Date | moment.Moment) {
    if (moment.isDate(value)) {
      //noinspection TypeScriptUnresolvedFunction
      return value.getTime();
    } else if (moment.isMoment(value)) {
      return value.valueOf();
    } else {
      return momentConstructor(value).valueOf();
    }
  }
}
