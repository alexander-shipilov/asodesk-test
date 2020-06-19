import { Action } from "redux";
import { EntityAction, EntityActions, PayloadAction } from "../../util";
import { StatsRemoveActionType, StatsToggleActionType, StatsToggleAllActionType } from "./StatsActionTypes";
import { StatsData } from "./StatsData";

export type StatsRemoveAction<P extends string> = PayloadAction<StatsRemoveActionType<P>, number>;

export type StatsToggleAction<P extends string> = PayloadAction<StatsToggleActionType<P>, number>;

export type StatsToggleAllAction<P extends string> = Action<StatsToggleAllActionType<P>>;

export type StatsAction<P extends string> =
  EntityAction<P, StatsData[]>
  | StatsRemoveAction<P>
  | StatsToggleAction<P>
  | StatsToggleAllAction<P>;

export type StatsActions<P extends string> = EntityActions<P, StatsData[]> & {
  remove(id: number): StatsRemoveAction<P>;

  toggle(id: number): StatsToggleAction<P>;

  toggleAll(): StatsToggleAllAction<P>;
}