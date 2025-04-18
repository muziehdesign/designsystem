import { Component } from '@angular/core';
import { MzDialog, MzDialogModule } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [MzDialogModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent {
  constructor(private mzDialog: MzDialog) {}

  debug() {
    console.log(this.mzDialog.getDialogs().length);
    this.mzDialog.open(DummyComponent);
  }
}
