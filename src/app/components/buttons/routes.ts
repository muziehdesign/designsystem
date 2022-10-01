import { Routes } from "@angular/router";
import { DEMONSTRATIONS } from "src/app/demonstration/demonstrations.token";
import { demoOf } from "src/app/demonstration/utilities";
import { ButtonsDemoComponent } from "./demos/buttons-demo.component";

export const buttonRoutes: Routes = [
    {
        path: 'buttons2',
        loadComponent: () => import('./buttons.component').then((b) => b.ButtonsComponent),
        providers: [
            { provide: DEMONSTRATIONS, useValue: {"buttons-demo.component.ts":"import { Component, OnInit } from '@angular/core';@Component({\n  selector: 'app-buttons-demo',\n  template: `\n    <p>\n      buttons-demo works!\n    </p>\n  `,\n  styles: [\n  ]\n})\nexport class ButtonsDemoComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit(): void {\n  }\n\n}\n"}, multi: true },
           // { provide: DEMONSTRATIONS, useValue: undefined, multi: true },
        ],
    },
];
