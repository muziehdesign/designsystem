import { Params } from '@angular/router';

// TODO: date handling
// TODO: date range

export class ParamsUtility {
    public static convertToParams<T>(model: T): Params {
        return Object.assign({}, model);
    }
    public static convertFromParams<T>(params: Params) : T {
        return Object.assign({}, params) as T;
    }
}