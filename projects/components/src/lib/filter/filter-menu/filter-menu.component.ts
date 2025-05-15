import { CdkMenuItem } from '@angular/cdk/menu';
import { JsonPipe } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ContentChildren, Optional, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FilterComponent } from '../filter.component';

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
export class FilterMenuComponent implements AfterContentInit {
    ngAfterContentInit(): void {
      // this.container.createEmbeddedView(this.myTemplate);
    }

    @ViewChild('myTemplate') myTemplate!: TemplateRef<any>;
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
    @ContentChild(NgForm) form?: NgForm;
    @ContentChildren(NgModel, { descendants: true }) models?: QueryList<NgModel>;

    constructor(@Optional() private filter: FilterComponent | null) { }

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
