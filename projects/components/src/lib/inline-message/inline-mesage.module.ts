
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { InlineMessageBodyComponent } from './inline-message-body/inline-message-body.component';
import { InlineMessageTitleComponent } from './inline-message-title/inline-message-title.component';
import { InlineMessageComponent } from './inline-message.component';
import { InlineMessageService } from './inline-message.service';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  InlineMessageComponent,
  InlineMessageTitleComponent,
  InlineMessageBodyComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [MatCommonModule, CommonModule, RouterModule],
  exports: [COMPONENTS, MatCommonModule],
  providers: [InlineMessageService], 
})
export class InlineMessageModule { }