import { Project } from "@stackblitz/sdk";


export const STACKBLITZ_PROJECT_OPTIONS = <Project> {
    title: 'Muzieh Design System',
    description: 'Muzieh Design System demo',
    template: 'node',
    files: {
        'src/index.html': `<div><a href="https://ruifang.github.io/designsystem/">Muzieh Design System</a></div><app-demo-buttons></app-demo-buttons>`,
        'src/styles.scss': `
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';

        @import 'node_modules/muzieh-ngcomponents/design/_base';`,
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
        '.stackblitzrc': `
        {
          "installDependencies": true,
          "startCommand": "turbo start",
          "env": {
            "ENABLE_CJS_IMPORTS": true
          }
        }`,
        'tailwind.config.js': `
        const colors = require('tailwindcss/colors');

module.exports = {
  prefix: '',
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        primary: colors.blue[700],
        secondary: colors.gray[700],
        success: colors.green[700],
        warning: colors.yellow[700],
        danger: colors.red[700],
      },
      fontFamily: {
        sans: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'ui-sans-serif',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
        `,
        'angular.json': `
        {
          "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
          "version": 1,
          "cli": {
            "analytics": false
          },
          "newProjectRoot": "projects",
          "projects": {
            "demo": {
              "root": "",
              "sourceRoot": "src",
              "projectType": "application",
              "prefix": "app",
              "schematics": {
                "@schematics/angular:component": {
                  "style": "scss"
                },
                "@schematics/angular:application": {
                  "strict": true
                }
              },
              "architect": {
                "build": {
                  "builder": "@angular-devkit/build-angular:browser",
                  "options": {
                    "outputPath": "dist/demo",
                    "index": "src/index.html",
                    "main": "src/main.ts",
                    "polyfills": "src/polyfills.ts",
                    "tsConfig": "tsconfig.app.json",
                    "inlineStyleLanguage": "scss",
                    "stylePreprocessorOptions": {
                      "includePaths": [
                        "node_modules",
                        "node_modules/muzieh-ngcomponents"
                      ]
                    },
                    "assets": ["src/favicon.ico", "src/assets"],
                    "styles": ["src/styles.scss"],
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
                    },
                    "development": {
                      "buildOptimizer": false,
                      "optimization": false,
                      "vendorChunk": true,
                      "extractLicenses": false,
                      "sourceMap": true,
                      "namedChunks": true
                    }
                  },
                  "defaultConfiguration": "production"
                },
                "serve": {
                  "builder": "@angular-devkit/build-angular:dev-server",
                  "configurations": {
                    "production": {
                      "browserTarget": "demo:build:production"
                    },
                    "development": {
                      "browserTarget": "demo:build:development"
                    }
                  },
                  "defaultConfiguration": "development"
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
                    "tsConfig": "tsconfig.spec.json",
                    "karmaConfig": "src/karma.conf.js",
                    "styles": ["src/styles.scss"],
                    "scripts": [],
                    "assets": ["src/favicon.ico", "src/assets"]
                  }
                },
                "lint": {
                  "builder": "@angular-devkit/build-angular:tslint",
                  "options": {
                    "tsConfig": ["tsconfig.app.json"],
                    "exclude": ["**/node_modules/**"]
                  }
                }
              }
            }
          },
          "defaultProject": "demo"
        }`,
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
        }`,
    'tsconfig.app.json': `
    {
      "extends": "./tsconfig.json",
      "compilerOptions": {
        "outDir": "./out-tsc/app",
        "types": []
      },
      "files": [
        "src/main.ts",
        "src/polyfills.ts"
      ],
      "include": [
        "src/**/*.d.ts"
      ]
    }`,
    'package.json': `
    {
      "name": "example-app",
      "version": "0.0.0",
      "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "watch": "ng build --watch --configuration development",
        "test": "ng test"
      },
      "private": true,
      "dependencies": {
        "@angular/animations": "^16.2.3",
        "@angular/cdk": "^16.2.2",
        "@angular/common": "^16.2.3",
        "@angular/compiler": "^16.2.3",
        "@angular/core": "^16.2.3",
        "@angular/forms": "^16.2.3",
        "@angular/material": "^16.2.2",
        "@angular/platform-browser": "^16.2.3",
        "@angular/platform-browser-dynamic": "^16.2.3",
        "@angular/router": "^16.2.3",
        "moment": "^2.18.1",
        "rxjs": "~7.8.0",
        "subsink": "^1.0.2",
        "tailwindcss": "^3.1.8",
        "tslib": "^2.6.2",
        "zone.js": "^0.13.1"
      },
      "devDependencies": {
        "@angular-devkit/build-angular": "^16.2.1",
        "@angular/cli": "^16.2.1",
        "@angular/compiler-cli": "^16.2.3",
        "@types/jasmine": "~3.10.0",
        "@types/node": "^12.11.1",
        "jasmine-core": "~3.10.0",
        "karma": "~6.3.0",
        "karma-chrome-launcher": "~3.1.0",
        "karma-coverage": "~2.0.3",
        "karma-jasmine": "~4.0.0",
        "karma-jasmine-html-reporter": "~1.7.0",
        "muzieh-ngcomponents": "^0.2.947",
        "typescript": "^4.9.3"
      }
    }
    `
}
}
