import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[mzSortable]'
})
export class SortableDirective implements OnInit {

  @Input('mzSortable') mzSortable!: string;
  @Output() sort = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit():any {
    this.sort.emit(this.mzSortable);
  }
}
