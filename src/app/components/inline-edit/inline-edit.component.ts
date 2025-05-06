import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MzInlineEditComponent } from '@muziehdesign/components';

@Component({
    selector: 'app-inline-edit',
    imports: [MzInlineEditComponent, FormsModule],
    templateUrl: './inline-edit.component.html',
    styleUrl: './inline-edit.component.scss'
})
export class InlineEditComponent {

}
