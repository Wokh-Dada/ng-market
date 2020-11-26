import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketAdminComponent } from './ng-cnt-market-admin.component';

describe('NgCntMarketAdminComponent', () => {
  let component: NgCntMarketAdminComponent;
  let fixture: ComponentFixture<NgCntMarketAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
