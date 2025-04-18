import { MzDropdownItemDirective } from './dropdown-item.directive';
import { MzDropdownComponent } from './dropdown.component';

describe('DropDownItemDirective', () => {
  it('should create an instance', () => {
    const directive = new MzDropdownItemDirective(new MzDropdownComponent());
    expect(directive).toBeTruthy();
  });
});
