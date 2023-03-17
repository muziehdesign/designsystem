import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MuziehComponentsModule } from 'projects/components/src/public-api';

@Component({
  selector: 'app-inline-message',
  templateUrl: './inline-message.component.html',
  styleUrls: ['./inline-message.component.scss'],
  standalone: true,
  imports: [CommonModule, MuziehComponentsModule],
})
export class InlineMessageComponent {

  constructor() { }

}
