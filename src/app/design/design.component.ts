import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  stickyNavigation: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavigation() {
    this.stickyNavigation = !this.stickyNavigation;
  }
}
