import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'kitchensink-ui';

    isLoading: boolean = false;
    stickyNavigation: boolean = false;

    onIsLoadingChange(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    toggleNavigation() {
        this.stickyNavigation = !this.stickyNavigation;
    }
}
