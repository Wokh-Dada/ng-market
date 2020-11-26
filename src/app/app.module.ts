import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCntMarketFirstPageComponent } from './ng-cnt-market-first-page/ng-cnt-market-first-page.component';
import { NgCntMarketSecondPageComponent } from './ng-cnt-market-second-page/ng-cnt-market-second-page.component';
import { NgCntMarketHeaderComponent } from './shared/ng-cnt-market-header/ng-cnt-market-header.component';
import { NgCntMarketFooterComponent } from './shared/ng-cnt-market-footer/ng-cnt-market-footer.component';
import { NgCntMarketAdminComponent } from './ng-cnt-market-admin/ng-cnt-market-admin.component';
import { NgCntMarketAdminProductAddComponent } from './ng-cnt-market-admin/res/view/ng-cnt-market-admin-product-add/ng-cnt-market-admin-product-add.component';
import { NgCntMarketOrderingPageComponent } from './ng-cnt-market-ordering-page/ng-cnt-market-ordering-page.component';
import { NgCntMarketOrderingColumnComponent } from './ng-cnt-market-ordering-page/res/view/ng-cnt-market-ordering-column/ng-cnt-market-ordering-column.component';
import { NgCntMarketOrderingSidebarComponent } from './ng-cnt-market-ordering-page/res/view/ng-cnt-market-ordering-sidebar/ng-cnt-market-ordering-sidebar.component';
import {NgCntMarketAdminCategoryComponent} from "./ng-cnt-market-admin/res/view/ng-cnt-market-admin-category/ng-cnt-market-admin-category.component";
import { NgCntMarketFavoritesComponent } from './shared/ng-cnt-market-favorites/ng-cnt-market-favorites.component';
import { NgCntMarketShipmentsComponent } from './shared/ng-cnt-market-shipments/ng-cnt-market-shipments.component';
import { NgCntMarketAccountUserComponent } from './shared/ng-cnt-market-account-user/ng-cnt-market-account-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NgCntMarketFirstPageComponent,
    NgCntMarketSecondPageComponent,
    NgCntMarketHeaderComponent,
    NgCntMarketFooterComponent,
    NgCntMarketAdminComponent,
    NgCntMarketAdminProductAddComponent,
    NgCntMarketOrderingPageComponent,
    NgCntMarketOrderingColumnComponent,
    NgCntMarketOrderingSidebarComponent,
    NgCntMarketAdminCategoryComponent,
    NgCntMarketFavoritesComponent,
    NgCntMarketShipmentsComponent,
    NgCntMarketAccountUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
