import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  textInput: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
