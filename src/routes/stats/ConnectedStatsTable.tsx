import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../modules/app";
import { StatsTable, StatsTableProps } from "../../modules/stats";
import { statsModule } from "./statsModule";

export type ConnectedStatsTableProps = Omit<StatsTableProps,
  "data" | "selected" | "selectedAll" | "onRemove" | "onToggle" | "onToggleAll">

export function ConnectedStatsTable(props: ConnectedStatsTableProps) {
  const stats = useSelector((state: AppState) => state.stats);
  const dispatch = useDispatch();

  const onRemove = useCallback((id: number) => dispatch(statsModule.actions.remove(id)), [dispatch]);
  const onToggle = useCallback((id: number) => dispatch(statsModule.actions.toggle(id)), [dispatch]);
  const onToggleAll = useCallback(() => dispatch(statsModule.actions.toggleAll()), [dispatch]);

  return (
    <StatsTable { ...props } data={ stats.value } selected={ stats.selected } selectedAll={ stats.selectedAll }
      onRemove={ onRemove } onToggle={ onToggle } onToggleAll={ onToggleAll } />
  );
}