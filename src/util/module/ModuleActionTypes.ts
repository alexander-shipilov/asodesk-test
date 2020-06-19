import { Prefixed } from "../Prefixed";

export interface ModuleActionTypes<P extends string> {
  [key: string]: Prefixed<P, any> | ModuleActionTypes<Prefixed<P, any>>;
}
