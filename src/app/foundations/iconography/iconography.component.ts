import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from '@muziehdesign/components';

@Component({
    selector: 'app-iconography',
    templateUrl: './iconography.component.html',
    styleUrls: ['./iconography.component.scss'],
    imports: [SvgIconComponent]
})
export class IconographyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
