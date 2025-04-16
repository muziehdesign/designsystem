import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownItemDirective, DropdownComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-dropdown-menu-guidelines',
  templateUrl: './dropdown-menu-guidelines.component.html',
  styleUrls: ['./dropdown-menu-guidelines.component.scss'],
  standalone: true,
  imports: [MatMenuModule, NgbModule, SvgIconComponent, DropdownComponent, DropDownItemDirective],
})
export class DropdownMenuGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openItem() {
    window.alert('You clicked on a menu item!');
  }
}
