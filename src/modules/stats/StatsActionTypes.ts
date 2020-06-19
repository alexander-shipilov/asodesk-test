import { EntityActionType, EntityActionTypes, Prefixed } from "../../util";

export type StatsRemoveActionType<P extends string> = Prefixed<P, "remove">;

export type StatsToggleActionType<P extends string> = Prefixed<P, "toggle">;

export type StatsToggleAllActionType<P extends string> = Prefixed<P, "toggleAll">;

export type StatsActionType<P extends string> =
  EntityActionType<P>
  | StatsRemoveActionType<P>
  | StatsToggleActionType<P>
  | StatsToggleAllActionType<P>;

export type StatsActionTypes<P extends string> = EntityActionTypes<P> & {
  remove: StatsRemoveActionType<P>;

  toggle: StatsToggleActionType<P>;

  toggleAll: StatsToggleAllActionType<P>;
}