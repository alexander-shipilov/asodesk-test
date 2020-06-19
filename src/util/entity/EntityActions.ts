import { ApiAction, ApiActions } from "../api";
import { EntityActionTypesFetch } from "./EntityActionTypes";

export type EntityAction<P extends string, T> = ApiAction<EntityActionTypesFetch<P>, T>;

export type EntityActions<P extends string, T extends any> = {
  fetch: ApiActions<EntityActionTypesFetch<P>, T>;
}
