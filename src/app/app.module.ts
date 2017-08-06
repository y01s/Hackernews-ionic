import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {ItemsPage} from "../pages/items/items";
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
    ItemsPage,
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
    ItemsPage,
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
