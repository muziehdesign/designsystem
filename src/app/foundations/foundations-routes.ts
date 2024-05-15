import { Routes } from "@angular/router";

export const foundationsRoutes: Routes = [
    {
        path: 'accessibility',
        loadComponent: () => import('./accessibility/accessibility.component').then((b) => b.AccessibilityComponent),
    },
    {
        path: 'colors',
        loadComponent: () => import('./color/color.component').then((b) => b.ColorComponent),
    },
    {
        path: 'grid',
        loadComponent: () => import('./grid/grid.component').then((b) => b.GridComponent),
    },
    {
        path: 'breakpoints',
        loadComponent: () => import('./breakpoints/breakpoints.component').then((b) => b.BreakpointsComponent),
    },
    {
        path: 'iconography',
        loadComponent: () => import('./iconography/iconography.component').then((b) => b.IconographyComponent),
    },
    {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component').then((b) => b.TypographyComponent),
    },
];