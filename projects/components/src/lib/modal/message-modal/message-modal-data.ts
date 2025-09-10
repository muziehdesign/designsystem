import { ModalAppearance } from "../modal-appearance";

export interface MessageModalData {
    title: string;
    message: string;
    appearance?: ModalAppearance;
    okButtonText?: string;
    cancelButtonText?: string;
}