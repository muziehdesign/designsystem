import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from 'muzieh-design';
import { componentRoutes } from './components/components-routes';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'components/about' },
    {
        path: 'components',
        loadComponent: () => import('./components/components.component').then((b) => b.ComponentsComponent),
        children: componentRoutes,
    },
    {
        path: 'patterns',
        loadChildren: () => import('./patterns/patterns-routes').then((x) => x.patternsRoutes),
    },
    {
        path: 'foundations',
        loadChildren: () => import('./foundations/foundations-routes').then((x) => x.foundationsRoutes),
    },
    {
        path: 'styleguide',
        component: StyleGuideComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }), StyleGuideComponent],
    exports: [RouterModule],
})
export class AppRoutingModule {}
