import { Params } from '@angular/router';

// TODO: date handling
// TODO: date range

export function convertToParams<T>(model: T): Params {
    return Object.assign({}, model);
}

export function convertFromParams<T>(params: Params) : T {
    return Object.assign({}, params) as T;
}