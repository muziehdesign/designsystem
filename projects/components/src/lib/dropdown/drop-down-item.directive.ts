import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Directive, Host } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Directive({
  selector: '[mzDropDownItem]',
  standalone: true,
  host: {
    'class': 'dropdown-item',
    '(click)': 'close()'
  }
})
export class DropDownItemDirective {

  constructor(@Host() private dropdown: DropdownComponent) { }

  close() {
    this.dropdown.collapse();
  }
}
