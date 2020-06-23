import React from "react";
import { DataPage } from "../../../components/DataPage";
import { StatsTable, useStatsModule } from "../../../modules/stats";
import { statsModule } from "../statsModule";
import { StatsPageProps } from "./StatsPageProps";

export const StatsPage = ({ children }: StatsPageProps) => {
  const statsModuleProps = useStatsModule(statsModule);
  const { data, error, loading, onLoad, ...rest } = statsModuleProps;

  return (
    <DataPage data={ data } error={ error } loading={ loading } onLoad={ onLoad } onReady={ onLoad }>
      { data.length === 0 ? null : <StatsTable data={ data } { ...rest } /> }
      { children }
    </DataPage>
  );
};