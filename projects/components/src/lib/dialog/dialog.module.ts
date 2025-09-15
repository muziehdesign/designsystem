import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { MzDialogContainer } from "./dialog-container/dialog-container.component";
import { MzDialog } from "./dialog";
import { MzMessageDialog } from "./message-dialog/message-dialog.component";
import { MzDialogHeader } from "./dialog-header/dialog-header.component";
import { MzDialogFooter } from "./dialog-footer/dialog-footer.component";
import { MzDialogContent } from "./dialog-content/dialog-content.component";

@NgModule({
    imports: [DialogModule, OverlayModule, MzDialogContainer, MzDialogHeader, MzDialogContent, MzDialogFooter, MzMessageDialog],
    exports: [
        DialogModule,
        MzDialogHeader,
        MzDialogContent,
        MzDialogFooter,
        MzDialogContainer,
        MzMessageDialog
    ],
    providers: [MzDialog]
})
export class MzDialogModule {}