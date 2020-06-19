import { Reducer } from "redux";
import { ModuleActions } from "./ModuleActions";
import { ModuleActionTypes } from "./ModuleActionTypes";

export interface CoreModule<P extends string,
  V extends any,
  T extends ModuleActionTypes<P>,
  A extends ModuleActions<P>>
{
  readonly prefix: P;

  readonly actionTypes: T;

  readonly actions: A;
}

export interface StateModule<V extends any, S extends any> {
  createState(value: V, ...args: any[]): S;

  createReducer<IS extends S = S>(initialState: IS, ...args: any[]): Reducer<IS>;
}

export interface SagaModule<I extends any> {
  createSaga<AI extends I>(impl: AI, ...args: any[]): () => Generator<any>;
}

export interface Module<P extends string,
  V extends any,
  T extends ModuleActionTypes<P>,
  A extends ModuleActions<P>,
  S extends any,
  I extends any>
{
  readonly prefix: P;

  readonly actionTypes: T;

  readonly actions: A;

  createState(value: V, ...args: any[]): S;

  createReducer<IS extends S = S>(initialState: IS, ...args: any[]): Reducer<IS>;

  createSaga<AI extends I>(impl: AI, ...args: any[]): () => Generator<any>;
}

export abstract class AbstractModule<P extends string,
  V extends any,
  T extends ModuleActionTypes<P>,
  A extends ModuleActions<P>,
  S extends any,
  I extends any>
{

  public abstract actionTypes: T;
  public abstract actions: A;

  constructor(public prefix: P) {
  }

  public abstract createState(value: V, ...args: any[]): S;

  public abstract createReducer<IS extends S = S>(initialState: IS, ...args: any[]): Reducer<IS>;

  public abstract createSaga<AI extends I>(impl: AI, ...args: any[]): () => Generator<any>;
}