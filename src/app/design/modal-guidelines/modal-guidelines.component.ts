import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddOrderComponent } from '../modal-add-order/modal-add-order.component';

@Component({
    selector: 'app-modal-guidelines',
    templateUrl: './modal-guidelines.component.html',
    styleUrls: ['./modal-guidelines.component.scss'],
})
export class ModalGuidelinesComponent implements OnInit, OnDestroy {
    modal?: NgbModalRef;
    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {}

    open(): void {
        this.modal = this.modalService.open(ModalAddOrderComponent, {backdrop: 'static'});
        this.modal.result.then(
            (result) => {
                console.log(result);
            },
            (reason) => {
                console.log(reason);
            }
        );
    }

    ngOnDestroy(): void {
        this.modal?.dismiss();
    }
}
