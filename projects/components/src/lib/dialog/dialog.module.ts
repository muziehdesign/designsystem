import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { MzDialog } from "./mz-dialog.service";
import { DrawerContainerComponent } from "./container/drawer-container.component";

@NgModule({
    imports: [DialogModule, OverlayModule, PortalModule, DrawerContainerComponent],
    exports: [
        DialogModule,
        DrawerContainerComponent
    ],
    providers: [MzDialog]
})
export class MzDialogModule {}