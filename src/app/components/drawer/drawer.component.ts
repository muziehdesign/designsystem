import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanDeactivateComponent, MzDialog, MzDialogModule } from 'muzieh-ngcomponents';
import { DrawerExampleComponent } from './examples/drawer-example.component';

@Component({
    selector: 'app-drawer',
    standalone: true,
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss',
    imports: [MzDialogModule],
    providers: [MzDialog]
})
export class DrawerComponent implements OnInit, CanDeactivateComponent, OnDestroy {
    constructor(private mzDialog: MzDialog) {

    }

    ngOnInit(): void {}

    openDrawer(): void {
        const ref = this.mzDialog.open(DrawerExampleComponent);
    }

    canDeactivate(): boolean {
        return false;
    }

    confirmDeactivation(): boolean {
        return this.mzDialog.confirmDeactivation();
    }

    ngOnDestroy(): void {

    }
}
