import { DialogAppearance } from "../dialog-appearance";

export interface MessageDialogData {
    title: string;
    message: string;
    appearance?: DialogAppearance;
    action: string;
    cancelAction: string;
    topRightXButton: boolean;
}