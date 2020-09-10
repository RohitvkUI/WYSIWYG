import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OfferDetailComponent } from  './';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { CouponListComponent } from '';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OfferDetailComponent, MiniCartComponent, CouponListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
