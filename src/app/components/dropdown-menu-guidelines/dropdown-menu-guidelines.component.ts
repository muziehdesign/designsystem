import { Component } from '@angular/core';
import { ButtonDirective, SvgIconComponent } from '@muziehdesign/components';
import { CdkMenuModule } from '@angular/cdk/menu';

@Component({
    selector: 'app-dropdown-menu-guidelines',
    templateUrl: './dropdown-menu-guidelines.component.html',
    styleUrls: ['./dropdown-menu-guidelines.component.scss'],
    imports: [CdkMenuModule, ButtonDirective, SvgIconComponent],
})
export class DropdownMenuGuidelinesComponent {
    constructor() {}

    openItem() {
        window.alert('You clicked on a menu item!');
    }
}
