import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarketStoreService } from '../../../../market-store.service';

@Component({
  selector: 'app-ng-cnt-market-ordering-sidebar',
  templateUrl: './ng-cnt-market-ordering-sidebar.component.html',
  styleUrls: ['./ng-cnt-market-ordering-sidebar.component.scss'],
})
export class NgCntMarketOrderingSidebarComponent implements OnInit {
  constructor(private marketStore: MarketStoreService) {}

  @ViewChild('arrowTag') arrowTag: ElementRef;

  @ViewChild('dropDownTag') dropDownTag: ElementRef;

  /**
   * Стейт для открытия и зарытия модального окна
   */
  public promoModalState;

  /**
   *Стейт для переключения дропдавн меню
   */
  public dropDownState = false;

  public getOrderingSidebar = this.marketStore.orderingSidebar;

  ngOnInit(): void {}

  public getOrderingModal() {
    return this.marketStore.orderingModal;
  }

  public getOrderingPromoCardModal() {
    return this.marketStore.orderingPromoCardModal;
  }

  public getOrderingSidberSummaryTitle() {
    return this.marketStore.orderingSidebarSummaryTitle;
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.promoModalState = true;
  }

  /**
   *Закртыие модального окна
   */
  public closeModalForm() {
    this.promoModalState = false;
  }

  /*
   * Вызов дропдавн меню
   */
  public openAndCloseDropdown() {
    this.dropDownState = !this.dropDownState;
    if (this.dropDownState) {
      this.dropDownTag.nativeElement.style.maxHeight = '1000px';
    } else {
      this.dropDownTag.nativeElement.style.maxHeight = '0';
    }
    this.rotateArrow();
  }
  /**
   * добавляем класс для поворота стрелки
   */
  public rotateArrow() {
    if (this.dropDownState) {
      this.arrowTag.nativeElement.classList.add('active-arrow');
    } else {
      this.arrowTag.nativeElement.classList.remove('active-arrow');
    }
  }
}
