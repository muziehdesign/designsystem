import { InjectionToken } from "@angular/core";

export const MZ_PAGINATION_DEFAULT_OPTIONS = new InjectionToken<MzPaginationConfig>('MZ_PAGINATION_DEFAULT_OPTIONS');

export class MzPaginationConfig {
    pageSize: number = 20;
    pageSizeOptions: number[] = [20, 50, 100];
}