import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { componentRoutes } from './components/component-routes';
import { DEMONSTRATIONS } from './demonstration/demonstrations.token';
import { demoOf } from './demonstration/utilities';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'design/about' },
    {
        path: 'components',
        children: componentRoutes
    },
    { path: 'colors2', loadComponent: () => import('./components/colors/colors.component').then((b) => b.ColorsComponent), providers: [{ provide: DEMONSTRATIONS, useValue: 'colors2', multi: true }] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
