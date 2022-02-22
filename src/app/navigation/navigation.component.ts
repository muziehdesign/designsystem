import { Component, Inject, OnInit, Output } from '@angular/core';
import { NavigationLink } from 'src/app/navigation/navigation-links';
import { NAVIGATION_LINK_TOKEN as NAVIGATION_LINKS_TOKEN } from './navigation-links.token';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: NavigationLink[];
  constructor(@Inject (NAVIGATION_LINKS_TOKEN) nav: NavigationLink[]) { 
    this.links = nav;
  }

  ngOnInit(): void {
  }
}
