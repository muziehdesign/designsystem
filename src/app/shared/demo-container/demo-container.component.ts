import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, InjectionToken, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { map, tap } from 'rxjs/operators';
import { CodeDemonstration } from 'src/app/demonstration/code-demonstration';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { STACKBLITZ_PROJECT_OPTIONS } from 'src/app/demonstration/stackblitz-options';
import { SubSink } from 'subsink';
import { EmbedDirective } from '../embed.directive';

@Component({
    selector: 'app-demo-container',
    templateUrl: './demo-container.component.html',
    styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
    @Input() component!: Type<unknown>;
    @ViewChild(EmbedDirective, { static: true }) embed!: EmbedDirective;
    private sink = new SubSink();
    constructor(@Inject(DEMONSTRATIONS) private demonstrations: CodeDemonstration[], private http: HttpClient) {
        console.log('demo container:', demonstrations);
    }

    ngOnInit(): void {
        this.embed.viewContainerRef.clear();
        this.embed.viewContainerRef.createComponent(this.component);
    }

    openSource() {
        const parts = this.component.name
            .substring(0, this.component.name.length - 'component'.length)
            .match(/[A-Z][a-z]+/g)
            ?.map((x) => x.toLowerCase());
        const filename = (parts?.join('-') + '.component.ts').toLowerCase();
        console.log('getting ', filename);
        const x = this.http
            .get(`/demos/${filename}`, { responseType: 'text' })
            .pipe(
                tap((x) => {
                    const project = structuredClone(STACKBLITZ_PROJECT_OPTIONS);
                    project.files['src/demo.ts'] = x;
                    const selector = 'app-' + parts?.join('-');
                    project.files['src/index.html'] = `<${selector}></${selector}>`;
                    project.files['src/main.ts'] = `
import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { ${this.component.name} } from './demo';

bootstrapApplication(${this.component.name});`;
                    console.log('opening project');
                    sdk.openProject(project, { view: 'preview' });
                })
            )
            .subscribe();
        this.sink.add(x);
    }
}
