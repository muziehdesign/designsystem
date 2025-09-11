import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { MzDrawer } from "./drawer";
import { MzDrawerContainer } from "./container/drawer-container.component";
import { MzDrawerHeader } from "./drawer-header/drawer-header.component";
import { MzDrawerContent } from "./drawer-content/drawer-content.component";
import { MzDrawerFooter } from "./drawer-footer/drawer-footer.component";

@NgModule({
    imports: [DialogModule, OverlayModule, PortalModule, MzDrawerContainer, MzDrawerHeader, MzDrawerContent, MzDrawerFooter],
    exports: [
        DialogModule,
        MzDrawerContainer,
        MzDrawerHeader,
        MzDrawerContent,
        MzDrawerFooter,
    ],
    providers: [MzDrawer]
})
export class MzDrawerModule {}