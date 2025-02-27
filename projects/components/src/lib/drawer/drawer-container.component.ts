import { CdkDialogContainer } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mz-drawer-container',
  standalone: true,
  imports: [CdkPortalOutlet],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './drawer-container.component.html',
  styleUrl: './drawer-container.component.scss'
})
export class DrawerContainerComponent extends CdkDialogContainer{
  open = false;
  protected override _contentAttached(): void {
    super._contentAttached();
    this.open = true;
  }
}
