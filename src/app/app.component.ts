import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    stickyNavigation: boolean = false;
    constructor(private ts: Title, private router: Router) {
        router.events.pipe(filter((e) => e instanceof NavigationStart)).subscribe((x) => {
            ts.setTitle('Muzieh Design System');
            this.stickyNavigation = false;
        });
    }

    toggleNavigation() {
        this.stickyNavigation = !this.stickyNavigation;
    }
}
