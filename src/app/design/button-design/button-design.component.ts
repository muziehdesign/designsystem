import { AfterViewChecked, Component, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DemoService } from 'src/app/demo.service';
import { DemoButtonButtonsComponent } from './demo-button-buttons/demo-button-buttons.component';

@Component({
    selector: 'app-button-design',
    templateUrl: './button-design.component.html',
    styleUrls: ['./button-design.component.scss'],
})
export class ButtonDesignComponent implements OnInit, OnDestroy, AfterViewChecked {
    busy?: boolean = true;
    busy2?: boolean;
    private subscription: Subscription = new Subscription();

    buttonsDemo = DemoButtonButtonsComponent;
    constructor(private service:DemoService, private container:ViewContainerRef) {
        
    }
    ngAfterViewChecked(): void {
    }

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
