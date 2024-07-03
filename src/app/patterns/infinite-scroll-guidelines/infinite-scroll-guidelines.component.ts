import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MuziehComponentsModule, ResultTableComponent, SortDirective } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-infinite-scroll',
    standalone: true,
    imports: [CommonModule, CurrencyPipe, DatePipe, FormsModule, ResultTableComponent, SortDirective, MuziehComponentsModule],
    templateUrl: './infinite-scroll-guidelines.component.html',
    styleUrl: './infinite-scroll-guidelines.component.scss',
})
export class InfiniteScrollGuidelinesComponent {
    items: any[] = [];
    isLoading: boolean = false;
    private page: number = 0;
    private pageSize: number = 10;

    constructor() {
        this.loadMoreItems();
    }

    loadMoreItems() {
        this.isLoading = true;
        setTimeout(() => {
            // Simulate asynchronous data fetching
            for (let i = 0; i < this.pageSize; i++) {
                const itemDate = new Date();
                itemDate.setHours(itemDate.getHours() - (i + this.page * this.pageSize));
                this.items.push({ label: 'Effective ' + itemDate.toLocaleString() });
            }
            this.page++;
            this.isLoading = false;
        }, 1000); // Simulating network delay
    }

    onItemSelected(item: any) {
        console.log('Item selected from parent:', item);
    }
}
