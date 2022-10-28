import { Routes } from '@angular/router';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { demoOf } from 'src/app/demonstration/utilities';
import { ButtonsDemoComponent } from '../../demos/buttons-demo.component';
import { TextInputComponent } from './form-controls/text-input/text-input.component';

export const componentRoutes: Routes = [
    {
        path: 'buttons',
        loadComponent: () => import('./buttons/buttons.component').then((b) => b.ButtonsComponent),
        providers: [{ provide: DEMONSTRATIONS, useValue: demoOf(ButtonsDemoComponent), multi: true }],
    },
    {
        path: 'formcontrols',
        loadComponent: () => import('./form-controls/form-controls.component').then((c) => c.FormControlsComponent),
    },
    {
        path: 'formcontrols/textinput',
        loadComponent: () => import('./form-controls/text-input/text-input.component').then((c) => c.TextInputComponent),
    }
];
