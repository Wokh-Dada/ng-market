import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketAccountUserComponent } from './ng-cnt-market-account-user.component';

describe('NgCntMarketAccountUserComponent', () => {
  let component: NgCntMarketAccountUserComponent;
  let fixture: ComponentFixture<NgCntMarketAccountUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketAccountUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketAccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
