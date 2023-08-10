import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.scss'],
  standalone: true,
  imports: [SvgIconComponent],
})
export class IconographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
