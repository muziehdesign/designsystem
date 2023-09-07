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
        path: 'styleguide',
        component: StyleGuideComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }), StyleGuideComponent],
    exports: [RouterModule],
})
export class AppRoutingModule {}
