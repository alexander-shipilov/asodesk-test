import { Nullable } from "../Nullable";
import { State } from "../State";
import { Entity } from "./Entity";

export class EntityState<T> extends State<Entity<T>> implements Entity<T> {
  public error: Nullable<Error> = null;

  public loading: boolean = false;

  constructor(public data: T) {
    super();
  }

  setData(data: T): this {
    return this.merge({ data });
  }
}