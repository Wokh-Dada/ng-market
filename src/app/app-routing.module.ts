import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgCntMarketFirstPageComponent} from './ng-cnt-market-first-page/ng-cnt-market-first-page.component';
import {NgCntMarketSecondPageComponent} from './ng-cnt-market-second-page/ng-cnt-market-second-page.component';
import {NgCntMarketAdminComponent} from "./ng-cnt-market-admin/ng-cnt-market-admin.component";
import {NgCntMarketOrderingPageComponent} from './ng-cnt-market-ordering-page/ng-cnt-market-ordering-page.component';
import {NgCntMarketAdminCategoryComponent} from "./ng-cnt-market-admin/res/view/ng-cnt-market-admin-category/ng-cnt-market-admin-category.component";
import {NgCntMarketFavoritesComponent} from "./shared/ng-cnt-market-favorites/ng-cnt-market-favorites.component";
import {NgCntMarketShipmentsComponent} from "./shared/ng-cnt-market-shipments/ng-cnt-market-shipments.component";
import {NgCntMarketAccountUserComponent} from "./shared/ng-cnt-market-account-user/ng-cnt-market-account-user.component";


const routes: Routes = [
  {
    path: 'first',
    component: NgCntMarketFirstPageComponent,
  },
  {
    path: 'main',
    component: NgCntMarketFirstPageComponent,
  },
  {
    path: 'second',
    component: NgCntMarketSecondPageComponent,
  },
  {
    path: 'admin',
    component: NgCntMarketAdminComponent,
  },
  {
    path: 'ordering',
    component: NgCntMarketOrderingPageComponent,
  },
  {
    path: 'categories',
    component: NgCntMarketAdminCategoryComponent,
  },
  {
    path: 'favorite',
    component: NgCntMarketFavoritesComponent,
  },
  {
    path: 'shipments',
    component: NgCntMarketShipmentsComponent,
  },
  {
    path: 'account',
    component: NgCntMarketAccountUserComponent,
  },
  {
    path: '**',
    component: NgCntMarketSecondPageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
