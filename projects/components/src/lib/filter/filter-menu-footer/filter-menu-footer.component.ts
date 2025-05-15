import { CDK_MENU, CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mz-filter-menu-footer',
  imports: [CdkMenuItem],
  templateUrl: './filter-menu-footer.component.html',
  styleUrl: './filter-menu-footer.component.scss',
  providers:[
    {provide: CDK_MENU, useExisting: CdkMenu}
  ]
})
export class FilterMenuFooterComponent {
  constructor(private form: NgForm) {
    const trigger = inject(CdkMenuTrigger)
    console.log('trigger', trigger);
  }

  apply() {
    console.log('applying');
    if(this.form.invalid) {
      console.log('form is invalid', this.form.errors);
      return;
    }
  }
}
