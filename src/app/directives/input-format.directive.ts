import { Directive , HostListener , Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  @Input('appInputFormat') format; //tslint:disable-line
  
  @HostListener('blur') onBlur() {
  const value: string = this.el.nativeElement.value;
    if (this.format === 'uppercase') {
       this.el.nativeElement.value = value.toUpperCase();
    }else if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }

}
