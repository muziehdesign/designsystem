import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { MzDrawer } from "./drawer";
import { MzDrawerContainer } from "./container/drawer-container.component";

@NgModule({
    imports: [DialogModule, OverlayModule, PortalModule, MzDrawerContainer],
    exports: [
        DialogModule,
        MzDrawerContainer
    ],
    providers: [MzDrawer]
})
export class MzDrawerModule {}