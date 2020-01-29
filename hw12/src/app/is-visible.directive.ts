import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input() val;
  constructor(e: ElementRef, r: Renderer2) {
    r.setStyle(e.nativeElement, "display", (this.val)?'block':'nonee');
  }
}
