import { Component } from '@angular/core';

import {BestPage} from "../best/best";
import {TopPage} from "../top/top";
import {NewPage} from "../new/new";
import {ShowPage} from "../show/show";
import {AskPage} from "../ask/ask";
import {JobsPage} from "../jobs/jobs";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BestPage;
  tab2Root = TopPage;
  tab3Root = NewPage;
  tab4Root = ShowPage;
  tab5Root = AskPage;
  tab6Root = JobsPage;

  constructor() {

  }
}
