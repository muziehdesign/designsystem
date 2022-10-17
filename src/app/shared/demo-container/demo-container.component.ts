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
    public code:string = "";
    constructor(@Inject(DEMONSTRATIONS) private demonstrations: CodeDemonstration[], private http: HttpClient) {
        console.log('demo container:', demonstrations);
    }

    ngOnInit(): void {
        this.embed.viewContainerRef.clear();
        this.demoComponent = this.embed.viewContainerRef.createComponent(this.component);
        this.code = (<any>this.demoComponent.instance).templateText;
    }

    viewSource() {

    }

    openSource() {
        const parts = this.component.name
            .substring(0, this.component.name.length - 'component'.length)
            .match(/[A-Z][a-z]+/g)
            ?.map((x) => x.toLowerCase());
        const filenameTS = (parts?.join('-') + '.component.ts').toLowerCase();
        const filenameHTML = (parts?.join('-') + '.component.html').toLowerCase();

        forkJoin(
          this.http.get(`/demos/${filenameTS}`, { responseType: 'text' }),
          this.http.get(`/demos/${filenameHTML}`, { responseType: 'text' }))
          .subscribe(([tsFile,htmlFile]) => {
            const project = structuredClone(STACKBLITZ_PROJECT_OPTIONS);
            //Doing this to filter out lines related to the code text for examples
            project.files['src/demo.ts'] = tsFile.split('\n').filter(function(line){ return (line.indexOf("templateText") == -1 && line.indexOf("{ Example }") == -1)})
                                            .join('\n').replace(', Example','').replace(`/${filenameHTML}`,'/demo.html');
            console.log(tsFile.split('\n'));
            project.files['src/demo.html'] = htmlFile;
            const selector = 'app-' + parts?.join('-');
            project.files['src/index.html'] = `<${selector}></${selector}>`;
            project.files['src/main.ts'] = `
import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { ${this.component.name} } from './demo';

bootstrapApplication(${this.component.name});`;
            console.log('opening project');
            sdk.openProject(project, { view: 'preview', openFile: 'src/demo.ts'});
        });
    }
}
