import { ModalAppearance } from "../modal-appearance";

export interface MessageModalData {
    title: string;
    message: string;
    appearance?: ModalAppearance;
    action: string;
    cancelAction: string;
}