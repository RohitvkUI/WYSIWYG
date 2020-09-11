import { Component, ViewChild, ViewContainerRef, TemplateRef, OnInit} from '@angular/core';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  @ViewChild('rightDrawerContainer', {read: ViewContainerRef}) rightDrawerContainer:ViewContainerRef;
  @ViewChild('miniCart', {read: TemplateRef}) miniCart: TemplateRef<any>;
  @ViewChild('offerDetail', {read: TemplateRef}) offerDetail: TemplateRef<any>;
  @ViewChild('couponList', {read: TemplateRef}) couponList: TemplateRef<any>;


  public ngOnInit(){
    this.rightDrawerContainer.createEmbeddedView(this.miniCart);
  }

  public changeComponent(component){
    switch(component){
      case 'offer-detail':
      this.rightDrawerContainer.detach();
      this.rightDrawerContainer.createEmbeddedView(this.miniCart);
      break;
      case 'mini-cart':
      this.rightDrawerContainer.detach();
      this.rightDrawerContainer.createEmbeddedView(this.offerDetail);
      break;
      case 'coupon-list':
      this.rightDrawerContainer.detach();
      this.rightDrawerContainer.createEmbeddedView(this.couponList);
      break;
    }
  }



}
