import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: '<p appIsVisible="true">{{obj?.name}}</p>' +
    '<p appIsVisible="false">{{obj?.entry}}</p>',
  styles: [''],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DumbComponent implements OnInit {
  @Input() obj;
  constructor() { }

  ngOnInit() {
  }

}
