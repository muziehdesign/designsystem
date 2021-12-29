import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'kitchensink-ui';

    isLoading: boolean = false;
    stickyNavigation: boolean = false;
    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.events.pipe(filter((e) => e instanceof NavigationStart || e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError)).subscribe((e) => (this.isLoading = e instanceof NavigationStart));
    }

    toggleNavigation() {
        this.stickyNavigation = !this.stickyNavigation;
    }
}
