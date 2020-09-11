
import { Component, OnInit} from '@angular/core';



@Component({
    selector: 'mini-cart',
    templateUrl: './mini-cart.component.html'
})

export class MiniCartComponent implements OnInit {

  message = 'This is initial minicart State';

  constructor() {}


  public ngOnInit(){
     console.log('mini-cart');
    setTimeout(() => {
      this.message = 'Final State';
    }, 500);
  }

}