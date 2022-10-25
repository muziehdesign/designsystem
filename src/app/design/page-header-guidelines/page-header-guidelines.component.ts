import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-page-header-guidelines',
  templateUrl: './page-header-guidelines.component.html',
  styleUrls: ['./page-header-guidelines.component.scss']
})
export class PageHeaderGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sdk.embedProject(
      'page-header-demo',
      {
        title: 'Angular starter',
        description: 'A basic Node.js project',
        template: 'angular-cli',
        files: {
          'index.html': `<app-demo>test</app-demo>`,
          'polyfills.ts': `import 'zone.js/dist/zone';`,
          'app/app.component.ts': `
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: 'hola',
  styles: [],
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}          
          `,
          'app/app.module.ts': `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }          
          `,
          'main.ts': `
import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));`,
          'package.json': `{
            "name": "my-project",
            "scripts": { "start": "ng serve" },
            "dependencies": {
              "@angular/animations": "^14.0.0",
              "@angular/common": "^14.0.0",
              "@angular/compiler": "^14.0.0",
              "@angular/core": "^14.0.0",
              "@angular/forms": "^14.0.0",
              "@angular/platform-browser": "^14.0.0",
              "@angular/platform-browser-dynamic": "^14.0.0",
              "@angular/router": "^14.0.0",
              "rxjs": "~7.5.0",
              "tslib": "^2.3.0",
              "zone.js": "~0.11.4"
            },
            "devDependencies": {
              "@angular-devkit/build-angular": "^14.0.0",
              "@angular/cli": "~14.0.0",
              "@angular/compiler-cli": "^14.0.0",
              "@types/jasmine": "~4.0.0",
              "jasmine-core": "~4.1.0",
              "karma": "~6.3.0",
              "karma-chrome-launcher": "~3.1.0",
              "karma-coverage": "~2.2.0",
              "karma-jasmine": "~5.0.0",
              "karma-jasmine-html-reporter": "~1.7.0",
              "typescript": "~4.7.2"
            }
            "stackblitz": { "installDependencies": true, "startCommand": "npm start" },
          }`,
          'view': 'preview'
        },
      },
      {
        clickToLoad: true,
        openFile: 'app/app.component.ts',
        terminalHeight: 50,
      },
    );
  }

}
