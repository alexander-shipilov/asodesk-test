import { Nullable, SelectionState } from "../../util";
import { StatsData } from "./StatsData";

export interface StatsModuleProps {
  data: StatsData[];
  error: Nullable<Error>;
  loading: boolean;
  selection: SelectionState<number>;
  onLoad: () => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  onToggleAll: () => void;
}