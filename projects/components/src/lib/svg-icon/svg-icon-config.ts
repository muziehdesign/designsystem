import { InjectionToken } from "@angular/core";

export interface MzSvgIconOptions {
    svgIconDefinitionUrl: string;
}

export const MZ_SVG_ICON_DEFAULT_OPTIONS = new InjectionToken<MzSvgIconOptions>('MzSvgIconOptions');