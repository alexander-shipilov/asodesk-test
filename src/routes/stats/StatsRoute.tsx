import React from "react";
import { MdInfo as InfoIcon } from "react-icons/all";
import { FormattedMessage } from "react-intl";
import { Link, Switch } from "react-router-dom";
import { DataPage } from "../../components/DataPage";
import { DialogRoute } from "../../components/Dialog";
import { StatsTable, useStatsModule } from "../../modules/stats";
import { statsModule } from "./statsModule";

const Empty = () => <div />;

export const StatsRoute = () => {
  const statsModuleProps = useStatsModule(statsModule);
  const { data, error, loading, onLoad, ...rest } = statsModuleProps;

  const title = (
    <FormattedMessage id={ "app.stats.title" } defaultMessage='Stats' />
  );

  const actions = (
    <Link to='/info/' className="Page__action">
      <InfoIcon className='Page__actionIcon' />
      <FormattedMessage id='app.stats.info' defaultMessage='Info' />
    </Link>
  );

  return (
    <DataPage title={ title } actions={ actions }
      error={ error } loading={ loading } onLoad={ onLoad } onReady={ onLoad }>

      { data.length === 0 ? null : <StatsTable data={ data } { ...rest } /> }

      <Switch>
        <DialogRoute path='/stats/show' closePath='/stats/' component={ Empty }
          rootId='' title='Show' timeout={ 300 } />
      </Switch>
    </DataPage>
  );
};