import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MzInlineEditComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-inline-edit',
  standalone: true,
  imports: [MzInlineEditComponent, FormsModule],
  templateUrl: './inline-edit.component.html',
  styleUrl: './inline-edit.component.scss'
})
export class InlineEditComponent {

}
