import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { COMPONENT_CONFIG } from '../component-config.token';
import { ComponentConfig } from '../component.config';

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
  
  constructor(@Optional() @Inject(COMPONENT_CONFIG) public config: ComponentConfig) {
    this.fileUrl = config?.svgIconDefinitionUrl || './assets/icondefinitions.svg';
  }

  get url(): string {
    if(this.type) {
      return this.fileUrl + '#' + this.key + '-' + this.type;
    }

    return this.fileUrl + '#' + this.key;
  }
}
