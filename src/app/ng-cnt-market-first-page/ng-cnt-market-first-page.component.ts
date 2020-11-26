import { Component, OnInit } from '@angular/core';
import { MarketStoreService } from '../market-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ng-cnt-market-first-page',
  templateUrl: './ng-cnt-market-first-page.component.html',
  styleUrls: ['./ng-cnt-market-first-page.component.scss'],
})
export class NgCntMarketFirstPageComponent implements OnInit {
  constructor(private marketStore: MarketStoreService, private router: Router) {}

  ngOnInit(): void {}

  public getNumberHeader() {
    return this.marketStore.numberHeader;
  }

  public getForOffer() {
    return this.marketStore.forOffer;
  }

  public getOfferTitleText() {
    return this.marketStore.offerTitleText;
  }

  public getForStatictics() {
    return this.marketStore.forStatistics;
  }

  public getDelivery() {
    return this.marketStore.delivery;
  }

  public getForChoice() {
    return this.marketStore.forChoice;
  }

  public getChoiceTitleText() {
    return this.marketStore.choiceTitleText;
  }

  public getForSpecialist() {
    return this.marketStore.forSpecialist;
  }

  public getForCourier() {
    return this.marketStore.forCourier;
  }

  public getForApp() {
    return this.marketStore.forApp;
  }

  public getForSelection() {
    return this.marketStore.forSelection;
  }

  public getHomeText() {
    return this.marketStore.homeText;
  }

  public getHomeSubText() {
    return this.marketStore.homeSubText;
  }

  public getHomePageImage() {
    return this.marketStore.homePageImage;
  }

  public clickOnSelection() {
    this.router.navigate(['second']);
  }
}
