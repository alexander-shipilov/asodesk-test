import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../app";
import { StatsModule } from "./StatsModule";
import { StatsModuleProps } from "./StatsModuleProps";

export function useStatsModule<P extends string>(statsModule: StatsModule<P>): StatsModuleProps {
  const { fetch, remove, toggle, toggleAll } = statsModule.actions;
  const stats = useSelector((state: AppState) => state.stats);
  const dispatch = useDispatch();

  return {
    ...stats,
    onLoad: useCallback(() => dispatch(fetch.call()), [dispatch, fetch]),
    onRemove: useCallback((id: number) => dispatch(remove(id)), [dispatch, remove]),
    onToggle: useCallback((id: number) => dispatch(toggle(id)), [dispatch, toggle]),
    onToggleAll: useCallback(() => dispatch(toggleAll()), [dispatch, toggleAll])
  };
}