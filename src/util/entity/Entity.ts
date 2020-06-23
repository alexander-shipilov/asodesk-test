import { Nullable } from "../Nullable";

export interface Entity<T> {
  data: T;
  error: Nullable<Error>;
  loading: boolean;
  setData(data: T): this;
}