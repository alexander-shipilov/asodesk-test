import cx from "classnames";
import React, { useMemo } from "react";
import { CellProps, useTable } from "react-table";
import { CheckBox } from "../CheckBox";
import "./DataTable.scss";
import { DataTableData, DataTableProps } from "./DataTableProps";

export function DataTable<I, T extends DataTableData<I>>(props: DataTableProps<I, T>) {
  const { className, data, selection, onToggle, onToggleAll } = props;

  const columns = useMemo(() => {
    let columns = props.columns;

    if (selection) {
      const { isAllSelected, selectedCount } = selection;
      columns = [
        {
          id: "selection",

          Header: () => (
            <CheckBox checked={ isAllSelected || (selectedCount === 0 ? false : undefined) }
              className='Table__toggle' onCheckedChange={ onToggleAll } />
          ),

          Cell: ({ row }: CellProps<T>) => {
            const { id } = row.original;
            const checked = selection.isSelected(id);

            return (
              <div>
                <CheckBox checked={ checked } disabled={ checked && selectedCount === 1 }
                  className='Table__toggle' onCheckedChange={ () => onToggle(id) } />
              </div>
            );
          }
        },
        ...columns
      ];
    }

    return columns;
  }, [props.columns, selection, onToggle, onToggleAll]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table { ...getTableProps() } className={ cx("DataTable", className) }>
      <thead className='DataTable__header'>
        {
          headerGroups.map(headerGroup => (
            <tr { ...headerGroup.getHeaderGroupProps() } className='DataTable__row DataTable__row_header'>
              {
                headerGroup.headers.map(column => (
                  <th { ...column.getHeaderProps() }
                    className={ cx("DataTable__cell", "DataTable__cell_header", `DataTable__cell_${ column.id }`) }>
                    { column.render("Header") }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      <tbody { ...getTableBodyProps() } className='DataTable__body'>
        {
          rows.map((row) => {
            prepareRow(row);

            return (
              <tr { ...row.getRowProps() } className='DataTable__row'>
                {
                  row.cells.map(cell => (
                    <td { ...cell.getCellProps() }
                      className={ cx("DataTable__cell", `DataTable__cell_${ cell.column.id }`) }>
                      { cell.render("Cell") }
                    </td>
                  ))
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}
