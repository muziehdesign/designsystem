import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";
import { MzModalContainer } from "./modal-container/modal-container.component";
import { MzModal } from "./modal";
import { MzMessageModal } from "./message-modal/message-modal.component";
import { MzModalHeader } from "./modal-header/modal-header.component";
import { MzModalFooter } from "./modal-footer/modal-footer.component";
import { MzModalContent } from "./modal-content/modal-content.component";

@NgModule({
    imports: [DialogModule, OverlayModule, MzModalContainer, MzModalHeader, MzModalContent, MzModalFooter, MzMessageModal],
    exports: [
        DialogModule,
        MzModalHeader,
        MzModalContent,
        MzModalFooter,
        MzModalContainer,
        MzMessageModal
    ],
    providers: [MzModal]
})
export class MzModalModule {}