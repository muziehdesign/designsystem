import { CdkMenu } from '@angular/cdk/menu';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MzField } from '@muziehdesign/forms';

@Component({
    selector: 'mz-filter-menu',
    imports: [FormsModule],
    exportAs: 'mzFilterMenu',
    templateUrl: './filter-menu.component.html',
    styleUrl: './filter-menu.component.scss',
    hostDirectives: [],
    host: {
        class: 'menu',
    },
})
export class FilterMenuComponent {
    @ViewChild(NgForm) form!: NgForm;

    reset() {
        console.log('resetting');
        //this.form.resetForm();
    }

    apply() {
      console.log('applying', this.form.value);
    }
}
