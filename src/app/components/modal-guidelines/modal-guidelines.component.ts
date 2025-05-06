import { Component, OnDestroy } from '@angular/core';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';
import { Overlay } from '@angular/cdk/overlay';
import { MzDialog, MzDialogModule } from '@muziehdesign/components';

@Component({
    selector: 'app-modal-guidelines',
    templateUrl: './modal-guidelines.component.html',
    styleUrls: ['./modal-guidelines.component.scss'],
    imports: [MzDialogModule]
})
export class ModalGuidelinesComponent implements OnDestroy {

    constructor(private dialog: MzDialog, private overlay: Overlay) {}

    open(): void {
        const ref = this.dialog.open(ModalAddOrderComponent);
        ref.closed.subscribe(x=>{
            console.log('result: ', x);
        });
    }

    ngOnDestroy(): void {
    }
}
