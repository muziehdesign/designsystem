import { Component, OnInit } from '@angular/core';
import { AnchorLinkComponent } from 'src/app/shared/anchor-link/anchor-link.component';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  standalone: true,
  imports: [AnchorLinkComponent]
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
