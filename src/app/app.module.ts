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
import {ItemCardComponent} from "../components/item-card/item-card.component";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
import {CommentsPage} from "../pages/comments/comments";
import {CommentCardComponent} from "../components/comment-card/comment-card.component";
import {CardHeaderComponent} from "../components/card-header/card-header.component";
import {SharedModule} from "./shared.module";
import {UserProfilePage} from "../pages/user-profile/user-profile";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import {firebaseConfig} from "./config";

@NgModule({
  declarations: [
    MyApp,
    BestPage,
    TopPage,
    NewPage,
    ShowPage,
    AskPage,
    JobsPage,
    TabsPage,
    CommentsPage,
    UserProfilePage,
    ItemCardComponent,
    CommentCardComponent,
    CardHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    IonicModule.forRoot(MyApp,{
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
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
    TabsPage,
    CommentsPage,
    UserProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService
  ]
})
export class AppModule {}
