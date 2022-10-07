import { Project } from "@stackblitz/sdk";


export const STACKBLITZ_PROJECT_OPTIONS = <Project> {
    title: 'Muzieh Design System',
    description: 'Muzieh Design System demo',
    template: 'angular-cli',
    files: {
        'src/index.html': `<div><a href="https://ruifang.github.io/kitchensink-ui/">Muzieh Design System</a></div><app-demo-buttons></app-demo-buttons>`,
        'src/styles.scss': ``,
        'src/main.ts': `

import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
    window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
}).catch(err => console.error(err));

        `,
        'src/polyfills.ts': `import 'zone.js/dist/zone';`,
        'tailwind.config.js': `
        module.exports = {
            content: [],
            theme: {
              extend: {},
            },
            plugins: [],
          }
        `,
        'angular.json': `
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
        "demo": {
        "root": "",
        "sourceRoot": "src",
        "projectType": "application",
        "prefix": "app",
        "schematics": {},
        "architect": {
            "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
                "outputPath": "dist/demo",
                "index": "src/index.html",
                "main": "src/main.ts",
                "polyfills": "src/polyfills.ts",
                "tsConfig": "src/tsconfig.app.json",
                "inlineStyleLanguage": "scss",
                "stylePreprocessorOptions": {
                    "includePaths": ["node_modules/muzieh-ngcomponents"]
                },
                "assets": [
                "src/favicon.ico",
                "src/assets"
                ],
                "styles": [
                "src/styles.scss"
                ],
                "scripts": []
            },
            "configurations": {
                "production": {
                "fileReplacements": [
                    {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.prod.ts"
                    }
                ],
                "optimization": true,
                "outputHashing": "all",
                "sourceMap": false,
                "extractCss": true,
                "namedChunks": false,
                "aot": true,
                "extractLicenses": true,
                "vendorChunk": false,
                "buildOptimizer": true
                }
            }
            },
            "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "options": {
                "browserTarget": "demo:build"
            },
            "configurations": {
                "production": {
                "browserTarget": "demo:build:production"
                }
            }
            },
            "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n",
            "options": {
                "browserTarget": "demo:build"
            }
            },
            "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
                "main": "src/test.ts",
                "polyfills": "src/polyfills.ts",
                "tsConfig": "src/tsconfig.spec.json",
                "karmaConfig": "src/karma.conf.js",
                "styles": [
                "styles.css"
                ],
                "scripts": [],
                "assets": [
                "src/favicon.ico",
                "src/assets"
                ]
            }
            },
            "lint": {
            "builder": "@angular-devkit/build-angular:tslint",
            "options": {
                "tsConfig": [
                "src/tsconfig.app.json",
                "src/tsconfig.spec.json"
                ],
                "exclude": [
                "**/node_modules/**"
                ]
            }
            }
        }
        }
    },
    "defaultProject": "demo"
    }
        `,
        'tsconfig.json': `
{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./",
        "outDir": "./dist/out-tsc",
        "sourceMap": true,
        "declaration": false,
        "downlevelIteration": true,
        "experimentalDecorators": true,
        "module": "esnext",
        "moduleResolution": "node",
        "importHelpers": true,
        "target": "es2015",
        "typeRoots": [
        "node_modules/@types"
        ],
        "lib": [
        "es2018",
        "dom"
        ]
    },
    "angularCompilerOptions": {
        "enableIvy": true,
        "fullTemplateTypeCheck": true,
        "strictInjectionParameters": true
    }
}
        `
    },
    dependencies: {
        "@angular/animations": "^14.2.4",
        "@angular/cdk": "^14.2.3",
        "@angular/common": "^14.2.4",
        "@angular/compiler": "^14.2.4",
        "@angular/core": "^14.2.4",
        "@angular/forms": "^14.2.4",
        "@angular/platform-browser": "^14.2.4",
        "@angular/platform-browser-dynamic": "^14.2.4",
        "@angular/material": "^14.2.3",
        "@angular/router": "^14.2.4",
        "muzieh-ngcomponents": "^0.2.0",
        "rxjs": "~7.5.0",
        "subsink": "^1.0.2",
        "tailwindcss": "^3.0.15",
        "tslib": "^2.3.0",
        "zone.js": "~0.11.4"
    }
};