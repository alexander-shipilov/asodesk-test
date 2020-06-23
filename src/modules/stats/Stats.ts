import { Entity, SelectionState } from "../../util";
import { StatsData } from "./StatsData";

export interface Stats extends Entity<StatsData[]> {
  selection: SelectionState<number>
}