import { Component, Inject, OnInit } from '@angular/core';
import { NavigationLink } from 'src/app/navigation/navigation-links';
import { NAVIGATION_LINK_TOKEN as NAVIGATION_LINKS_TOKEN } from './navigation-links.token';
import { MzDrawer } from '@muziehdesign/components';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: false
})
export class NavigationComponent implements OnInit {

  links: NavigationLink[];
  constructor(@Inject (NAVIGATION_LINKS_TOKEN) nav: NavigationLink[], private mzDrawer: MzDrawer) { 
    this.links = nav;
  }

  ngOnInit(): void {
  }
}
