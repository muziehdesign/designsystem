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
    selectedItem: any = null;

    constructor() {
        this.loadMoreItems(); 
    }

    loadMoreItems(): void {
        if (this.isLoading) return; 
        this.isLoading = true;
        setTimeout(() => {
            // Simulate asynchronous data fetching
            const newItems = Array.from({ length: this.pageSize }, (_, i) => {
                const itemDate = new Date();
                itemDate.setHours(itemDate.getHours() - (i + this.page * this.pageSize * 24));
                return {
                    id: `item-${this.page * this.pageSize + i}`, // Unique ID for each item
                    label: 'Date: ' + itemDate.toLocaleString(),
                };
            });

            this.items = [...this.items, ...newItems]; // Append new items to existing
            this.page++;
            this.isLoading = false;
        }, 1000); // Simulating network delay
    }

    onItemSelected(item: any): void {
        this.selectedItem = item;  
        console.log('Item selected:', item);
    }
}
