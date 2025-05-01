import { Component, OnInit } from '@angular/core';
import { MzDialog } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-modal-add-order',
    templateUrl: './modal-add-order.component.html',
    styleUrls: ['./modal-add-order.component.scss'],
    standalone: false
})
export class ModalAddOrderComponent implements OnInit {

  constructor(private dialog: MzDialog) { }

  ngOnInit(): void {
  }

  openAnother() {
    this.dialog.open(ModalAddOrderComponent);
  }
}
