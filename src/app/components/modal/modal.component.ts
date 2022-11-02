import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule, SharedModule, MatDialogModule],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    constructor(public dialog: MatDialog) {}

    openModal(): void {
        this.dialog.open(ModalDemoComponent, { data: { url: 'http://localhost:4200' }, panelClass: 'custom-modal' });
    }
}
