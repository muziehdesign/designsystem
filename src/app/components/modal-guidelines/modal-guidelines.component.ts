import { Component, OnDestroy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ModalAppearance, MzDialog, MzModalService } from '@muziehdesign/components';
import { ModalExampleComponent } from './examples/modal-example.component';

@Component({
    selector: 'app-modal-guidelines',
    templateUrl: './modal-guidelines.component.html',
    styleUrls: ['./modal-guidelines.component.scss'],
    imports: []
})
export class ModalGuidelinesComponent implements OnDestroy {

    constructor(private modal: MzModalService) {}

    open(): void {
        const ref = this.modal.open(ModalExampleComponent);
        ref.closed.subscribe(x=>{
            console.log('result: ', x);
        });
    }

    display(appearance?: ModalAppearance) {
        this.modal.display('Confirmed', 'This is a message', 'OK', '', appearance);
    }

    confirm() {
        this.modal.confirm('Proceed', 'Do you wish to proceed?');
    }

    async confirmWarning() {
       const result = await this.modal.confirm('Move file', 'Moving files can result in broken links.', 'Move file', 'Cancel', 'warning');
       console.log('confirm warning result: ', result);
    }

    async confirmDanger() {
        const result = await this.modal.confirm('Delete file', 'This action cannot be undone.', 'Delete file', 'Cancel', 'danger');
        console.log('confirm danger result: ', result);
    }

    ngOnDestroy(): void {
    }
}