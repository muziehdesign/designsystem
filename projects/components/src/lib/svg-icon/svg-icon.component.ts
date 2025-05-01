import { Component, HostBinding, Inject, Input, OnInit, Optional } from '@angular/core';
import { SVG_ICON_DEFAULT_OPTIONS, SvgIconOptions } from './svg-icon-config';

@Component({
    selector: 'mz-svg-icon',
    templateUrl: './svg-icon.component.svg',
    styleUrls: ['./svg-icon.component.scss'],
    host: {
      'role': 'img',
      '[attr.data-icon-name]': 'key',
    }
})
export class SvgIconComponent {
  @Input() key!: string;
  /**
   * @deprecated Pass in whole key instead.
   */
  @Input() type: 'outline' | 'solid' | string = '';
  @Input() size: string = 'medium';
  fileUrl: string;
  
  constructor(@Inject(SVG_ICON_DEFAULT_OPTIONS) public config: SvgIconOptions) {
    this.fileUrl = config.svgIconDefinitionUrl;
  }

  get url(): string {
    if(this.type) {
      return this.fileUrl + '#' + this.key + '-' + this.type;
    }

    return this.fileUrl + '#' + this.key;
  }

  @HostBinding('class')
  get classes(): string {
    if(this.type) {
      return `icon icon-${this.type} icon-${this.size}`;
    }
    return `icon icon-${this.size}`;
  }
}