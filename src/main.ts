import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfig, APP_CONFIG } from './app-config';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

Promise.all(environment.configurations.map((url) => fetch(url).then((x) => {console.log(x); return x.json() as Partial<AppConfig>;})))
    .then((configs) => Object.assign({}, ...configs) as AppConfig)
    .then((config) => {
        const extraProviders = [{ provide: APP_CONFIG, useValue: Object.freeze(config) }];
        return platformBrowserDynamic(extraProviders)
        .bootstrapModule(AppModule);
    })
    .catch((error) => {
        console.log('failed to bootstrap');
        console.log(error);
    });
