import { StyledProps } from "../../util";

export interface DataTableRowSelectorProps extends StyledProps {
  rowId: number,
  selected: boolean,
  disabled?: boolean,
  onToggle: (rowId: number, checked: boolean) => void
}