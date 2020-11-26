import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketAdminProductAddComponent } from './ng-cnt-market-admin-product-add.component';

describe('NgCntMarketAdminProductAddComponent', () => {
  let component: NgCntMarketAdminProductAddComponent;
  let fixture: ComponentFixture<NgCntMarketAdminProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketAdminProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketAdminProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
