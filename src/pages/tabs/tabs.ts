import { Component } from '@angular/core';

import {ItemsPage} from "../items/items";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ItemsPage;

  constructor() {

  }
}
