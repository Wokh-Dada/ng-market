import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketOrderingSidebarComponent } from './ng-cnt-market-ordering-sidebar.component';

describe('NgCntMarketOrderingSidebarComponent', () => {
  let component: NgCntMarketOrderingSidebarComponent;
  let fixture: ComponentFixture<NgCntMarketOrderingSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketOrderingSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketOrderingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
