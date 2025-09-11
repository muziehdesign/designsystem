import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { MzModalContainer } from "./modal-container/modal-container.component";
import { MzModalService } from "./modal.service";
import { MzModal } from "./modal/modal.component";
import { MzMessageModal } from "./message-modal/message-modal.component";
import { MzModalHeader } from "./modal-header/modal-header.component";
import { MzModalFooter } from "./modal-footer/modal-footer.component";
import { MzModalContent } from "./modal-content/modal-content.component";

@NgModule({
    imports: [DialogModule, MzModal, MzModalContainer, MzModalHeader, MzModalContent, MzModalFooter, MzMessageModal],
    exports: [
        DialogModule,
        MzModal,
        MzModalHeader,
        MzModalContent,
        MzModalFooter,
        MzModalContainer,
        MzMessageModal
    ],
    providers: [MzModalService]
})
export class MzModalModule {}