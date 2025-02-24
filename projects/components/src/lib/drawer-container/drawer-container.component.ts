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

  /**
   *    this.dialog.open(ComponentHere, {
          data: {
            model: this.model()!.items[0]
          },
          container: DrawerContainerComponent,
          panelClass: 'drawer-panel',
          positionStrategy: this.overlay.position().global().right('0px').top('0px')
        });
   */
}
