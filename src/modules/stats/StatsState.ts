import { Nullable, SelectionState, State } from "../../util";
import { SelectionStrategyAtLeastOne } from "../../util/selection/strategy";
import { Stats } from "./Stats";
import { StatsData } from "./StatsData";

export class StatsState extends State<Stats> implements Stats {
  public data: StatsData[] = [];

  public error: Nullable<Error> = null;

  public loading: boolean = false;

  public selection: SelectionState<number> = new SelectionState(new SelectionStrategyAtLeastOne(), []);

  constructor(data: StatsData[]) {
    super();
    this.setData(data);
  }

  setData(data: StatsData[]): this {
    return this.merge({ data: data, selection: this.selection.setItems(data.map((item) => item.id)) });
  }

  remove(id: number): this {
    const nextData = this.data.filter((data) => data.id !== id);

    return nextData.length === this.data.length ? this : this.setData(nextData);
  }

  toggle(id: number): this {
    return this.merge({ selection: this.selection.toggle(id) });
  }

  toggleAll(): this {
    return this.merge({ selection: this.selection.toggleAll() });
  }
}