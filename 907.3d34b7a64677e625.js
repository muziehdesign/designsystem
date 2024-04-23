"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[907],{3907:(M,N,l)=>{l.d(N,{O:()=>R});var S=l(1152),E=l(9315),g=l(7398),f=l(8645),T=l(4552);class x extends f.x{constructor(n=1/0,i=1/0,t=T.l){super(),this._bufferSize=n,this._windowTime=i,this._timestampProvider=t,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=i===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,i)}next(n){const{isStopped:i,_buffer:t,_infiniteTimeWindow:o,_timestampProvider:r,_windowTime:a}=this;i||(t.push(n),!o&&t.push(r.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();const i=this._innerSubscribe(n),{_infiniteTimeWindow:t,_buffer:o}=this,r=o.slice();for(let a=0;a<r.length&&!n.closed;a+=t?1:2)n.next(r[a]);return this._checkFinalizedStatuses(n),i}_trimBuffer(){const{_bufferSize:n,_timestampProvider:i,_buffer:t,_infiniteTimeWindow:o}=this,r=(o?1:2)*n;if(n<1/0&&r<t.length&&t.splice(0,t.length-r),!o){const a=i.now();let c=0;for(let u=1;u<t.length&&t[u]<=a;u+=2)c=u;c&&t.splice(0,c+1)}}}var D=l(3020);const _={title:"Muzieh Design System",description:"Muzieh Design System demo",template:"node",files:{"src/index.html":'<div><a href="https://ruifang.github.io/designsystem/">Muzieh Design System</a></div><app-demo-buttons></app-demo-buttons>',"src/styles.scss":"\n        @import 'tailwindcss/base';\n        @import 'tailwindcss/components';\n        @import 'tailwindcss/utilities';\n\n        @import 'node_modules/muzieh-ngcomponents/design/_base';","src/main.ts":"\n        import './polyfills';\n        import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n        import { AppModule } from './app/app.module';\n\n        platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n            // Ensure Angular destroys itself on hot reloads.\n            if (window['ngRef']) {\n            window['ngRef'].destroy();\n            }\n            window['ngRef'] = ref;\n\n                    // Otherwise, log the boot error\n        }).catch(err => console.error(err));\n        ","src/polyfills.ts":"import 'zone.js/dist/zone';",".stackblitzrc":'\n        {\n          "installDependencies": true,\n          "startCommand": "turbo start",\n          "env": {\n            "ENABLE_CJS_IMPORTS": true\n          }\n        }',"tailwind.config.js":"\n        const colors = require('tailwindcss/colors');\n\nmodule.exports = {\n  prefix: '',\n  content: ['./src/**/*.{html,ts}'],\n  darkMode: 'class', // or 'media' or 'class'\n  theme: {\n    screens: {\n      sm: '576px',\n      md: '768px',\n      lg: '992px',\n      xl: '1200px',\n      '2xl': '1400px',\n    },\n    extend: {\n      colors: {\n        primary: colors.blue[700],\n        secondary: colors.gray[700],\n        success: colors.green[700],\n        warning: colors.yellow[700],\n        danger: colors.red[700],\n      },\n      fontFamily: {\n        sans: [\n          'Roboto',\n          'system-ui',\n          '-apple-system',\n          'ui-sans-serif',\n          'BlinkMacSystemFont',\n          'Helvetica Neue',\n          'Arial',\n          'Noto Sans',\n          'sans-serif',\n        ],\n      },\n    },\n  },\n  variants: {\n    extend: {},\n  },\n  plugins: [],\n};\n        ","angular.json":'\n        {\n          "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n          "version": 1,\n          "cli": {\n            "analytics": false\n          },\n          "newProjectRoot": "projects",\n          "projects": {\n            "demo": {\n              "root": "",\n              "sourceRoot": "src",\n              "projectType": "application",\n              "prefix": "app",\n              "schematics": {\n                "@schematics/angular:component": {\n                  "style": "scss"\n                },\n                "@schematics/angular:application": {\n                  "strict": true\n                }\n              },\n              "architect": {\n                "build": {\n                  "builder": "@angular-devkit/build-angular:browser",\n                  "options": {\n                    "outputPath": "dist/demo",\n                    "index": "src/index.html",\n                    "main": "src/main.ts",\n                    "polyfills": "src/polyfills.ts",\n                    "tsConfig": "tsconfig.app.json",\n                    "inlineStyleLanguage": "scss",\n                    "stylePreprocessorOptions": {\n                      "includePaths": [\n                        "node_modules",\n                        "node_modules/muzieh-ngcomponents"\n                      ]\n                    },\n                    "assets": ["src/favicon.ico", "src/assets"],\n                    "styles": ["src/styles.scss"],\n                    "scripts": []\n                  },\n                  "configurations": {\n                    "production": {\n                      "fileReplacements": [\n                        {\n                          "replace": "src/environments/environment.ts",\n                          "with": "src/environments/environment.prod.ts"\n                        }\n                      ],\n                      "optimization": true,\n                      "outputHashing": "all",\n                      "sourceMap": false,\n                      "extractCss": true,\n                      "namedChunks": false,\n                      "aot": true,\n                      "extractLicenses": true,\n                      "vendorChunk": false,\n                      "buildOptimizer": true\n                    },\n                    "development": {\n                      "buildOptimizer": false,\n                      "optimization": false,\n                      "vendorChunk": true,\n                      "extractLicenses": false,\n                      "sourceMap": true,\n                      "namedChunks": true\n                    }\n                  },\n                  "defaultConfiguration": "production"\n                },\n                "serve": {\n                  "builder": "@angular-devkit/build-angular:dev-server",\n                  "configurations": {\n                    "production": {\n                      "browserTarget": "demo:build:production"\n                    },\n                    "development": {\n                      "browserTarget": "demo:build:development"\n                    }\n                  },\n                  "defaultConfiguration": "development"\n                },\n                "extract-i18n": {\n                  "builder": "@angular-devkit/build-angular:extract-i18n",\n                  "options": {\n                    "browserTarget": "demo:build"\n                  }\n                },\n                "test": {\n                  "builder": "@angular-devkit/build-angular:karma",\n                  "options": {\n                    "main": "src/test.ts",\n                    "polyfills": "src/polyfills.ts",\n                    "tsConfig": "tsconfig.spec.json",\n                    "karmaConfig": "src/karma.conf.js",\n                    "styles": ["src/styles.scss"],\n                    "scripts": [],\n                    "assets": ["src/favicon.ico", "src/assets"]\n                  }\n                },\n                "lint": {\n                  "builder": "@angular-devkit/build-angular:tslint",\n                  "options": {\n                    "tsConfig": ["tsconfig.app.json"],\n                    "exclude": ["**/node_modules/**"]\n                  }\n                }\n              }\n            }\n          },\n          "defaultProject": "demo"\n        }',"tsconfig.json":'\n        {\n            "compileOnSave": false,\n            "compilerOptions": {\n                "baseUrl": "./",\n                "outDir": "./dist/out-tsc",\n                "sourceMap": true,\n                "declaration": false,\n                "downlevelIteration": true,\n                "experimentalDecorators": true,\n                "module": "esnext",\n                "moduleResolution": "node",\n                "importHelpers": true,\n                "target": "es2015",\n                "typeRoots": [\n                "node_modules/@types"\n                ],\n                "lib": [\n                "es2018",\n                "dom"\n                ]\n            },\n            "angularCompilerOptions": {\n                "enableIvy": true,\n                "fullTemplateTypeCheck": true,\n                "strictInjectionParameters": true\n            }\n        }',"tsconfig.app.json":'\n    {\n      "extends": "./tsconfig.json",\n      "compilerOptions": {\n        "outDir": "./out-tsc/app",\n        "types": []\n      },\n      "files": [\n        "src/main.ts",\n        "src/polyfills.ts"\n      ],\n      "include": [\n        "src/**/*.d.ts"\n      ]\n    }',"package.json":'\n    {\n      "name": "example-app",\n      "version": "0.0.0",\n      "scripts": {\n        "ng": "ng",\n        "start": "ng serve",\n        "build": "ng build",\n        "watch": "ng build --watch --configuration development",\n        "test": "ng test"\n      },\n      "private": true,\n      "dependencies": {\n        "@angular/animations": "^16.2.3",\n        "@angular/cdk": "^16.2.2",\n        "@angular/common": "^16.2.3",\n        "@angular/compiler": "^16.2.3",\n        "@angular/core": "^16.2.3",\n        "@angular/forms": "^16.2.3",\n        "@angular/material": "^16.2.2",\n        "@angular/platform-browser": "^16.2.3",\n        "@angular/platform-browser-dynamic": "^16.2.3",\n        "@angular/router": "^16.2.3",\n        "moment": "^2.18.1",\n        "rxjs": "~7.8.0",\n        "subsink": "^1.0.2",\n        "tailwindcss": "^3.1.8",\n        "tslib": "^2.6.2",\n        "zone.js": "^0.13.1"\n      },\n      "devDependencies": {\n        "@angular-devkit/build-angular": "^16.2.1",\n        "@angular/cli": "^16.2.1",\n        "@angular/compiler-cli": "^16.2.3",\n        "@types/jasmine": "~3.10.0",\n        "@types/node": "^12.11.1",\n        "jasmine-core": "~3.10.0",\n        "karma": "~6.3.0",\n        "karma-chrome-launcher": "~3.1.0",\n        "karma-coverage": "~2.0.3",\n        "karma-jasmine": "~4.0.0",\n        "karma-jasmine-html-reporter": "~1.7.0",\n        "muzieh-ngcomponents": "^0.2.947",\n        "typescript": "^4.9.3"\n      }\n    }\n    '}};var k=l(1329),s=l(5879);let v=(()=>{var e;class n{constructor(t){this.viewContainerRef=t}}return(e=n).\u0275fac=function(t){return new(t||e)(s.Y36(s.s_b))},e.\u0275dir=s.lG2({type:e,selectors:[["","appEmbed",""]]}),n})();var C=l(9862),y=l(1506),j=l(6814),O=l(3688),h=l(8615);function P(e,n){}const m=function(e){return[e]};function I(e,n){if(1&e&&(s.TgZ(0,"mat-tab",9)(1,"pre"),s._uU(2,"          "),s._UZ(3,"code",10),s._uU(4,"\n        "),s.qZA()()),2&e){const i=n.$implicit;s.Q6J("label",i.filename),s.xp6(3),s.Q6J("highlight",i.content)("languages",s.VKq(3,m,i.language))}}function b(e,n){if(1&e&&(s.TgZ(0,"div",7)(1,"mat-tab-group"),s.YNc(2,I,5,5,"mat-tab",8),s.ALo(3,"async"),s.qZA()()),2&e){const i=s.oxw();s.xp6(2),s.Q6J("ngForOf",s.lcZ(3,1,i.code$))}}let R=(()=>{var e;class n{constructor(t){this.http=t,this.sink=new k.Y,this.showCode=!1}ngOnInit(){this.embed.viewContainerRef.clear(),this.demoComponent=this.embed.viewContainerRef.createComponent(this.component),this.componentName=this.demoComponent.location.nativeElement.localName.replace("app-",""),this.code$=(0,E.D)([this.http.get(`demos/${this.componentName}.component.ts`,{responseType:"text"}).pipe((0,g.U)(t=>({language:"typescript",content:t,filename:`${this.componentName}.component.ts`}))),this.http.get(`demos/${this.componentName}.component.html`,{responseType:"text"}).pipe((0,g.U)(t=>({language:"html",content:t,filename:`${this.componentName}.component.html`}))),this.http.get(`demos/${this.componentName}.component.scss`,{responseType:"text"}).pipe((0,g.U)(t=>({language:"css",content:t,filename:`${this.componentName}.component.scss`})))]).pipe(function w(e,n,i){let t,o=!1;return e&&"object"==typeof e?({bufferSize:t=1/0,windowTime:n=1/0,refCount:o=!1,scheduler:i}=e):t=e??1/0,(0,D.B)({connector:()=>new x(t,n,i),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}(1))}viewSource(){this.showCode=!this.showCode}openSource(){const t=this.code$?.subscribe(o=>{const r=structuredClone(_),a=(this.componentName?.split("-").map(c=>c[0].toUpperCase()+c.slice(1))+"Component").replace(",","");o.forEach(c=>{r.files[`src/${c.filename}`]=c.content}),r.files["src/index.html"]=`\n<app-${this.componentName}></app-${this.componentName}>\n<div class="block mt-12 mb-8 text-center">\n    <a href="https://ruifang.github.io/designsystem">Muzieh Design System</a>\n</div>\n`,r.files["src/main.ts"]=`\nimport './polyfills';\nimport { bootstrapApplication } from '@angular/platform-browser';\nimport { ${a} } from './${this.componentName}.component';\n\nbootstrapApplication(${a});`,S.Z.openProject(r,{view:"preview",openFile:`src/${this.componentName}.component.ts`})});this.sink.add(t)}}return(e=n).\u0275fac=function(t){return new(t||e)(s.Y36(C.eN))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-demo-container"]],viewQuery:function(t,o){if(1&t&&s.Gf(v,7),2&t){let r;s.iGM(r=s.CRH())&&(o.embed=r.first)}},inputs:{component:"component"},decls:10,vars:1,consts:[[1,"flex","justify-end"],[1,"button","button-icon",3,"click"],["key","code","type","outline"],["key","arrow-top-right-on-square","type","outline"],[1,"bg-white","p-8"],["appEmbed",""],["class","bg-white mt-2",4,"ngIf"],[1,"bg-white","mt-2"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"highlight","languages"]],template:function(t,o){1&t&&(s.TgZ(0,"div",0)(1,"button",1),s.NdJ("click",function(){return o.viewSource()}),s._UZ(2,"mz-svg-icon",2),s._uU(3," Code "),s.qZA(),s.TgZ(4,"button",1),s.NdJ("click",function(){return o.openSource()}),s._UZ(5,"mz-svg-icon",3),s._uU(6,"Stackblitz "),s.qZA()(),s.TgZ(7,"div",4),s.YNc(8,P,0,0,"ng-template",5),s.qZA(),s.YNc(9,b,4,3,"div",6)),2&t&&(s.xp6(9),s.Q6J("ngIf",o.showCode))},dependencies:[y.pn,j.sg,j.O5,O.y$,h.SK,h.R7,v,j.Ov]}),n})()},1152:(M,N,l)=>{l.d(N,{Z:()=>R});var S=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],E={clickToLoad:function(e){return f("ctl",e)},devToolsHeight:function(e){return T("devToolsHeight",e)},forceEmbedLayout:function(e){return f("embed",e)},hideDevTools:function(e){return f("hideDevTools",e)},hideExplorer:function(e){return f("hideExplorer",e)},hideNavigation:function(e){return f("hideNavigation",e)},showSidebar:function(e){return"boolean"==typeof(i=e)?"showSidebar="+(i?"1":"0"):"";var i},openFile:function(e){return(i=e,(Array.isArray(i)?i:[i]).filter(function(t){return"string"==typeof t&&""!==t.trim()}).map(function(t){return"file="+encodeURIComponent(t.trim())})).join("&");var i},terminalHeight:function(e){return T("terminalHeight",e)},theme:function(e){return x("theme",["light","dark"],e)},view:function(e){return x("view",["preview","editor"],e)}};function g(e){void 0===e&&(e={});var n=Object.entries(e).map(function(i){var t=i[0],o=i[1];return null!=o&&E.hasOwnProperty(t)?E[t](o):""}).filter(Boolean);return n.length?"?"+n.join("&"):""}function f(e,n){return!0===n?e+"=1":""}function T(e,n){return"number"==typeof n&&n>=0&&n<=100?e+"="+Math.round(n):""}function x(e,n,i){return"string"==typeof i&&n.includes(i)?e+"="+i:""}function D(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function w(e,n){return""+k(n)+e+g(n)}function _(e,n){var i={forceEmbedLayout:!0};return n&&"object"==typeof n&&Object.assign(i,n),""+k(i)+e+g(i)}function k(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function s(e,n,i){if(!n||!e||!e.parentNode)throw new Error("Invalid Element");var t,o;e.id&&(n.id=e.id),e.className&&(n.className=e.className),t=n,(o=i)&&"object"==typeof o&&(Object.hasOwnProperty.call(o,"height")&&(t.height=""+o.height),Object.hasOwnProperty.call(o,"width")&&(t.width=""+o.width)),t.height||(t.height="300"),t.width||t.setAttribute("style","width:100%;"),e.parentNode.replaceChild(n,e)}function v(e){if("string"==typeof e){var n=document.getElementById(e);if(!n)throw new Error("Could not find element with id '"+e+"'");return n}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function C(e){return e&&!1===e.newWindow?"_self":"_blank"}function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},y.apply(this,arguments)}var j=function(){function e(i){this.port=void 0,this.pending={},this.port=i,this.port.onmessage=this.messageListener.bind(this)}var n=e.prototype;return n.request=function(i){var t=this,o=i.type,r=i.payload,a=D();return new Promise(function(c,u){t.pending[a]={resolve:c,reject:u},t.port.postMessage({type:o,payload:y({},r,{__reqid:a})})})},n.messageListener=function(i){var t,d;if("string"==typeof(null==(t=i.data.payload)?void 0:t.__reqid)){var o=i.data,r=o.type,a=o.payload,c=a.__reqid,u=a.__error;this.pending[c]&&(a.__success?this.pending[c].resolve((delete(d=y({},a)).__reqid,delete d.__success,delete d.__error,Object.keys(d).length?d:null)):this.pending[c].reject(u?r+": "+u:r),delete this.pending[c])}},e}(),O=function(){function e(i,t){var o=this;this._rdc=void 0,this.editor={openFile:function(r){return o._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}})},setCurrentFile:function(r){return o._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}})},setTheme:function(r){return o._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}})},setView:function(r){return o._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}})},showSidebar:function(r){return void 0===r&&(r=!0),o._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})}},this.preview={origin:"",getUrl:function(){return o._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(r){var a;return null!=(a=r?.url)?a:null})},setUrl:function(r){if(void 0===r&&(r="/"),"string"!=typeof r||!r.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+r+"'");return o._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new j(i),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var n=e.prototype;return n.applyFsDiff=function(i){var t=function(o){return null!==o&&"object"==typeof o};if(!t(i)||!t(i.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(i.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:i})},n.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},n.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),h=[],P=function(e){var n=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=D(),this.element=e,this.pending=new Promise(function(i,t){var o=function(p){var d=p.data;"SDK_INIT_SUCCESS"===d?.action&&d.id===n.id&&(n.vm=new O(p.ports[0],d.payload),i(n.vm),a())},r=function(){var p;null==(p=n.element.contentWindow)||p.postMessage({action:"SDK_INIT",id:n.id},"*")};function a(){window.clearInterval(u),window.removeEventListener("message",o)}window.addEventListener("message",o),r();var c=0,u=window.setInterval(function(){if(n.vm)a();else{if(c>=20)return a(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void h.forEach(function(p,d){p.id===n.id&&h.splice(d,1)});c++,r()}},500)}),h.push(this)};function m(e,n){var i=document.createElement("input");return i.type="hidden",i.name=e,i.value=n,i}function I(e){if(!S.includes(e.template)){var n=S.map(function(o){return"'"+o+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+n)}var i="node"===e.template,t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none!important;"),t.appendChild(m("project[title]",e.title)),t.appendChild(m("project[description]",e.description)),t.appendChild(m("project[template]",e.template)),e.dependencies&&(i?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):t.appendChild(m("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&t.appendChild(m("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach(function(o){"string"==typeof e.files[o]&&t.appendChild(m("project[files]["+o+"]",e.files[o]))}),t}function b(e){var n,i,t,o;return null!=e&&e.contentWindow?(o=(i=e)instanceof Element?"element":"id",null!=(n=null!=(t=h.find(function(r){return r[o]===i}))?t:null)?n:new P(e)).pending:Promise.reject("Provided element is not an iframe.")}var R={connect:b,embedGithubProject:function(e,n,i){var t=v(e),o=document.createElement("iframe");return o.src=_("/github/"+n,i),s(t,o,i),b(o)},embedProject:function(e,n,i){var t,u,p,o=v(e),r=(u=i,(p=I(n)).action=_("/run",u),p.id="sb","<html><head><title></title></head><body>"+p.outerHTML+"<script>document.getElementById('"+p.id+"').submit();<\/script></body></html>"),a=document.createElement("iframe");return s(o,a,i),null==(t=a.contentDocument)||t.write(r),b(a)},embedProjectId:function(e,n,i){var t=v(e),o=document.createElement("iframe");return o.src=_("/edit/"+n,i),s(t,o,i),b(o)},openGithubProject:function(e,n){var i=w("/github/"+e,n),t=C(n);window.open(i,t)},openProject:function(e,n){var t,o;t=n,(o=I(e)).action=w("/run",t),o.target=C(t),document.body.appendChild(o),o.submit(),document.body.removeChild(o)},openProjectId:function(e,n){var i=w("/edit/"+e,n),t=C(n);window.open(i,t)}}}}]);