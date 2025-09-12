import { Component, OnInit } from '@angular/core';
import { MzDrawer } from '@muziehdesign/components';

@Component({
    selector: 'app-modal-add-order',
    templateUrl: './modal-add-order.component.html',
    styleUrls: ['./modal-add-order.component.scss'],
    standalone: false
})
export class ModalAddOrderComponent implements OnInit {

  constructor(private dialog: MzDrawer) { }

  ngOnInit(): void {
  }

  openAnother() {
    this.dialog.open(ModalAddOrderComponent);
  }
}
