import { NgModule } from "@angular/core";
import { MzDropdownComponent } from "./dropdown.component";
import { MzDropdownItemDirective } from "./dropdown-item.directive";

@NgModule({
    imports: [MzDropdownComponent, MzDropdownItemDirective],
    exports: [MzDropdownComponent, MzDropdownItemDirective]
})
export class MzDropdownModule {}