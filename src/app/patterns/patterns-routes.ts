import { Routes } from '@angular/router';

export const patternsRoutes: Routes = [
    {
        path: '',
        children: [
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
            {
                path: 'inlineediting',
                loadComponent: () => import('./result-table-inline-editing/result-table-inline-editing.component').then((b) => b.ResultTableInlineEditingComponent),
            },
            {
                path: 'infinitescroll',
                loadComponent: () => import('./infinite-scroll-guidelines/infinite-scroll-guidelines.component').then((b) => b.InfiniteScrollGuidelinesComponent),
            },
        ]
    },
];
