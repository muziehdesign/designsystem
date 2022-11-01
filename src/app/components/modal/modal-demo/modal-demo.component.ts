import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-demo',
    standalone: true,
    imports: [CommonModule, MatDialogModule],
    templateUrl: './modal-demo.component.html',
    styleUrls: ['./modal-demo.component.scss'],
})
export class ModalDemoComponent {
    constructor(private dialogRef: MatDialogRef<ModalDemoComponent>, @Inject(MAT_DIALOG_DATA) public data: { url: string }) {}

    openLink(): void {
        window.open(this.data.url, '_blank');
        this.dialogRef.close();
    }
}
