import { Component, input } from '@angular/core';
import { MzDrawerRef } from '../drawer-ref';

@Component({
    selector: 'mz-drawer-header',
    imports: [],
    templateUrl: './drawer-header.component.html',
    styleUrl: './drawer-header.component.scss',
})
export class MzDrawerHeader {
    title = input<string>('');

    constructor(private drawerRef: MzDrawerRef<any>) {}

    protected close(e: UIEvent) {
        this.drawerRef.tryClose(undefined, { focusOrigin: e.detail === 0 ? 'keyboard' : 'mouse' });
    }

    protected get disableClose(): boolean {
        return this.drawerRef.disableClose ?? false;
    }
}
