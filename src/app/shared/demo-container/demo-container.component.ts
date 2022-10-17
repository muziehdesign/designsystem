import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ComponentRef, ElementRef, Inject, InjectionToken, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { forkJoin } from 'rxjs';
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
    private demoComponent: ComponentRef<unknown> | undefined;
    private sink = new SubSink();
    private fileParts: string[] | undefined = [];
    public code: string = '';
    constructor(@Inject(DEMONSTRATIONS) private demonstrations: CodeDemonstration[], private http: HttpClient) {
        console.log('demo container:', demonstrations);
    }

    ngOnInit(): void {
        this.embed.viewContainerRef.clear();
        this.demoComponent = this.embed.viewContainerRef.createComponent(this.component);
        this.fileParts = this.component.name
            .substring(0, this.component.name.length - 'component'.length)
            .match(/[A-Z][a-z]+/g)
            ?.map((x) => x.toLowerCase());
        this.getHtmlFileContent().subscribe((htmlData) => {
            this.code = htmlData;
        });
    }

    getHtmlFileContent() {
        const filenameHTML = (this.fileParts?.join('-') + '.component.html').toLowerCase();
        return this.http.get(`/demos/${filenameHTML}`, { responseType: 'text' });
    }
    viewSource() {}

    openSource() {
        const filenameTS = (this.fileParts?.join('-') + '.component.ts').toLowerCase();
        const filenameHTML = (this.fileParts?.join('-') + '.component.html').toLowerCase();

        const x = this.http
            .get(`/demos/${filenameTS}`, { responseType: 'text' })
            .pipe(
                tap((tsFile) => {
                    const project = structuredClone(STACKBLITZ_PROJECT_OPTIONS);
                    //Doing this to filter out lines related to the code text for examples
                    project.files['src/demo.ts'] = tsFile.replace(`/${filenameHTML}`, '/demo.html');
                    project.files['src/demo.html'] = this.code;
                    const selector = 'app-' + this.fileParts?.join('-');
                    project.files['src/index.html'] = `<${selector}></${selector}>`;
                    project.files['src/main.ts'] = `
import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { ${this.component.name} } from './demo';

bootstrapApplication(${this.component.name});`;
                    console.log('opening project');
                    sdk.openProject(project, { view: 'preview', openFile: 'src/demo.ts' });
                })
            )
            .subscribe();
        this.sink.add(x);
    }
}
