import { Nullable } from "../Nullable";

export interface Entity<T> {
  value: T,
  error: Nullable<Error>,
  loading: boolean,
}