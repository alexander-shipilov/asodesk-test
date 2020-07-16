import { SelectionItems } from "../SelectionItems";
import { SelectionState } from "../SelectionState";
import { SelectionStrategyMultiple } from "./SelectionStrategyMultiple";

export class SelectionStrategyAtLeastOne<T> extends SelectionStrategyMultiple<T> {
  canDeselect(state: SelectionState<T>): boolean {
    return state.selectedCount > 1;
  }

  getSelected(state: SelectionState<T>, selectedItems: SelectionItems<T>): SelectionItems<T> {
    let selected = super.getSelected(state, selectedItems);

    if (selected.size === 0) {
      const [firstItem] = state.items;

      if (firstItem) {
        selected = selected.add(firstItem);
      }
    }

    return selected;
  }
}