import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentRoutes } from './components/components-routes';
import { DEMONSTRATIONS } from './demonstration/demonstrations.token';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'design/about' },
    {
        path: 'components',
        children: componentRoutes
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
