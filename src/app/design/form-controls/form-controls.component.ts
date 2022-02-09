import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-controls',
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