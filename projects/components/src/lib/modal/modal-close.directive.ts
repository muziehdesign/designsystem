import { DialogRef } from '@angular/cdk/dialog';
import { Directive } from '@angular/core';

@Directive({
  selector: '[mzModalClose]'
})
export class MzModalClose {

  constructor(private dialogRef: DialogRef) {
    console.log('dialogref: ', this.dialogRef);
  }
}
