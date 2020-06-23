import { Nullable } from "./Nullable";

const { assign, create, getPrototypeOf } = Object;

export abstract class State<T> {
  /**
   * @param value
   */
  protected constructor(value?: Partial<T>) {
    return this.assign(value);
  }

  /**
   * @param value
   */
  public update(value: T | this): this {
    return this.create(value);
  }

  /**
   * @param sources
   */
  public merge(...sources: Nullable<Partial<T> | this>[]): this {
    return this.create(this).assign(...sources);
  }

  /**
   * @param sources
   */
  protected assign(...sources: Nullable<Partial<T> | this>[]): this {
    return assign(this, ...sources);
  }

  /**
   * @param value
   * @param sources
   */
  protected create(value: this | T, ...sources: Nullable<Partial<T> | this>[]): this {
    return create(getPrototypeOf(this)).assign(value, ...sources);
  }
}