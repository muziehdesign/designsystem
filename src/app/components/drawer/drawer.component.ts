import { Component, OnDestroy, OnInit } from '@angular/core';
import { CanDeactivateComponent, MzDrawer, MzDrawerModule } from '@muziehdesign/components';
import { DrawerExampleComponent } from './examples/drawer-example.component';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss',
    imports: [MzDrawerModule],
    providers: [MzDrawer]
})
export class DrawerComponent implements OnInit, CanDeactivateComponent, OnDestroy {
    constructor(private mzDrawer: MzDrawer) {

    }

    ngOnInit(): void {}

    openDrawer(): void {
        const ref = this.mzDrawer.open(DrawerExampleComponent);
    }

    canDeactivate(): boolean {
        return false;
    }

    confirmDeactivation(): boolean {
        return this.mzDrawer.confirmDeactivation();
    }

    ngOnDestroy(): void {

    }
}
