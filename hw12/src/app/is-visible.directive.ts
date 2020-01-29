import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input('appIsVisible') val = 1;

  constructor(private e: ElementRef, private  r: Renderer2) {
  }
  ngOnInit() {
    this.r.setStyle(this.e.nativeElement, "display", this.val ? 'block' : 'none');
  }
}
