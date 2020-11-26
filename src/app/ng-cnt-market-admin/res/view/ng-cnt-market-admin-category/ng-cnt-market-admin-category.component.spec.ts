import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketAdminCategoryComponent } from './ng-cnt-market-admin-category.component';

describe('NgCntMarketAdminCategoryComponent', () => {
  let component: NgCntMarketAdminCategoryComponent;
  let fixture: ComponentFixture<NgCntMarketAdminCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketAdminCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketAdminCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
