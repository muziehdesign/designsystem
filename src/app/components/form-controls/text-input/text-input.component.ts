import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MzSpinner, SvgIconComponent } from '@muziehdesign/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextInputDemoComponent } from 'src/demos/text-input-demo.component';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
    imports: [CommonModule, FormsModule, SvgIconComponent, MzSpinner, SharedModule]
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
