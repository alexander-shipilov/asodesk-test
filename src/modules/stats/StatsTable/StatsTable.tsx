import cx from "classnames";
import React, { useMemo } from "react";
import { IoMdTrash as RemoveIcon } from "react-icons/io";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { CellProps, Column } from "react-table";
import { Color } from "../../../components/Color";
import { DataTable } from "../../../components/DataTable";
import { Numerical } from "../../../components/Numerical";
import { StatsData } from "../StatsData";
import { StatsPosition } from "../StatsPosition";
import "./StatsTable.scss";
import { StatsTableProps } from "./StatsTableProps";


export const StatsTable = (props: StatsTableProps) => {
  const { data, className, onRemove, ...rest } = props;

  const columns: Column<StatsData>[] = useMemo(
    (): Column<StatsData>[] => [
      {
        accessor: "keyword",
        Header: (
          <FormattedMessage id='stats.table.keywords.header' defaultMessage='Keywords' />
        )
      },
      {
        id: "explore",
        Header: "",
        Cell: ({ row }: CellProps<StatsData>) => (
          <Link to={ `/explore/${ row.values.keyword }` } className={ "Button" }>
            <FormattedMessage id='stats.table.explore.button.text' defaultMessage='Explore' />
          </Link>
        )
      },
      {
        accessor: "suggestionsCount",
        Header: "",
        Cell: ({ value }) => (
          <Link to='/stats/show' className={ "Button" }>
            <FormattedMessage id='stats.table.show.button.text' values={ { value } }
              defaultMessage='Show' />
          </Link>
        )
      },
      {
        accessor: "usersPerDay",
        Header: (
          <FormattedMessage id='stats.table.usersPerDay.header' defaultMessage='Traffic Score' />
        ),
        Cell: ({ value }) => (
          <Numerical value={ value } />
        )
      },
      {
        accessor: "totalApps",
        Header: (
          <FormattedMessage id='stats.table.totalApps.header' defaultMessage='Total Apps' />
        ),
        Cell: ({ value }) => (
          <Numerical value={ value } />
        )
      },
      {
        accessor: "position",
        Header: (
          <FormattedMessage id='stats.table.position.header' defaultMessage='Rank' />
        ),
        Cell: ({ value }) => (
          value ? <StatsPosition value={ value } /> : null
        )
      },
      {
        accessor: "color",
        Header: (
          <FormattedMessage id='stats.table.color.header' defaultMessage='Color' />
        ),
        Cell: ({ value }) => (
          <Color value={ value } />
        )
      },
      {
        id: "remove",
        Header: "",
        Cell: ({ row }: CellProps<StatsData>) => (
          <RemoveIcon onClick={ () => onRemove(row.original.id) } className='StatsTable__remove' />
        )
      }
    ],
    [onRemove]
  );

  return (
    <DataTable { ...rest } columns={ columns } data={ data } className={ cx("StatsTable", className) } />
  );
};
