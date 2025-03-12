import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-content',
  standalone: true,
  template: `
    <div class="drawer-content">
      <h2>Drawer Content</h2>
      <p>This is the content inside the drawer.</p>
    </div>
  `,
})

export class DrawerContentComponent {}
