import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { SortableDirective } from './sortable.directive';

@Directive({
  selector: '[mzSort]'
})
export class SortDirective {

  @Input() mzSort!: string;

  constructor(private sortable: SortableDirective) {
  }

  @HostListener('click', ['$event']) onClick($event: Event) {
   // console.log($event);
    console.log(this.mzSort, this.sortable.sort);
  }
}
