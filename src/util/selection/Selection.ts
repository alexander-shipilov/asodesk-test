import { SelectionItems } from "./SelectionItems";

export interface Selection<T> {
  items: SelectionItems<T>;
  selected: SelectionItems<T>;
}