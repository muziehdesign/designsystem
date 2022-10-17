import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsDemoComponent } from '../../../demos/buttons-demo.component';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-buttons',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
    buttonsDemo = ButtonsDemoComponent;
    langs: string[] = ['xml'];
    busy?: boolean = true;
    busy2?: boolean;
    private subscription: Subscription = new Subscription();

    constructor() {}
    ngAfterViewChecked(): void {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    testBusyEvent(): void {
        console.log('clicked busy');
    }

    testBusyEvent2(): void {
        this.busy2 = true;
        console.log('test2 is now busy for 5 seconds');
        this.subscription = of(true)
            .pipe(delay(5000))
            .subscribe(() => {
                this.busy2 = false;
                this.subscription.unsubscribe();
            });
    }

    onButtonClick(): void {
        console.log('clicked');
    }
}
