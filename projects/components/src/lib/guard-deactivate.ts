// TODO: this needs to move
export interface CanDeactivateComponent {
    canDeactivate(): boolean;
    confirmDeactivation(): boolean;
}

export const hasImplementation = <T>(obj: any, func: keyof T): obj is T => {
    return obj && (obj as T)[func] !== undefined;
};

export type ModifierKey = 'altKey' | 'shiftKey' | 'ctrlKey' | 'metaKey';

/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
export function hasModifierKey(event: KeyboardEvent, ...modifiers: ModifierKey[]): boolean {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }

  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
