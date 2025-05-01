import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appEmbed]',
    standalone: false
})
export class EmbedDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
