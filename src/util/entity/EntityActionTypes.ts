import { ApiActionType, ApiActionTypes } from "../api";
import { Prefixed } from "../Prefixed";

export type EntityActionTypesFetch<P extends string> = Prefixed<P, "fetch">;

export type EntityActionTypes<P extends string> = {
  fetch: ApiActionTypes<EntityActionTypesFetch<P>>
}

export type EntityActionType<P extends string> = ApiActionType<EntityActionTypesFetch<P>>;