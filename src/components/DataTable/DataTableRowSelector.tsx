import cx from "classnames";
import React, { memo, useCallback } from "react";
import { CheckBox } from "../CheckBox";
import { DataTableRowSelectorProps } from "./DataTableRowSelectorProps";

export const DataTableRowSelector = memo((props: DataTableRowSelectorProps) => {
  const { className, rowId, selected, onToggle, ...rest } = props;

  const onChange = useCallback((checked: boolean) => onToggle(rowId, checked), [rowId, onToggle]);

  return (
    <CheckBox { ...rest } checked={ selected } className={ cx("SelectableTableRowSelector", className) }
      onCheckedChange={ onChange } />
  );
});
