import { Component } from "@angular/core";
import { PaginationComponent } from "@muziehdesign/components";

@Component({
    selector: 'app-pagination-example',
    template: `
        <div #collection>
            <p>You're viewing page </p>
        </div>
        <mz-pagination [length]="100" [page]="1" [pageSize]="20"></mz-pagination>
    `,
    imports: [PaginationComponent]
})
export class PaginationExampleComponent {

}