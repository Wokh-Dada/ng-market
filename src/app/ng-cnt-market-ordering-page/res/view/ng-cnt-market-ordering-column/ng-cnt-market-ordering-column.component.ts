import { Component, OnInit } from '@angular/core';
import { MarketStoreService } from '../../../../market-store.service';

@Component({
  selector: 'app-ng-cnt-market-ordering-column',
  templateUrl: './ng-cnt-market-ordering-column.component.html',
  styleUrls: ['./ng-cnt-market-ordering-column.component.scss'],
})
export class NgCntMarketOrderingColumnComponent implements OnInit {
  constructor(private marketStore: MarketStoreService) {}

  ngOnInit(): void {}

  public addOrRemoveClassState = 1;

  public getMethod() {
    return this.marketStore.method;
  }

  public getOrderingContacts() {
    return this.marketStore.orderingContacts;
  }

  public getOrderingReplacements() {
    return this.marketStore.orderingReplacements;
  }

  public getOrderingModal() {
    return this.marketStore.orderingModals;
  }

  public getOrderingPayment() {
    return this.marketStore.orderingPayment;
  }

  public getOrderingTimetable() {
    return this.marketStore.orderingTimetable;
  }

  public getOrderingFinal() {
    return this.marketStore.orderingFinal;
  }

  /**
   * Добавляет класс active
   */
  public addClassActive(id) {
    this.addOrRemoveClassState = id.step;
    console.log(this.addOrRemoveClassState, 'addOrRemoveClassState');
  }

  /**
   * Удаляет класс active
   */
  public removeClassActive(id) {
    if (this.addOrRemoveClassState === id.step) {
      this.addOrRemoveClassState++;
    }
  }
}
