import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketOrderingPageComponent } from './ng-cnt-market-ordering-page.component';

describe('NgCntMarketOrderingPageComponent', () => {
  let component: NgCntMarketOrderingPageComponent;
  let fixture: ComponentFixture<NgCntMarketOrderingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketOrderingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketOrderingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
