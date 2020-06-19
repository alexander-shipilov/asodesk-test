import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { DataPage } from "../../../components/DataPage";
import { AppState } from "../../../modules/app";
import { ConnectedStatsTable } from "../ConnectedStatsTable";
import { statsModule } from "../statsModule";
import { StatsPageProps } from "./StatsPageProps";

export const StatsPage = ({ children, data, ...rest }: StatsPageProps) => (
  <DataPage data={data} { ...rest }>
    { data.length === 0 ? null : <ConnectedStatsTable /> }
    { children }
  </DataPage>
);

const mapStateToProps = ({ stats }: AppState) => {
  return {
    data: stats.value,
    error: stats.error,
    loading: stats.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onReady: () => dispatch(statsModule.actions.fetch.call()),
  onLoad: () => dispatch(statsModule.actions.fetch.call())
});

export const ConnectedStatsPage = connect(mapStateToProps, mapDispatchToProps)(StatsPage);