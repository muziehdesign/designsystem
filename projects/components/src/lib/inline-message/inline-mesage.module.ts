
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { InlineMessageBodyComponent } from './inline-message-body/inline-message-body.component';
import { InlineMessageComponent } from './inline-message.component';
import { InlineMessageService } from './inline-message.service';
import { RouterModule } from '@angular/router';
import { InlineMessageTitleComponent } from './inline-message-title/inline-message-title.component';

const COMPONENTS = [
  InlineMessageComponent,
  InlineMessageBodyComponent,
  InlineMessageTitleComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [MatCommonModule, CommonModule, RouterModule],
  exports: [COMPONENTS, MatCommonModule],
  providers: [InlineMessageService], 
})
export class InlineMessageModule { }