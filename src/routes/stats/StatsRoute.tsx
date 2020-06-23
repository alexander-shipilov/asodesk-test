import React from "react";
import { Switch } from "react-router-dom";
import { DataPage } from "../../components/DataPage";
import { DialogRoute } from "../../components/Dialog";
import { StatsTable, useStatsModule } from "../../modules/stats";
import { statsModule } from "./statsModule";

const Empty = () => <div />;

export const StatsRoute = () => {
  const statsModuleProps = useStatsModule(statsModule);
  const { data, error, loading, onLoad, ...rest } = statsModuleProps;

  return (
    <DataPage data={ data } error={ error } loading={ loading } onLoad={ onLoad } onReady={ onLoad }>
      { data.length === 0 ? null : <StatsTable data={ data } { ...rest } /> }

      <Switch>
        <DialogRoute path='/stats/show' closePath='/stats/' component={ Empty }
          rootId='' title='Show' timeout={ 300 } />
      </Switch>
    </DataPage>
  );
};