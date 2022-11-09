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
        this.componentName = this.demoComponent.location.nativeElement.localName.replace('app-', '');

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
            const componentImportName = (
                this.componentName?.split('-').map((element) => {
                    return element[0].toUpperCase() + element.slice(1);
                }) + 'Component'
            ).replace(',', '');
            files.forEach((file) => {
                project.files[`src/${file.filename}`] = file.content;
            });
            project.files['src/index.html'] = `
<app-${this.componentName}></app-${this.componentName}>
<div class="block mt-12 mb-8 text-center">
    <a href="https://ruifang.github.io/kitchensink-ui">Muzieh Design System</a>
</div>
`;
            project.files['src/main.ts'] = `
import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { ${componentImportName} } from './${this.componentName}.component';

bootstrapApplication(${componentImportName});`;
            sdk.openProject(project, { view: 'preview', openFile: `src/${this.componentName}.component.ts` });
        });
        this.sink.add(s);
    }
}
