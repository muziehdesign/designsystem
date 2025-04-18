import { Dialog } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { DrawerContainerComponent } from 'muzieh-ngcomponents';
import { DrawerExampleComponent } from './examples/drawer-example.component';

@Component({
  selector: 'app-drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent  implements OnInit {

  constructor(private dialog: Dialog, private overlay: Overlay) { }

  ngOnInit(): void {}

  openDrawer(): void {
    this.dialog.open(DrawerExampleComponent, {
      container: DrawerContainerComponent,
    });
  }
}
