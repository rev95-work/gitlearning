import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustdirect]'
})
export class CustdirectDirective {

  constructor(private el : ElementRef) { }
@HostListener('blur') onBlur()
{
  let value : String=this.el.nativeElement.value;
  this.el.nativeElement.value=value.toUpperCase(); 
}

}
