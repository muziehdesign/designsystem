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
        children: [
            {
                path: '',
                loadComponent: () => import('./form-controls/form-controls.component').then((c) => c.FormControlsComponent),
            },
            {
                path: 'textinput',
                loadComponent: () => import('./form-controls/text-input/text-input.component').then((c) => c.TextInputComponent),
            },
            {
                path: 'textarea',
                loadComponent: () => import('./form-controls/textarea/textarea.component').then((c) => c.TextareaComponent),
            },
            {
                path: 'select',
                loadComponent: () => import('./form-controls/select/select.component').then((c) => c.SelectComponent),
            },
            {
                path: 'radio',
                loadComponent: () => import('./form-controls/radio/radio.component').then((c) => c.RadioComponent),
            },
            {
                path: 'checkbox',
                loadComponent: () => import('./form-controls/checkbox/checkbox.component').then((c) => c.CheckboxComponent),
            }
        ],
    },
];
