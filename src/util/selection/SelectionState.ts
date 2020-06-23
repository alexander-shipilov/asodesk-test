import { State } from "../State";
import { Selection } from "./Selection";
import { SelectionItems } from "./SelectionItems";
import { SelectionStrategy } from "./strategy";

export class SelectionState<T> extends State<Selection<T>> implements Selection<T> {
  public items: SelectionItems<T>;

  public selected: SelectionItems<T>;

  public get selectedCount() {
    return this.selected.size;
  }

  public get itemsCount() {
    return this.items.size;
  }

  public get isAllSelected(): boolean {
    return this.selected.size === this.items.size;
  }

  constructor(protected strategy: SelectionStrategy<T>, items: T[] | Set<T> | SelectionItems<T>) {
    super();

    this.items = new SelectionItems(items);
    this.selected = strategy.getSelected(this, new SelectionItems());
  }

  public isItem(item: T): boolean {
    return this.items.has(item);
  }

  public isSelected(item: T): boolean {
    return this.selected.has(item);
  }

  public canSelect(item: T): boolean {
    return this.isItem(item) && this.strategy.canSelect(this, item);
  }

  public canDeselect(item: T): boolean {
    return this.isSelected(item) && this.strategy.canDeselect(this, item);
  }

  public addItem(item: T): this {
    const nextItems = this.items.add(item);

    return nextItems === this.items ? this : this.merge({ items: nextItems });
  }

  public deleteItem(item: T): this {
    return this.setItems(this.items.delete(item));
  }

  protected setSelected(nextSelected: SelectionItems<T>): this {
    return nextSelected === this.selected ? this : this.merge({ selected: nextSelected });
  }

  public setItems(items: T[] | Set<T> | SelectionItems<T>): this {
    let next = this;

    if (items !== this.items) {
      const nextItems = this.items.set(items);

      next = nextItems === this.items ? this : this.merge({ items: nextItems }).selectItems(this.selected);
    }

    return next;
  }

  protected selectItems(items: T[] | Set<T> | SelectionItems<T>): this {
    const { selected, strategy } = this;

    return this.setSelected(
      strategy.getSelected(this, selected.set([...items].filter((item) => this.canSelect(item))))
    );
  }

  public select(item: T): this {
    return this.canSelect(item) ? this.setSelected(this.selected.add(item)) : this;
  }

  public deselect(item: T): this {
    return this.canDeselect(item) ? this.setSelected(this.selected.delete(item)) : this;
  }

  public toggle(item: T): this {
    return this.isSelected(item) ? this.deselect(item) : this.select(item);
  }

  public toggleAll(): this {
    return this.selectItems(this.isAllSelected ? [] : this.items);
  }
}