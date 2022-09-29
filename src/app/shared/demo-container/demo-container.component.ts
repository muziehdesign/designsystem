import { AfterViewInit, Component, ElementRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { STACKBLITZ_PROJECT_OPTIONS } from 'src/app/demonstration/stackblitz-options';
import { EmbedDirective } from '../embed.directive';

@Component({
    selector: 'app-demo-container',
    templateUrl: './demo-container.component.html',
    styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
    @Input() component!: Type<unknown>;
    @ViewChild(EmbedDirective, { static: true }) embed!: EmbedDirective;
    constructor(private container: ViewContainerRef) {}

    ngOnInit(): void {
        this.embed.viewContainerRef.clear();
        this.embed.viewContainerRef.createComponent(this.component);
    }

    openSource() {
        const file = `
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-demo-buttons',
  imports: [CommonModule],
  template: '<p>demo-buttons works!</p>',
  styles: [
  ]
})
export class DemoButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}

        `;
        const project = structuredClone(STACKBLITZ_PROJECT_OPTIONS);
        project.files['src/demo.ts'] = file;

        console.log(project);

        sdk.openProject(project, { view: 'preview' });
    }
}
