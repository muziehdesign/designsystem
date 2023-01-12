import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextInputDemoComponent } from 'src/demos/text-input-demo.component';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  standalone: true,
  styleUrls: ['./text-input.component.scss'],
  imports: [CommonModule, FormsModule, SvgIconComponent, SpinnerComponent, SharedModule]
})
export class TextInputComponent implements OnInit {

  textInputDemo = TextInputDemoComponent;
  model: InputGroupDemoModel = { query: '', username: '' };
  constructor() { }

  ngOnInit(): void {
  }

}

export interface InputGroupDemoModel {
  query: string;
  username: string;
}
