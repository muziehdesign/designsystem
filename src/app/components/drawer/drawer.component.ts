import { Dialog } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { DrawerContainerComponent } from 'muzieh-ngcomponents';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';

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
    this.dialog.open(DrawerContentComponent, {
      container: DrawerContainerComponent,
    });
  }
}
