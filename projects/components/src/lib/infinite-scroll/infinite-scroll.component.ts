import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
    selector: 'mz-infinite-scroll',
    standalone: true,
    imports: [CommonModule, SpinnerComponent],
    templateUrl: './infinite-scroll.component.html',
    styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent {
    @Input() items: any[] = [];
    @Input() isLoading: boolean = false;
    @Input() containerHeight: string = '24rem';
    @Output() itemSelected = new EventEmitter<any>();
    @Output() loadMore = new EventEmitter<boolean>();
    selectedItem: any = null;

    onContainerScroll(event: any): void {
        const target = event.target;
        if (!this.isLoading && target.offsetHeight + target.scrollTop >= target.scrollHeight) {
            this.loadMore.emit(true);
        }
    }

    onItemClick(item: any) {
        this.selectedItem = item.label;
        this.itemSelected.emit(item);
    }
}
