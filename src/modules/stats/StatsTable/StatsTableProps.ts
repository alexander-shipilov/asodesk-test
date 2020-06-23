import { ConcreteDataTableProps } from "../../../components/DataTable";
import { StatsData } from "../index";

export interface StatsTableProps extends ConcreteDataTableProps<number, StatsData> {
  onRemove: (id: number) => void;
}