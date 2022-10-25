import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEmbed]'
})
export class EmbedDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
