import { Component, OnInit } from '@angular/core';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-dropdown-menu-guidelines',
  templateUrl: './dropdown-menu-guidelines.component.html',
  styleUrls: ['./dropdown-menu-guidelines.component.scss'],
  standalone: true,
  imports: [MatMenuModule, NgbModule, SvgIconComponent],
})
export class DropdownMenuGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
