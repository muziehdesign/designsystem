import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, Subscription } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { MzButton, SvgIconComponent } from '@muziehdesign/components';

@Component({
    selector: 'app-buttons',
    imports: [CommonModule, MzButton, SvgIconComponent],
    templateUrl: './buttons.component.html'
})
export class ButtonsComponent{
    langs: string[] = ['xml'];
    counter: number = 0;
    busy: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor() {}

    testBusyEvent(): void {
        this.counter++;
        this.busy = true;
        of(true)
            .pipe(delay(3000), take(1))
            .subscribe(() => {
                this.busy = false;
                this.subscription.unsubscribe();
            });
    }
}
