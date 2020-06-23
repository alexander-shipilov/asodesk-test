import { Column } from "react-table";
import { Nullable, SelectionState, StyledProps } from "../../util";

export interface DataTableData<I> {
  id: I
}

export interface ConcreteDataTableProps<I, T extends DataTableData<I>> extends StyledProps {
  data: T[];
  selection: Nullable<SelectionState<I>>;
  onToggle: (id: I) => void;
  onToggleAll: (selectedAll: boolean) => void;
}

export interface DataTableProps<I, T extends DataTableData<I>> extends ConcreteDataTableProps<I, T> {
  columns: Column<T>[];
}