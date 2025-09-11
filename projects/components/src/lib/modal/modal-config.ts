import { AutoFocusTarget, DialogConfig } from "@angular/cdk/dialog";
import { InjectionToken } from "@angular/core";

export const MZ_MODAL_DEFAULT_OPTIONS = new InjectionToken<MzModalConfig<any>>('MZ_MODAL_DEFAULT_OPTIONS');

export class MzModalConfig<D> {
    /** Optional CSS class or classes applied to the overlay panel. */
    panelClass?: string | string[] = '';

    /** Whether the dialog has a backdrop. */
    hasBackdrop?: boolean = true;

    /** Optional CSS class or classes applied to the overlay backdrop. */
    backdropClass?: string | string[] = '';

    /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
    disableClose?: boolean = false;

    /** Width of the dialog. */
    width?: string = '';

    /** Height of the dialog. */
    height?: string = '';

    /** Min-width of the dialog. If a number is provided, assumes pixel units. */
    minWidth?: number | string;

    /** Min-height of the dialog. If a number is provided, assumes pixel units. */
    minHeight?: number | string;

    /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
    maxWidth?: number | string;

    /** Max-height of the dialog. If a number is provided, assumes pixel units. */
    maxHeight?: number | string;

    /** Data being injected into the child component. */
    data?: D | null = null;

    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    autoFocus?: AutoFocusTarget = 'first-tabbable';

    /**
     * Whether the dialog should restore focus to the previously-focused element upon closing.
     * Has the following behavior based on the type that is passed in:
     * - `boolean` - when true, will return focus to the element that was focused before the dialog
     *    was opened, otherwise won't restore focus at all.
     * - `string` - focus will be restored to the first element that matches the CSS selector.
     * - `HTMLElement` - focus will be restored to the specific element.
     */
    restoreFocus?: boolean | string | HTMLElement = true;
}