import { Component, Inject, OnInit } from '@angular/core';
import { NavigationLink } from 'src/app/navigation/navigation-links';
import { NAVIGATION_LINK_TOKEN as NAVIGATION_LINKS_TOKEN } from './navigation-links.token';
import { MzDialog } from 'muzieh-ngcomponents';
import { ButtonsComponent } from '../components/buttons/buttons.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: NavigationLink[];
  constructor(@Inject (NAVIGATION_LINKS_TOKEN) nav: NavigationLink[], private mzDialog: MzDialog) { 
    this.links = nav;
  }

  ngOnInit(): void {
  }
}
