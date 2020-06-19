import { Nullable, State } from "../../util";
import { Stats } from "./Stats";
import { StatsData } from "./StatsData";

export class StatsState extends State<Stats> implements Stats {
  public error: Nullable<Error> = null;

  public loading: boolean = false;

  public selected: Set<number> = new Set<number>();

  public selectedAll: boolean = false;

  constructor(public readonly value: StatsData[]) {
    super();
  }

  protected getSelected(): Set<number> {
    const { selected, selectedAll } = this;

    return new Set(selectedAll ? this.value.map((data) => data.id) : selected);
  }

  remove(id: number): this {
    return this.merge({ value: this.value.filter((data) => data.id !== id) }).deselect(id).selectFirst();
  }

  select(id: number): this {
    return this.selectedAll || this.selected.has(id) ? this : this.toggle(id);
  }

  deselect(id: number): this {
    return this.selected.has(id) ? this.toggle(id) : this;
  }

  deselectAll(): this {
    return this.merge({ selectedAll: false, selected: new Set<number>() }).selectFirst();
  }

  selectFirst(): this {
    const { value } = this;
    const selected = this.getSelected();

    return selected.size === 0 && value[0] ? this.toggle(value[0].id) : this;
  }

  toggleAll(): this {
    const { selectedAll } = this;

    return this.merge({ selectedAll: !selectedAll, selected: new Set<number>() }).selectFirst();
  }

  toggle(id: number): this {
    const selected = this.getSelected();

    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }

    return this.merge({ selectedAll: false, selected });
  }
}