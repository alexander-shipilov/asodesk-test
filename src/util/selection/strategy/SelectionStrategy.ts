import { SelectionItems } from "../SelectionItems";
import { SelectionState } from "../SelectionState";

export interface SelectionStrategy<T> {
  canSelect(state: SelectionState<T>, item: T): boolean;

  canDeselect(state: SelectionState<T>, item: T): boolean;

  getSelected(state: SelectionState<T>, selected: SelectionItems<T>): SelectionItems<T>;
}