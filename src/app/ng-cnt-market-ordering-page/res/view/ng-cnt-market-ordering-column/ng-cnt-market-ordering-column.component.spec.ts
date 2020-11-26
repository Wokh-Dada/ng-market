import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketOrderingColumnComponent } from './ng-cnt-market-ordering-column.component';

describe('NgCntMarketOrderingColumnComponent', () => {
  let component: NgCntMarketOrderingColumnComponent;
  let fixture: ComponentFixture<NgCntMarketOrderingColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketOrderingColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketOrderingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
