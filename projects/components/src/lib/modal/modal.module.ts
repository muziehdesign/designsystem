import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { MzModalContainer } from "./modal-container/modal-container.component";
import { MzModalService } from "./modal.service";
import { MzMessageModal } from "./message-modal/message-modal.component";
import { MzModalHeader } from "./modal-header/modal-header.component";
import { MzModalFooter } from "./modal-footer/modal-footer.component";
import { MzModalContent } from "./modal-content/modal-content.component";

@NgModule({
    imports: [DialogModule, MzModalContainer, MzModalHeader, MzModalContent, MzModalFooter, MzMessageModal],
    exports: [
        DialogModule,
        MzModalHeader,
        MzModalContent,
        MzModalFooter,
        MzModalContainer,
        MzMessageModal
    ],
    providers: [MzModalService]
})
export class MzModalModule {}