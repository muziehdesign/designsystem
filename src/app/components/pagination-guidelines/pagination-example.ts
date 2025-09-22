import { Component, signal } from '@angular/core';
import { MzPagination, PageEvent } from '@muziehdesign/components';

@Component({
    selector: 'app-pagination-example',
    template: `
        <div #collection>
            <p>You're viewing page {{ current().pageNumber }} with page size of {{ current().pageSize }}</p>
            <div class="flex flex-col gap-4">
                <div class="block h-96 bg-gray-200 text-center p-4">content</div>
                <div class="block h-96 bg-gray-200 text-center p-4">content</div>
            </div>
        </div>
        <mz-pagination [totalItems]="100" [pageNumber]="current().pageNumber" [pageSize]="current().pageSize" (changePage)="changePage($event)" [scrollTo]="collection"></mz-pagination>
    `,
    imports: [MzPagination],
})
export class PaginationExampleComponent {
    current = signal<PageEvent>({ pageNumber: 1, pageSize: 20 });

    changePage(event: PageEvent) {
        this.current.set(event);
    }
}
