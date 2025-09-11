import { DialogConfig } from "@angular/cdk/dialog";
import { InjectionToken } from "@angular/core";

export const MZ_MODAL_DEFAULT_OPTIONS = new InjectionToken<DialogConfig<any>>('MZ_MODAL_DEFAULT_OPTIONS');