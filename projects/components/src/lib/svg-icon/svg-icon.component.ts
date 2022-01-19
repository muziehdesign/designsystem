import { Component, HostBinding, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { COMPONENT_CONFIG } from '../component-config.token';
import { ComponentConfig } from '../component.config';

@Component({
  selector: 'mz-svg-icon',
  templateUrl: './svg-icon.component.svg',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() key!: string;
  @Input() type: string = 'outline';
  url: string;
  constructor(@Optional() @Inject(COMPONENT_CONFIG) private config: ComponentConfig) {
    this.url = config?.svgDefinitionUrl || './assets/icondefinitions.svg';
  }

  ngOnInit(): void {}
}
