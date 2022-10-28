import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent, SvgIconComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-form-controls',
  standalone: true,
  imports: [CommonModule, FormsModule, SvgIconComponent, SpinnerComponent],
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  model: InputGroupDemoModel = { query: '', username: '' };
  constructor() { }

  ngOnInit(): void {
  }

}

export interface InputGroupDemoModel {
  query: string;
  username: string;
}