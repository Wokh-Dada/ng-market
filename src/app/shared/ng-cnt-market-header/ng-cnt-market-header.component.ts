import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MarketStoreService } from '../../market-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ng-cnt-market-header',
  templateUrl: './ng-cnt-market-header.component.html',
  styleUrls: ['./ng-cnt-market-header.component.scss'],
})
export class NgCntMarketHeaderComponent implements OnInit {
  constructor(private marketStore: MarketStoreService, private router: Router,) {}

  ngOnInit(): void {
    window.onscroll = () => {
      this.stickyTop();
    };
  }

  /***/
  @Input() firstPage: boolean;

  public stickyClass: string = '';

  /**
   * Метод для смены внешнего вида главного меню при скролле
   */
  public stickyTop(): void {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 90) {
      this.stickyClass = 'header-wrapper-child sticky';
    } else {
      this.stickyClass = 'header-wrapper-child';
    }
  }

  /**
   *
   * */
  public getLogo() {
    return this.marketStore.logo;
  }

  public getNumberHeader() {
    return this.marketStore.numberHeader;
  }

  /* Получаем данные для топ бара */
  getTopBar() {
    return this.marketStore.getTopBar();
  }

  /* Получаем данные для body header */
  getBodyHeader() {
    return this.marketStore.getBodyHeader();
  }

  //
  public getLoginUser() {
    return this.marketStore.getLoginUser();
  }

  //
  public getNavBar() {
    return this.marketStore.getNavBar();
  }

  //
  public getSelectShops() {
    return this.marketStore.getSelectShops();
  }

  //
  public getLeftMenuCatalog() {
    return this.marketStore.getLeftMenuCatalog();
  }

  /**
   *
   * */
  public clickOnWishlist() {
    this.router.navigate(['favorite']);
  }
  /**
   *
   * */
  public clickOnOrders() {
    this.router.navigate(['shipments']);
  }
  /**
   *
   * */
  public clickOnByProducts() {
    this.router.navigate(['ordering']);
    document.body.style.overflow = 'auto';
  }
}
