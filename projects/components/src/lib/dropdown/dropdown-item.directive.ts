import { Directive, Host } from '@angular/core';
import { MzDropdownComponent } from './dropdown.component';

@Directive({
  selector: '[mzDropdownItem]',
  standalone: true,
  host: {
    'class': 'dropdown-item',
    '(click)': 'close()'
  }
})
export class MzDropdownItemDirective {

  constructor(@Host() private dropdown: MzDropdownComponent) { }

  close() {
    this.dropdown.collapse();
  }
}
