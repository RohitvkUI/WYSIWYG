import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OfferDetailComponent } from  './offer-detail/offer-detail.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OfferDetailComponent, MiniCartComponent, CouponListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
