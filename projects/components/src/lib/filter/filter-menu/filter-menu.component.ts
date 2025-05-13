import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, ContentChildren, contentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MzField } from '@muziehdesign/forms';

@Component({
    selector: 'mz-filter-menu',
    imports: [FormsModule, JsonPipe, CdkMenuItem],
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

    @ContentChildren(NgModel, { descendants: true }) models?: QueryList<NgModel>;

    reset() {
        console.log('resetting');
        //this.form.resetForm();
    }

    apply() {
        console.log(this.models?.length);
        console.log(this.models?.map(m=>m.errors));
        if(this.form?.invalid){
            console.log('form is invalid', this.form.errors);
        }
        console.log('applying', this.form, this.form?.value, this.form?.form.value);
        this.form?.ngSubmit.emit();
    }

    clear() {

    }
}
