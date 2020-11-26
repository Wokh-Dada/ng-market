import { Component, OnInit } from '@angular/core';
import {MarketStoreService} from '../market-store.service';

@Component({
  selector: 'app-ng-cnt-market-ordering-page',
  templateUrl: './ng-cnt-market-ordering-page.component.html',
  styleUrls: ['./ng-cnt-market-ordering-page.component.scss']
})
export class NgCntMarketOrderingPageComponent implements OnInit {

  constructor(private marketStore: MarketStoreService) { }

  ngOnInit(): void {
  }

  public getLogo() {
    return this.marketStore.orderingLogo;
  }
}
