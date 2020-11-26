import { Component, OnInit } from '@angular/core';
import {MarketStoreService} from "../../../../market-store.service";

@Component({
  selector: 'app-ng-cnt-market-admin-category',
  templateUrl: './ng-cnt-market-admin-category.component.html',
  styleUrls: ['./ng-cnt-market-admin-category.component.scss']
})
export class NgCntMarketAdminCategoryComponent implements OnInit {

  constructor(private marketStore: MarketStoreService) {}

  ngOnInit(): void {
  }

  public getAdminToolbarCategory() {
    return this.marketStore.getAdminToolbarCategory();
  };

  public getLogo(){
    return this.marketStore.logo;
  }

}
