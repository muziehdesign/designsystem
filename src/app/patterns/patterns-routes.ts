import { Routes } from "@angular/router";

export const patternsRoutes: Routes = [
    {
        path: 'content',
        loadComponent: () => import('./content/content.component').then((b) => b.ContentComponent),
    },
    {
        path: 'form',
        loadComponent: () => import('./form/form.component').then((b) => b.FormComponent),
    },
    {
        path: 'resulttable',
        loadComponent: () => import('./result-table-guidelines/result-table-guidelines.component').then((b) => b.ResultTableGuidelinesComponent),
    },
];