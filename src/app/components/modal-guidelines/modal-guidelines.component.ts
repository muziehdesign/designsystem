import { Component, OnDestroy } from '@angular/core';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';
import { Overlay } from '@angular/cdk/overlay';
import { MzModalContainer, MzDialog, MzDialogModule } from '@muziehdesign/components';
import { ModalExampleComponent } from './examples/modal-example.component';

@Component({
    selector: 'app-modal-guidelines',
    templateUrl: './modal-guidelines.component.html',
    styleUrls: ['./modal-guidelines.component.scss'],
    imports: [MzDialogModule]
})
export class ModalGuidelinesComponent implements OnDestroy {

    constructor(private dialog: MzDialog, private overlay: Overlay) {}

    open(): void {
        const ref = this.dialog.open(ModalExampleComponent, {container: MzModalContainer });
        ref.closed.subscribe(x=>{
            console.log('result: ', x);
        });
    }

    ngOnDestroy(): void {
    }
}
