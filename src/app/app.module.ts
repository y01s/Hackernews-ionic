import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {BestPage} from "../pages/best/best";
import {TopPage} from "../pages/top/top";
import {NewPage} from "../pages/new/new";
import {ShowPage} from "../pages/show/show";
import {AskPage} from "../pages/ask/ask";
import {JobsPage} from "../pages/jobs/jobs";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BestPage,
    TopPage,
    NewPage,
    ShowPage,
    AskPage,
    JobsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BestPage,
    TopPage,
    NewPage,
    ShowPage,
    AskPage,
    JobsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
