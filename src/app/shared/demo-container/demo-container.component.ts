import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ComponentRef, ElementRef, Inject, InjectionToken, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { forkJoin, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { CodeDemonstration } from 'src/app/demonstration/code-demonstration';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { STACKBLITZ_PROJECT_OPTIONS } from 'src/app/demonstration/stackblitz-options';
import { SubSink } from 'subsink';
import { CodeFile } from '../code-file';
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
    private componentName: string | undefined;
    public showCode = false;
    public code$?: Observable<CodeFile[]>;
    constructor(@Inject(DEMONSTRATIONS) private demonstrations: CodeDemonstration[], private http: HttpClient) {}

    ngOnInit(): void {
        this.embed.viewContainerRef.clear();
        this.demoComponent = this.embed.viewContainerRef.createComponent(this.component);

        this.componentName = this.component.name
            .substring(0, this.component.name.length - 'component'.length)
            .match(/[A-Z][a-z]+/g)
            ?.map((x) => x.toLowerCase())
            .join('-');

        this.code$ = forkJoin([
            this.http.get(`/demos/${this.componentName}.component.ts`, { responseType: 'text' }).pipe(
                map((x) => {
                    return {
                        language: 'typescript',
                        content: x,
                        filename: `${this.componentName}.component.ts`,
                    } as CodeFile;
                })
            ),
            this.http.get(`/demos/${this.componentName}.component.html`, { responseType: 'text' }).pipe(
                map((x) => {
                    return {
                        language: 'html',
                        content: x,
                        filename: `${this.componentName}.component.html`,
                    } as CodeFile;
                })
            ),
            this.http.get(`/demos/${this.componentName}.component.scss`, { responseType: 'text' }).pipe(
                map((x) => {
                    return {
                        language: 'css',
                        content: x,
                        filename: `${this.componentName}.component.scss`,
                    } as CodeFile;
                })
            ),
        ]).pipe(shareReplay(1));
    }

    viewSource() {
        this.showCode = !this.showCode;
    }

    openSource() {
        const s = this.code$?.subscribe((files: CodeFile[]) => {
            const project = structuredClone(STACKBLITZ_PROJECT_OPTIONS);
            files.forEach(file=>{
                project.files[`src/${file.filename}`] = file.content;
            });
            project.files['src/index.html'] = `<app-${this.componentName}></app-${this.componentName}>`;
            project.files['src/main.ts'] = `
import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { ${this.component.name} } from './${this.componentName}.component';

bootstrapApplication(${this.component.name});`;
            sdk.openProject(project, { view: 'preview', openFile: `src/${this.componentName}.component.ts` });
        });
        this.sink.add(s);
    }
}
