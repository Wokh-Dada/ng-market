import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketShipmentsComponent } from './ng-cnt-market-shipments.component';

describe('NgCntMarketShipmentsComponent', () => {
  let component: NgCntMarketShipmentsComponent;
  let fixture: ComponentFixture<NgCntMarketShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
