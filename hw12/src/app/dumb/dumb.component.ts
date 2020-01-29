import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `<p [ngStyle]="{'font-size': '22px'}" [appIsVisible]=1 appMakeBigger> {{obj?.name | multi}}</p>
  <p [appIsVisible]=0>{{obj?.entry}}</p>
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DumbComponent implements OnInit {
  @Input() obj;

  constructor() {
  }

  ngOnInit() {
  }

}
