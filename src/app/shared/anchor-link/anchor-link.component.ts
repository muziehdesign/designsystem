import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-anchor-link',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './anchor-link.component.html',
    styleUrl: './anchor-link.component.scss',
})
export class AnchorLinkComponent {
    @Input({ required: true }) anchor!: string;
    constructor(private router: Router) {

    }

    async navigate() {
      await this.router.navigate([], {fragment: this.anchor});
      window.navigator.clipboard.writeText(window.location.href);
    }
}
