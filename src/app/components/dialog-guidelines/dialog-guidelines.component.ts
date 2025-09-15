import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ButtonDirective, DialogAppearance, MzDialog, MzDialogModule } from '@muziehdesign/components';
import { DialogExampleComponent } from './examples/dialog-example.component';

@Component({
    selector: 'app-dialog-guidelines',
    templateUrl: './dialog-guidelines.component.html',
    styleUrls: ['./dialog-guidelines.component.scss'],
    imports: [MzDialogModule, ButtonDirective],
})
export class DialogGuidelinesComponent implements OnDestroy {
    @ViewChild('dialogTemplate', { static: true }) dialogTemplate!: TemplateRef<any>;
    constructor(private modal: MzDialog) {}

    open(): void {
        const ref = this.modal.open(DialogExampleComponent);
        ref.closed.subscribe((x) => {
            console.log('result: ', x);
        });
    }

    display(appearance?: DialogAppearance) {
        this.modal.display('Confirmed', 'This is a message', 'OK', '', appearance);
    }

    confirm() {
        this.modal.confirm('Proceed', 'Do you wish to proceed?');
    }

    async confirmWarning() {
        const result = await this.modal.confirm('Move file', 'Moving files can result in broken links.', 'Move', 'Cancel', 'warning');
        console.log('confirm warning result: ', result);
    }

    async confirmDanger() {
        const result = await this.modal.confirm('Delete file', 'This action cannot be undone.', 'Delete', 'Cancel', 'danger');
        console.log('confirm danger result: ', result);
    }

    openTemplate() {
        const ref = this.modal.open(this.dialogTemplate);
        ref.closed.subscribe((x) => {
            console.log('result: ', x);
        });
    }

    ngOnDestroy(): void {}
}
