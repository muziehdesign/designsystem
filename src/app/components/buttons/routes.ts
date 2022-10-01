import { Routes } from "@angular/router";
import { DEMONSTRATIONS } from "src/app/demonstration/demonstrations.token";
import { demoOf } from "src/app/demonstration/utilities";
import { ButtonsDemoComponent } from "./demos/buttons-demo.component";

export const buttonRoutes: Routes = [
    {
        path: 'buttons2',
        loadComponent: () => import('./buttons.component').then((b) => b.ButtonsComponent),
        providers: [
            { provide: DEMONSTRATIONS, useValue: demoOf(ButtonsDemoComponent), multi: true },
        ],
    },
];
