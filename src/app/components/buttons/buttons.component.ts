import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsDemoComponent } from '../../../demos/buttons-demo.component';
import { of, Subscription } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
    selector: 'app-buttons',
    imports: [CommonModule, SharedModule],
    templateUrl: './buttons.component.html'
})
export class ButtonsComponent{
    buttonsDemo = ButtonsDemoComponent;
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
