import { Prefixed } from "./Prefixed";

export function createPrefixed<P extends string, T extends string>(prefix: P, type: T): Prefixed<P, T> {
  return `${ prefix }/${ type }` as Prefixed<P, T>;
}