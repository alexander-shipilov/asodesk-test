import { ApiImpl } from "../api";

export interface EntityApi<T extends any> {
  fetch: ApiImpl<T>
}