import { Component, signal } from '@angular/core';
import { MzButtonComponent } from '@muziehdesign/components';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [MzButtonComponent]
})
export class AboutComponent {

  isBusy = signal(false);

  handleClick() {
    console.log('button clicked');
  }

  toggle() {
    this.isBusy.set(!this.isBusy());
  }
}
