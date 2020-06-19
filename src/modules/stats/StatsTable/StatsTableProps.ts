import { Column } from "react-table";
import { ConcreteDataTableProps } from "../../../components/DataTable";
import { StatsData } from "../index";

export interface StatsTableProps extends ConcreteDataTableProps<StatsData> {
  columns?: Column<StatsData>[];
  onRemove: (id: number) => void;
}