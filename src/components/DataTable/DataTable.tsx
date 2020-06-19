import cx from "classnames";
import React from "react";
import { CellProps, Hooks, useTable } from "react-table";
import { CheckBox } from "../CheckBox";
import "./DataTable.scss";
import { DataTableData, DataTableProps } from "./DataTableProps";
import { DataTableRowSelector } from "./DataTableRowSelector";

export function DataTable<D extends DataTableData>(props: DataTableProps<D>) {
  const { className, columns, data, selected, selectedAll, onToggle, onToggleAll } = props;

  function selectable<D extends DataTableData>(hooks: Hooks<D>) {
    hooks.visibleColumns.push(columns => [
      {
        id: "selection",

        Header: () => (
          <CheckBox checked={ selectedAll || (selected.size ? undefined : false) } className='Table__toggle'
            onCheckedChange={ onToggleAll } />
        ),

        Cell: ({ row }: CellProps<D>) => {
          const { id } = row.original;
          const isSelected = selected.has(id);
          const checked = selectedAll || isSelected;
          const disabled = !selectedAll && isSelected && selected.size === 1;

          return (
            <div>
              <DataTableRowSelector rowId={ id } selected={ checked } disabled={ disabled }
                className='Table__toggle' onToggle={ onToggle } />
            </div>
          );
        }
      },
      ...columns
    ]);
  }

  const hooks = [selectable];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, ...hooks);

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
