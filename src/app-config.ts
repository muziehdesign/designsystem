import { InjectionToken } from "@angular/core";

export interface AppConfig {
    application: {
        name: string;
    };
    logging: {
        minimumLevel: string;
    };
    marketplaceApi: {
        url: string;
    };
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');