import React from "react";
import { Switch } from "react-router-dom";
import { DialogRoute } from "../../components/Dialog";
import { StatsPage } from "./StatsPage";

const Empty = () => <div />;

export const StatsRoute = () => (
  <StatsPage>
    <Switch>
      <DialogRoute path='/stats/show' closePath='/stats/' component={ Empty } rootId='' title='Show' timeout={ 300 } />
    </Switch>
  </StatsPage>
);