import{a as s}from"./chunk-MWRNVHY3.js";import{g as m}from"./chunk-XAGPP3NS.js";import"./chunk-S7ZBELIU.js";import"./chunk-KW42OSGD.js";import"./chunk-4J7264TK.js";import"./chunk-DXKQPQSL.js";import"./chunk-7DT3MKEW.js";import{Cb as t,Db as a,Eb as n,Yb as p,fc as l,na as i}from"./chunk-BXRIWIV5.js";import"./chunk-EQDQRRRY.js";var h=(()=>{let e=class e{constructor(){}ngOnInit(){s.embedProject("page-header-demo",{title:"Angular starter",description:"A basic Node.js project",template:"angular-cli",files:{"index.html":"<app-demo>test</app-demo>","polyfills.ts":"import 'zone.js/dist/zone';","app/app.component.ts":`
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: 'hola',
  styles: [],
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}          
          `,"app/app.module.ts":`
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
          `,"main.ts":`
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
}).catch(err => console.error(err));`,"package.json":`{
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
          }`,view:"preview"}},{clickToLoad:!0,openFile:"app/app.component.ts",terminalHeight:50})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=i({type:e,selectors:[["app-page-header-guidelines"]],standalone:!0,features:[l],decls:8,vars:0,consts:[["pageTitle","Page header"],["id","page-header-demo"],[1,"list-inside","list-disc"]],template:function(o,c){o&1&&(n(0,"mz-page-header",0),t(1,"article")(2,"h2"),p(3,"Best practices"),a(),n(4,"div",1),t(5,"ul",2)(6,"li"),p(7,"Use 2-3 words as page title and document title to help user quickly identify what they're looking at"),a()()())},dependencies:[m]});let r=e;return r})();export{h as PageHeaderGuidelinesComponent};
