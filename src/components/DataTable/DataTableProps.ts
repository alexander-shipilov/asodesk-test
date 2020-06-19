import { Column } from "react-table";
import { StyledProps } from "../../util";

export interface DataTableData {
  id: number
}

export interface ConcreteDataTableProps<T extends DataTableData> extends StyledProps {
  data: T[];
  selected: Set<number>;
  selectedAll: boolean;
  onToggle: (id: number) => void;
  onToggleAll: (selectedAll: boolean) => void;
}

export interface DataTableProps<T extends DataTableData> extends ConcreteDataTableProps<T> {
  columns: Column<T>[];
}