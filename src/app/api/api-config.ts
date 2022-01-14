import { InjectionToken } from "@angular/core";

export interface ApiConfig {
    orderApi: {
        url: string;
    }
}

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');