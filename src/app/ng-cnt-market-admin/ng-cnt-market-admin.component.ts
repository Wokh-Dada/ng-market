import { Component, OnInit } from '@angular/core';
import {MarketStoreService} from "../market-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ng-cnt-market-admin',
  templateUrl: './ng-cnt-market-admin.component.html',
  styleUrls: ['./ng-cnt-market-admin.component.scss']
})
export class NgCntMarketAdminComponent implements OnInit {

  constructor(private marketStore: MarketStoreService, private router: Router) {}

  ngOnInit(): void {
  }

  /**
   * показывать компонент добавления товара
   * */
  public showProductList = false;

  public getMarketProductsListAdmin() {
    return this.marketStore.marketProductsListAdmin;
  }

  public getLogo(){
    return this.marketStore.logo;
  }

  public clickOnAddNewProduct() {
    this.showProductList = true;
  }

  /**
   *
   * */
  public clickOnBackProductList() {
    this.showProductList = false;
  }

  public onClickLinksToCategories() {
    // this.router.
  }




}
