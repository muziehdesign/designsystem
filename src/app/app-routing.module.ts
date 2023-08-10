import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentRoutes } from './components/components-routes';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'components/about' },
    {
        path: 'components',
        loadComponent: () => import('./components/components.component').then((b) => b.ComponentsComponent),
        children: componentRoutes,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
