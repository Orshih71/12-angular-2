import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart',
  template: '<ul>' +
    '<li *ngFor="let obj of obj_arr"><app-dumb [obj]="obj"></app-dumb></li>' +
    '</ul>',
  styles: ['']
})
export class SmartComponent implements OnInit {
  private obj_arr;

  constructor() {
  }

  ngOnInit() {
    this.obj_arr = [{
      name: "Orshikh",
      entry: "Aug 2019"
    },
      {
        name: "Asaad",
        entry: "Aug 2019"
      }];
  }

}
