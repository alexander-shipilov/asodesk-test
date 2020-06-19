import { ActionCreator, AnyAction } from "redux";
import { Prefixed } from "../Prefixed";

export interface ModuleActions<P extends string> {
  [key: string]: ActionCreator<AnyAction> | ModuleActions<Prefixed<P, any>>
}