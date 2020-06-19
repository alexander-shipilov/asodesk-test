import { Nullable } from "../Nullable";
import { State } from "../State";
import { Entity } from "./Entity";

export class EntityState<T> extends State<Entity<T>> implements Entity<T> {
  public readonly error: Nullable<Error> = null;

  public readonly loading: boolean = false;

  constructor(public readonly value: T) {
    super();
  }
}