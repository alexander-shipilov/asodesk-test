import { Entity } from "../../util";
import { StatsData } from "./StatsData";

export interface Stats extends Entity<StatsData[]> {
  selected: Set<number>,

  selectedAll: boolean,
}