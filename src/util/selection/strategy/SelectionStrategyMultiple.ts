import { SelectionItems } from "../SelectionItems";
import { SelectionState } from "../SelectionState";
import { SelectionStrategy } from "./SelectionStrategy";

export class SelectionStrategyMultiple<T> implements SelectionStrategy<T> {
  canDeselect(state: SelectionState<T>, item: T): boolean {
    return true;
  }

  canSelect(state: SelectionState<T>, item: T): boolean {
    return true;
  }

  getSelected(state: SelectionState<T>, selectedItems: SelectionItems<T>): SelectionItems<T> {
    return selectedItems;
  }
}