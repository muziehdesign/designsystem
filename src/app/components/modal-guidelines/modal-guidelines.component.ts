import { Component, OnDestroy } from '@angular/core';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';
import { Dialog } from '@angular/cdk/dialog';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
    selector: 'app-modal-guidelines',
    templateUrl: './modal-guidelines.component.html',
    styleUrls: ['./modal-guidelines.component.scss'],
    standalone: true,
    imports: [],
})
export class ModalGuidelinesComponent implements OnDestroy {

    constructor(private dialog: Dialog, private overlay: Overlay) {}

    open(): void {
        const ref = this.dialog.open(ModalAddOrderComponent, {
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
        ref.closed.subscribe(x=>{
            console.log('result: ', x);
        });
    }

    ngOnDestroy(): void {
    }
}
