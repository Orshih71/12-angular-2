import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective implements OnInit {
  @HostBinding('style.font-size.px') fontSize: number;

  @HostListener('click') dclick() {
    this.fontSize += 2;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.fontSize = 22;
  }
}
