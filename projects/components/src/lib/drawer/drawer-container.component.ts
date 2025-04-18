import { CdkDialogContainer, DialogConfig } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mz-drawer-container',
  standalone: true,
  imports: [CdkPortalOutlet],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './drawer-container.component.html',
  styleUrl: './drawer-container.component.scss'
})
export class DrawerContainerComponent extends CdkDialogContainer<DialogConfig>{
  open = false;

  protected override _contentAttached(): void {
    super._contentAttached();
    this.open = true;
  }
}
