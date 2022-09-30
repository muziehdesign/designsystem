import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'design/about' },
    { path: 'buttons2', loadComponent: () => import('./components/buttons/buttons.component').then((b) => b.ButtonsComponent) },
    { path: 'colors2', loadComponent: () => import('./components/colors/colors.component').then((b) => b.ColorsComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
