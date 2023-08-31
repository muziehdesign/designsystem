import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';
import {MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-modal-guidelines',
    templateUrl: './modal-guidelines.component.html',
    styleUrls: ['./modal-guidelines.component.scss'],
    standalone: true,
    imports: [MatDialogModule],
})
export class ModalGuidelinesComponent implements OnInit, OnDestroy {
    modal?: NgbModalRef;
    constructor(private modalService: NgbModal, private dialog: MatDialog) {}

    ngOnInit(): void {}

    open(): void {
        /*this.modal = this.modalService.open(ModalAddOrderComponent, {backdrop: 'static'});
        this.modal.result.then(
            (result) => {
                console.log(result);
            },
            (reason) => {
                console.log(reason);
            }
        );*/
        this.dialog.open(ModalAddOrderComponent).afterClosed().subscribe(x=>{
            console.log('result: ', x);
        });
    }

    ngOnDestroy(): void {
        this.modal?.dismiss();
    }
}
