import { InjectionToken } from "@angular/core";
import { MzDrawerConfig } from "./drawer-config";

/** Injection token that can be used to provide default options for the dialog module. */
export const DEFAULT_MZ_DRAWER_CONFIG = new InjectionToken<MzDrawerConfig>('DefaultMzDrawerConfig');

export const MZ_DIALOG_DATA = new InjectionToken<any>('MzDrawerData');
