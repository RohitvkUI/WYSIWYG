import { Component, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';
import sdk from '@stackblitz/sdk';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    @ViewChild('rightDrawerContainer', {read: ViewContainerRef}) rightDrawerContainer:ViewContainerRef;
    @ViewChild('miniCart', {read: TemplateRef}) miniCart: TemplateRef<any>;
    @ViewChild('offerDetail', {read: TemplateRef}) offerDetail: TemplateRef<any>;
    @ViewChild('couponList', {read: TemplateRef}) couponList: TemplateRef<any>;
}
