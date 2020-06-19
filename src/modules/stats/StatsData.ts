import { Nullable } from "../../util";
import { StatsDataPosition } from "./StatsDataPosition";

export interface StatsData {
  id: number;
  color: number;
  keyword: string;
  suggestionsCount: number;
  usersPerDay: number;
  position: Nullable<StatsDataPosition>;
  totalApps: number;
}