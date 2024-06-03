"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[560],{3179:(W,U,d)=>{d.d(U,{g:()=>o});var k=d(7455),I=d(7468),b=d(6354),g=d(1413),D=d(6129);class O extends g.B{constructor(r=1/0,s=1/0,a=D.U){super(),this._bufferSize=r,this._windowTime=s,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=s===1/0,this._bufferSize=Math.max(1,r),this._windowTime=Math.max(1,s)}next(r){const{isStopped:s,_buffer:a,_infiniteTimeWindow:p,_timestampProvider:l,_windowTime:u}=this;s||(a.push(r),!p&&a.push(l.now()+u)),this._trimBuffer(),super.next(r)}_subscribe(r){this._throwIfClosed(),this._trimBuffer();const s=this._innerSubscribe(r),{_infiniteTimeWindow:a,_buffer:p}=this,l=p.slice();for(let u=0;u<l.length&&!r.closed;u+=a?1:2)r.next(l[u]);return this._checkFinalizedStatuses(r),s}_trimBuffer(){const{_bufferSize:r,_timestampProvider:s,_buffer:a,_infiniteTimeWindow:p}=this,l=(p?1:2)*r;if(r<1/0&&l<a.length&&a.splice(0,a.length-l),!p){const u=s.now();let m=0;for(let h=1;h<a.length&&a[h]<=u;h+=2)m=h;m&&a.splice(0,m+1)}}}var E=d(8750),w=d(7707),_=d(9974);function v(t,r,...s){if(!0===r)return void t();if(!1===r)return;const a=new w.Ms({next:()=>{a.unsubscribe(),t()}});return(0,E.Tg)(r(...s)).subscribe(a)}const T={title:"Muzieh Design System",description:"Muzieh Design System demo",template:"node",files:{"src/index.html":'<div><a href="https://ruifang.github.io/designsystem/">Muzieh Design System</a></div><app-demo-buttons></app-demo-buttons>',"src/styles.scss":"\n        @import 'tailwindcss/base';\n        @import 'tailwindcss/components';\n        @import 'tailwindcss/utilities';\n\n        @import 'node_modules/muzieh-ngcomponents/design/_base';","src/main.ts":"\n        import './polyfills';\n        import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n        import { AppModule } from './app/app.module';\n\n        platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n            // Ensure Angular destroys itself on hot reloads.\n            if (window['ngRef']) {\n            window['ngRef'].destroy();\n            }\n            window['ngRef'] = ref;\n\n                    // Otherwise, log the boot error\n        }).catch(err => console.error(err));\n        ","src/polyfills.ts":"import 'zone.js/dist/zone';",".stackblitzrc":'\n        {\n          "installDependencies": true,\n          "startCommand": "turbo start",\n          "env": {\n            "ENABLE_CJS_IMPORTS": true\n          }\n        }',"tailwind.config.js":"\n        const colors = require('tailwindcss/colors');\n\nmodule.exports = {\n  prefix: '',\n  content: ['./src/**/*.{html,ts}'],\n  darkMode: 'class', // or 'media' or 'class'\n  theme: {\n    screens: {\n      sm: '576px',\n      md: '768px',\n      lg: '992px',\n      xl: '1200px',\n      '2xl': '1400px',\n    },\n    extend: {\n      colors: {\n        primary: colors.blue[700],\n        secondary: colors.gray[700],\n        success: colors.green[700],\n        warning: colors.yellow[700],\n        danger: colors.red[700],\n      },\n      fontFamily: {\n        sans: [\n          'Roboto',\n          'system-ui',\n          '-apple-system',\n          'ui-sans-serif',\n          'BlinkMacSystemFont',\n          'Helvetica Neue',\n          'Arial',\n          'Noto Sans',\n          'sans-serif',\n        ],\n      },\n    },\n  },\n  variants: {\n    extend: {},\n  },\n  plugins: [],\n};\n        ","angular.json":'\n        {\n          "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n          "version": 1,\n          "cli": {\n            "analytics": false\n          },\n          "newProjectRoot": "projects",\n          "projects": {\n            "demo": {\n              "root": "",\n              "sourceRoot": "src",\n              "projectType": "application",\n              "prefix": "app",\n              "schematics": {\n                "@schematics/angular:component": {\n                  "style": "scss"\n                },\n                "@schematics/angular:application": {\n                  "strict": true\n                }\n              },\n              "architect": {\n                "build": {\n                  "builder": "@angular-devkit/build-angular:browser",\n                  "options": {\n                    "outputPath": "dist/demo",\n                    "index": "src/index.html",\n                    "main": "src/main.ts",\n                    "polyfills": "src/polyfills.ts",\n                    "tsConfig": "tsconfig.app.json",\n                    "inlineStyleLanguage": "scss",\n                    "stylePreprocessorOptions": {\n                      "includePaths": [\n                        "node_modules",\n                        "node_modules/muzieh-ngcomponents"\n                      ]\n                    },\n                    "assets": ["src/favicon.ico", "src/assets"],\n                    "styles": ["src/styles.scss"],\n                    "scripts": []\n                  },\n                  "configurations": {\n                    "production": {\n                      "fileReplacements": [\n                        {\n                          "replace": "src/environments/environment.ts",\n                          "with": "src/environments/environment.prod.ts"\n                        }\n                      ],\n                      "optimization": true,\n                      "outputHashing": "all",\n                      "sourceMap": false,\n                      "extractCss": true,\n                      "namedChunks": false,\n                      "aot": true,\n                      "extractLicenses": true,\n                      "vendorChunk": false,\n                      "buildOptimizer": true\n                    },\n                    "development": {\n                      "buildOptimizer": false,\n                      "optimization": false,\n                      "vendorChunk": true,\n                      "extractLicenses": false,\n                      "sourceMap": true,\n                      "namedChunks": true\n                    }\n                  },\n                  "defaultConfiguration": "production"\n                },\n                "serve": {\n                  "builder": "@angular-devkit/build-angular:dev-server",\n                  "configurations": {\n                    "production": {\n                      "browserTarget": "demo:build:production"\n                    },\n                    "development": {\n                      "browserTarget": "demo:build:development"\n                    }\n                  },\n                  "defaultConfiguration": "development"\n                },\n                "extract-i18n": {\n                  "builder": "@angular-devkit/build-angular:extract-i18n",\n                  "options": {\n                    "browserTarget": "demo:build"\n                  }\n                },\n                "test": {\n                  "builder": "@angular-devkit/build-angular:karma",\n                  "options": {\n                    "main": "src/test.ts",\n                    "polyfills": "src/polyfills.ts",\n                    "tsConfig": "tsconfig.spec.json",\n                    "karmaConfig": "src/karma.conf.js",\n                    "styles": ["src/styles.scss"],\n                    "scripts": [],\n                    "assets": ["src/favicon.ico", "src/assets"]\n                  }\n                },\n                "lint": {\n                  "builder": "@angular-devkit/build-angular:tslint",\n                  "options": {\n                    "tsConfig": ["tsconfig.app.json"],\n                    "exclude": ["**/node_modules/**"]\n                  }\n                }\n              }\n            }\n          },\n          "defaultProject": "demo"\n        }',"tsconfig.json":'\n        {\n            "compileOnSave": false,\n            "compilerOptions": {\n                "baseUrl": "./",\n                "outDir": "./dist/out-tsc",\n                "sourceMap": true,\n                "declaration": false,\n                "downlevelIteration": true,\n                "experimentalDecorators": true,\n                "module": "esnext",\n                "moduleResolution": "node",\n                "importHelpers": true,\n                "target": "es2015",\n                "typeRoots": [\n                "node_modules/@types"\n                ],\n                "lib": [\n                "es2018",\n                "dom"\n                ]\n            },\n            "angularCompilerOptions": {\n                "enableIvy": true,\n                "fullTemplateTypeCheck": true,\n                "strictInjectionParameters": true\n            }\n        }',"tsconfig.app.json":'\n    {\n      "extends": "./tsconfig.json",\n      "compilerOptions": {\n        "outDir": "./out-tsc/app",\n        "types": []\n      },\n      "files": [\n        "src/main.ts",\n        "src/polyfills.ts"\n      ],\n      "include": [\n        "src/**/*.d.ts"\n      ]\n    }',"package.json":'\n    {\n      "name": "example-app",\n      "version": "0.0.0",\n      "scripts": {\n        "ng": "ng",\n        "start": "ng serve",\n        "build": "ng build",\n        "watch": "ng build --watch --configuration development",\n        "test": "ng test"\n      },\n      "private": true,\n      "dependencies": {\n        "@angular/animations": "^16.2.3",\n        "@angular/cdk": "^16.2.2",\n        "@angular/common": "^16.2.3",\n        "@angular/compiler": "^16.2.3",\n        "@angular/core": "^16.2.3",\n        "@angular/forms": "^16.2.3",\n        "@angular/material": "^16.2.2",\n        "@angular/platform-browser": "^16.2.3",\n        "@angular/platform-browser-dynamic": "^16.2.3",\n        "@angular/router": "^16.2.3",\n        "moment": "^2.18.1",\n        "rxjs": "~7.8.0",\n        "subsink": "^1.0.2",\n        "tailwindcss": "^3.1.8",\n        "tslib": "^2.6.2",\n        "zone.js": "^0.13.1"\n      },\n      "devDependencies": {\n        "@angular-devkit/build-angular": "^16.2.1",\n        "@angular/cli": "^16.2.1",\n        "@angular/compiler-cli": "^16.2.3",\n        "@types/jasmine": "~3.10.0",\n        "@types/node": "^12.11.1",\n        "jasmine-core": "~3.10.0",\n        "karma": "~6.3.0",\n        "karma-chrome-launcher": "~3.1.0",\n        "karma-coverage": "~2.0.3",\n        "karma-jasmine": "~4.0.0",\n        "karma-jasmine-html-reporter": "~1.7.0",\n        "muzieh-ngcomponents": "^0.2.947",\n        "typescript": "^4.9.3"\n      }\n    }\n    '}};var j=d(7575),c=d(4438);let N=(()=>{class t{constructor(s){this.viewContainerRef=s}static#e=this.\u0275fac=function(a){return new(a||t)(c.rXU(c.c1b))};static#t=this.\u0275dir=c.FsC({type:t,selectors:[["","appEmbed",""]]})}return t})();var C=d(1626),G=d(6542),f=d(177),R=d(4896),y=d(6850);const B=t=>[t];function e(t,r){}function n(t,r){if(1&t&&(c.j41(0,"mat-tab",9)(1,"pre"),c.EFF(2,"          "),c.nrm(3,"code",10),c.EFF(4,"\n        "),c.k0s()()),2&t){const s=r.$implicit;c.Y8G("label",s.filename),c.R7$(3),c.Y8G("highlight",s.content)("languages",c.eq3(3,B,s.language))}}function i(t,r){if(1&t&&(c.j41(0,"div",7)(1,"mat-tab-group"),c.DNE(2,n,5,5,"mat-tab",8),c.nI1(3,"async"),c.k0s()()),2&t){const s=c.XpG();c.R7$(2),c.Y8G("ngForOf",c.bMT(3,1,s.code$))}}let o=(()=>{class t{constructor(s){this.http=s,this.sink=new j.a,this.showCode=!1}ngOnInit(){this.embed.viewContainerRef.clear(),this.demoComponent=this.embed.viewContainerRef.createComponent(this.component),this.componentName=this.demoComponent.location.nativeElement.localName.replace("app-",""),this.code$=(0,I.p)([this.http.get(`demos/${this.componentName}.component.ts`,{responseType:"text"}).pipe((0,b.T)(s=>({language:"typescript",content:s,filename:`${this.componentName}.component.ts`}))),this.http.get(`demos/${this.componentName}.component.html`,{responseType:"text"}).pipe((0,b.T)(s=>({language:"html",content:s,filename:`${this.componentName}.component.html`}))),this.http.get(`demos/${this.componentName}.component.scss`,{responseType:"text"}).pipe((0,b.T)(s=>({language:"css",content:s,filename:`${this.componentName}.component.scss`})))]).pipe(function S(t,r,s){let a,p=!1;return t&&"object"==typeof t?({bufferSize:a=1/0,windowTime:r=1/0,refCount:p=!1,scheduler:s}=t):a=t??1/0,function P(t={}){const{connector:r=(()=>new g.B),resetOnError:s=!0,resetOnComplete:a=!0,resetOnRefCountZero:p=!0}=t;return l=>{let u,m,h,F=0,M=!1,z=!1;const A=()=>{m?.unsubscribe(),m=void 0},K=()=>{A(),u=h=void 0,M=z=!1},q=()=>{const x=u;K(),x?.unsubscribe()};return(0,_.N)((x,H)=>{F++,!z&&!M&&A();const $=h=h??r();H.add(()=>{F--,0===F&&!z&&!M&&(m=v(q,p))}),$.subscribe(H),!u&&F>0&&(u=new w.Ms({next:L=>$.next(L),error:L=>{z=!0,A(),m=v(K,s,L),$.error(L)},complete:()=>{M=!0,A(),m=v(K,a),$.complete()}}),(0,E.Tg)(x).subscribe(u))})(l)}}({connector:()=>new O(a,r,s),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:p})}(1))}viewSource(){this.showCode=!this.showCode}openSource(){const s=this.code$?.subscribe(a=>{const p=structuredClone(T),l=(this.componentName?.split("-").map(u=>u[0].toUpperCase()+u.slice(1))+"Component").replace(",","");a.forEach(u=>{p.files[`src/${u.filename}`]=u.content}),p.files["src/index.html"]=`\n<app-${this.componentName}></app-${this.componentName}>\n<div class="block mt-12 mb-8 text-center">\n    <a href="https://ruifang.github.io/designsystem">Muzieh Design System</a>\n</div>\n`,p.files["src/main.ts"]=`\nimport './polyfills';\nimport { bootstrapApplication } from '@angular/platform-browser';\nimport { ${l} } from './${this.componentName}.component';\n\nbootstrapApplication(${l});`,k.A.openProject(p,{view:"preview",openFile:`src/${this.componentName}.component.ts`})});this.sink.add(s)}static#e=this.\u0275fac=function(a){return new(a||t)(c.rXU(C.Qq))};static#t=this.\u0275cmp=c.VBU({type:t,selectors:[["app-demo-container"]],viewQuery:function(a,p){if(1&a&&c.GBs(N,7),2&a){let l;c.mGM(l=c.lsd())&&(p.embed=l.first)}},inputs:{component:"component"},decls:10,vars:1,consts:[[1,"flex","justify-end"],[1,"button","button-icon",3,"click"],["key","code","type","outline"],["key","arrow-top-right-on-square","type","outline"],[1,"bg-white","p-8"],["appEmbed",""],["class","bg-white mt-2",4,"ngIf"],[1,"bg-white","mt-2"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"highlight","languages"]],template:function(a,p){1&a&&(c.j41(0,"div",0)(1,"button",1),c.bIt("click",function(){return p.viewSource()}),c.nrm(2,"mz-svg-icon",2),c.EFF(3," Code "),c.k0s(),c.j41(4,"button",1),c.bIt("click",function(){return p.openSource()}),c.nrm(5,"mz-svg-icon",3),c.EFF(6,"Stackblitz "),c.k0s()(),c.j41(7,"div",4),c.DNE(8,e,0,0,"ng-template",5),c.k0s(),c.DNE(9,i,4,3,"div",6)),2&a&&(c.R7$(9),c.Y8G("ngIf",p.showCode))},dependencies:[G.DM,f.Sq,f.bT,R.f4,y.mq,y.T8,N,f.Jj]})}return t})()},7455:(W,U,d)=>{d.d(U,{A:()=>B});var k=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],I={clickToLoad:function(e){return g("ctl",e)},devToolsHeight:function(e){return D("devToolsHeight",e)},forceEmbedLayout:function(e){return g("embed",e)},hideDevTools:function(e){return g("hideDevTools",e)},hideExplorer:function(e){return g("hideExplorer",e)},hideNavigation:function(e){return g("hideNavigation",e)},showSidebar:function(e){return"boolean"==typeof(i=e)?"showSidebar="+(i?"1":"0"):"";var i},openFile:function(e){return(i=e,(Array.isArray(i)?i:[i]).filter(function(o){return"string"==typeof o&&""!==o.trim()}).map(function(o){return"file="+encodeURIComponent(o.trim())})).join("&");var i},terminalHeight:function(e){return D("terminalHeight",e)},theme:function(e){return O("theme",["light","dark"],e)},view:function(e){return O("view",["preview","editor"],e)}};function b(e){void 0===e&&(e={});var n=Object.entries(e).map(function(i){var o=i[0],t=i[1];return null!=t&&I.hasOwnProperty(o)?I[o](t):""}).filter(Boolean);return n.length?"?"+n.join("&"):""}function g(e,n){return!0===n?e+"=1":""}function D(e,n){return"number"==typeof n&&n>=0&&n<=100?e+"="+Math.round(n):""}function O(e,n,i){return"string"==typeof i&&n.includes(i)?e+"="+i:""}function E(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function w(e,n){return""+P(n)+e+b(n)}function _(e,n){var i={forceEmbedLayout:!0};return n&&"object"==typeof n&&Object.assign(i,n),""+P(i)+e+b(i)}function P(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function v(e,n,i){if(!n||!e||!e.parentNode)throw new Error("Invalid Element");var o,t;e.id&&(n.id=e.id),e.className&&(n.className=e.className),o=n,(t=i)&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(o.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(o.width=""+t.width)),o.height||(o.height="300"),o.width||o.setAttribute("style","width:100%;"),e.parentNode.replaceChild(n,e)}function S(e){if("string"==typeof e){var n=document.getElementById(e);if(!n)throw new Error("Could not find element with id '"+e+"'");return n}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function T(e){return e&&!1===e.newWindow?"_self":"_blank"}function j(){return j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},j.apply(this,arguments)}var c=function(){function e(i){this.port=void 0,this.pending={},this.port=i,this.port.onmessage=this.messageListener.bind(this)}var n=e.prototype;return n.request=function(i){var o=this,t=i.type,r=i.payload,s=E();return new Promise(function(a,p){o.pending[s]={resolve:a,reject:p},o.port.postMessage({type:t,payload:j({},r,{__reqid:s})})})},n.messageListener=function(i){var o,u;if("string"==typeof(null==(o=i.data.payload)?void 0:o.__reqid)){var t=i.data,r=t.type,s=t.payload,a=s.__reqid,p=s.__error;this.pending[a]&&(s.__success?this.pending[a].resolve((delete(u=j({},s)).__reqid,delete u.__success,delete u.__error,Object.keys(u).length?u:null)):this.pending[a].reject(p?r+": "+p:r),delete this.pending[a])}},e}(),N=function(){function e(i,o){var t=this;this._rdc=void 0,this.editor={openFile:function(r){return t._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}})},setCurrentFile:function(r){return t._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}})},setTheme:function(r){return t._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}})},setView:function(r){return t._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}})},showSidebar:function(r){return void 0===r&&(r=!0),t._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})}},this.preview={origin:"",getUrl:function(){return t._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(r){var s;return null!=(s=r?.url)?s:null})},setUrl:function(r){if(void 0===r&&(r="/"),"string"!=typeof r||!r.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+r+"'");return t._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new c(i),Object.defineProperty(this.preview,"origin",{value:"string"==typeof o.previewOrigin?o.previewOrigin:null,writable:!1})}var n=e.prototype;return n.applyFsDiff=function(i){var o=function(t){return null!==t&&"object"==typeof t};if(!o(i)||!o(i.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(i.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:i})},n.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},n.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),C=[],G=function(e){var n=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=E(),this.element=e,this.pending=new Promise(function(i,o){var t=function(l){var u=l.data;"SDK_INIT_SUCCESS"===u?.action&&u.id===n.id&&(n.vm=new N(l.ports[0],u.payload),i(n.vm),s())},r=function(){var l;null==(l=n.element.contentWindow)||l.postMessage({action:"SDK_INIT",id:n.id},"*")};function s(){window.clearInterval(p),window.removeEventListener("message",t)}window.addEventListener("message",t),r();var a=0,p=window.setInterval(function(){if(n.vm)s();else{if(a>=20)return s(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),void C.forEach(function(l,u){l.id===n.id&&C.splice(u,1)});a++,r()}},500)}),C.push(this)};function f(e,n){var i=document.createElement("input");return i.type="hidden",i.name=e,i.value=n,i}function R(e){if(!k.includes(e.template)){var n=k.map(function(t){return"'"+t+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+n)}var i="node"===e.template,o=document.createElement("form");return o.method="POST",o.setAttribute("style","display:none!important;"),o.appendChild(f("project[title]",e.title)),o.appendChild(f("project[description]",e.description)),o.appendChild(f("project[template]",e.template)),e.dependencies&&(i?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o.appendChild(f("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&o.appendChild(f("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach(function(t){"string"==typeof e.files[t]&&o.appendChild(f("project[files]["+t+"]",e.files[t]))}),o}function y(e){var n,i,o,t;return null!=e&&e.contentWindow?(t=(i=e)instanceof Element?"element":"id",null!=(n=null!=(o=C.find(function(r){return r[t]===i}))?o:null)?n:new G(e)).pending:Promise.reject("Provided element is not an iframe.")}var B={connect:y,embedGithubProject:function(e,n,i){var o=S(e),t=document.createElement("iframe");return t.src=_("/github/"+n,i),v(o,t,i),y(t)},embedProject:function(e,n,i){var o,p,l,t=S(e),r=(p=i,(l=R(n)).action=_("/run",p),l.id="sb","<html><head><title></title></head><body>"+l.outerHTML+"<script>document.getElementById('"+l.id+"').submit();<\/script></body></html>"),s=document.createElement("iframe");return v(t,s,i),null==(o=s.contentDocument)||o.write(r),y(s)},embedProjectId:function(e,n,i){var o=S(e),t=document.createElement("iframe");return t.src=_("/edit/"+n,i),v(o,t,i),y(t)},openGithubProject:function(e,n){var i=w("/github/"+e,n),o=T(n);window.open(i,o)},openProject:function(e,n){var o,t;o=n,(t=R(e)).action=w("/run",o),t.target=T(o),document.body.appendChild(t),t.submit(),document.body.removeChild(t)},openProjectId:function(e,n){var i=w("/edit/"+e,n),o=T(n);window.open(i,o)}}}}]);