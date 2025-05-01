import { Component } from '@angular/core';
import { ButtonDirective, SvgIconComponent } from 'muzieh-ngcomponents';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
    selector: 'app-dropdown-menu-guidelines',
    templateUrl: './dropdown-menu-guidelines.component.html',
    styleUrls: ['./dropdown-menu-guidelines.component.scss'],
    imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, ButtonDirective, SvgIconComponent],
})
export class DropdownMenuGuidelinesComponent {
    constructor() {}

    openItem() {
        window.alert('You clicked on a menu item!');
    }
}
