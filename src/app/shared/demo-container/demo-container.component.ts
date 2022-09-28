import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { STACKBLITZ_PROJECT_OPTIONS } from 'src/app/demonstration/stackblitz-options';

@Component({
    selector: 'app-demo-container',
    templateUrl: './demo-container.component.html',
    styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
    @Input() component!: Type<unknown>;

    constructor(private container: ViewContainerRef) {}

    ngOnInit(): void {
        this.container.createComponent(this.component);

        const file = `
        import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-buttons',
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
        project.files['demo.ts'] = file;

        console.log(project);

        sdk.embedProject(
            'demo',
            project,
            { view: 'preview' }
        );
    }
}
