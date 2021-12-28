import { InjectionToken } from "@angular/core";
import { NavigationLink } from "../navigation-links";

export const NAVIGATION_LINK_TOKEN = new InjectionToken<NavigationLink[]>('navigationlinktoken');