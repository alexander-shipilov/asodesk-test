import React from "react";
import { Switch } from "react-router-dom";
import { DialogRoute } from "../../components/Dialog";
import { ConnectedStatsPage } from "./StatsPage";

const Empty = () => <div />;

export const StatsRoute = () => (
  <ConnectedStatsPage>
    <Switch>
      <DialogRoute path='/stats/show' closePath='/stats/' component={ Empty } rootId='' title='Show' timeout={ 300 } />
    </Switch>
  </ConnectedStatsPage>
);