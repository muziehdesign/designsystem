import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { SVG_ICON_DEFAULT_OPTIONS, SvgIconOptions } from './svg-icon-config';

@Component({
  selector: 'mz-svg-icon',
  templateUrl: './svg-icon.component.svg',
  styleUrls: ['./svg-icon.component.scss'],
  standalone: true,
  imports: []
})
export class SvgIconComponent {
  @Input() key!: string;
  @Input() type: 'outline' | 'solid' | string = 'outline';
  @Input() size: string = 'medium';
  fileUrl: string;
  
  constructor(@Optional() @Inject(SVG_ICON_DEFAULT_OPTIONS) public config: SvgIconOptions) {
    this.fileUrl = config?.svgIconDefinitionUrl || './assets/icondefinitions.svg';
  }

  get url(): string {
    if(this.type) {
      return this.fileUrl + '#' + this.key + '-' + this.type;
    }

    return this.fileUrl + '#' + this.key;
  }
}
