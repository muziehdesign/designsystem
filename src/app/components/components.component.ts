import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
    imports: [RouterModule]
})
export class ComponentsComponent implements OnInit {
  stickyNavigation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavigation() {
    this.stickyNavigation = !this.stickyNavigation;
  }
}
