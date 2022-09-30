import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DEMONSTRATIONS } from './demonstration/demonstrations.token';
import { demoOf } from './demonstration/utilities';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'design/about' },
    {
        path: 'buttons2',
        loadComponent: () => import('./components/buttons/buttons.component').then((b) => b.ButtonsComponent),
        providers: [
            { provide: DEMONSTRATIONS, useValue: demoOf(ButtonsComponent), multi: true },
            { provide: DEMONSTRATIONS, useValue: 'another button', multi: true },
        ],
    },
    { path: 'colors2', loadComponent: () => import('./components/colors/colors.component').then((b) => b.ColorsComponent), providers: [{ provide: DEMONSTRATIONS, useValue: 'colors2', multi: true }] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
