import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { TimeValue } from './models/time-value';

// TODO: need to rename, and need to use ivy instead

@Directive({
  selector: 'input[type=time]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TimeValueAccessorDirective,
    multi: true
  }]
})
export class TimeValueAccessorDirective implements ControlValueAccessor {

  @HostListener('input', ['$event.target.value'])
  onChange = (x: any) => { };
  onTouched = () => { };
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }

  writeValue(obj?: TimeValue): void {
    if (!obj) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'value', null);
      return;
    }
    const hourPrefix = obj?.hour > 9 ? '' : '0';
    const minutePrefix = obj.minute > 9 ? '' : '0';
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', `${hourPrefix}${obj.hour}:${minutePrefix}${obj.minute}`);
  }

  registerOnChange(fn: (x: TimeValue | null) => void): void {
    this.onChange = (value) => {
      if (value === null || value === '') {
        fn(null);
      } else {
        const parts = value.split(':');
        fn({ hour: Number(parts[0]), minute: Number(parts[1]) } as TimeValue);
      }
    };
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
