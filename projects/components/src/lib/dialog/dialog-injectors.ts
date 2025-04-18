import { InjectionToken } from "@angular/core";
import { MzDialogConfig } from "./mz-dialog.service";

/** Injection token that can be used to provide default options for the dialog module. */
export const DEFAULT_MZ_DIALOG_CONFIG = new InjectionToken<MzDialogConfig>('DefaultMzDialogConfig');

export const MZ_DIALOG_DATA = new InjectionToken<any>('MzDialogData');
