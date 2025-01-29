import { InjectionToken } from "@angular/core";

export interface SvgIconOptions {
    svgIconDefinitionUrl: string;
}

export const SVG_ICON_DEFAULT_OPTIONS = new InjectionToken<SvgIconOptions>('MzSvgIconOptions');