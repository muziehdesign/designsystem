
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { InlineMessageDialogComponent } from './inline-message-dialog/inline-message-dialog.component';
import { InlineMessageComponent } from './inline-message.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from '@angular/cdk/dialog';

const COMPONENTS = [
  InlineMessageComponent,
  InlineMessageDialogComponent,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [MatCommonModule, CommonModule, RouterModule, DialogModule],
  exports: [COMPONENTS, MatCommonModule, DialogModule],
})
export class InlineMessageModule { }