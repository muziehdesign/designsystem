import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  standalone: true,
  styleUrls: ['./text-input.component.scss'],
  imports: [CommonModule, FormsModule, SvgIconComponent, SpinnerComponent]
})
export class TextInputComponent implements OnInit {

  model: InputGroupDemoModel = { query: '', username: '' };
  constructor() { }

  ngOnInit(): void {
  }

}

export interface InputGroupDemoModel {
  query: string;
  username: string;
}