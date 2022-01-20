import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { race } from 'rxjs';
import { delay, filter, mapTo } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
    selector: 'mz-page-loading-indicator',
    templateUrl: './page-loading-indicator.component.html',
    styleUrls: ['./page-loading-indicator.component.css'],
})
export class PageLoadingIndicatorComponent implements OnInit, OnDestroy {
    @Input() isLoading: boolean = false;
    expectedMilisecondsDelay = 1000;
    private subs = new SubSink();

    constructor(private router: Router) {}

    ngOnInit(): void {
        const endObs$ = this.router.events.pipe(
            filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError),
            mapTo(false)
        );

        this.subs.add(
            race(
                this.router.events.pipe(
                    filter((e) => e instanceof NavigationStart),
                    delay(this.expectedMilisecondsDelay),
                    mapTo(true)
                ),
                endObs$
            ).subscribe((value) => this.isLoading = value)
        );
        // the flag need to be reset to false when the page finishes loading
        this.subs.add(endObs$.subscribe(() =>this.isLoading = false));
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
