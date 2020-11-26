import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCntMarketFavoritesComponent } from './ng-cnt-market-favorites.component';

describe('NgCntMarketFavoritesComponent', () => {
  let component: NgCntMarketFavoritesComponent;
  let fixture: ComponentFixture<NgCntMarketFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCntMarketFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCntMarketFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
