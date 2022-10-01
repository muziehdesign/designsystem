import { AfterViewInit, Component, ElementRef, Inject, InjectionToken, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { CodeDemonstration } from 'src/app/demonstration/code-demonstration';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
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
    constructor(@Inject(DEMONSTRATIONS) private demonstrations: CodeDemonstration[]) {
      console.log('demo container:', demonstrations);
    }

    ngOnInit(): void {
        this.embed.viewContainerRef.clear();
        this.embed.viewContainerRef.createComponent(this.component);
    }

    openSource() {

      const demo = this.demonstrations.find(d=>d.name.toLowerCase() === this.component.name.toLowerCase());
      if(!demo) {
        window.alert('Sorry, this demo appears to be broken. Please notify admin.');
      }
      const project = structuredClone(STACKBLITZ_PROJECT_OPTIONS);
      Object.keys(demo!.files).forEach(key=> {
        project.files[key] = demo!.files[key];
      });
      project.files['src/main.ts'] = `
      import './polyfills';
      import { bootstrapApplication } from '@angular/platform-browser';
      import { ${this.component.name} } from './demo';
      
      bootstrapApplication(${this.component.name});
      `;
      project.files['src/index.html'] = `<${demo?.selector}></${demo?.selector}>`;

      sdk.openProject(project, { view: 'preview' });
    }
}
