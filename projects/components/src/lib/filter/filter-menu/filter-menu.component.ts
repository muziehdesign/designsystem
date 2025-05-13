import { CdkMenu } from '@angular/cdk/menu';
import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
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
    @ContentChild(NgForm) form?: NgForm;
    @ContentChild('footer') footerTemplate: TemplateRef<any> | null = null;

    reset() {
        console.log('resetting');
        //this.form.resetForm();
    }

    apply() {
   
    }
}
