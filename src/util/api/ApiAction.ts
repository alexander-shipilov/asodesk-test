import { Action } from "redux";
import { PayloadAction } from "../PayloadAction";
import { ApiCallActionType, ApiCompletedActionType, ApiFailedActionType } from "./ApiActionType";

export type ApiCallAction<P extends string> = Action<ApiCallActionType<P>>;

export type ApiCompletedAction<P extends string, T> = PayloadAction<ApiCompletedActionType<P>, T>;

export type ApiFailedAction<P extends string> = PayloadAction<ApiFailedActionType<P>, Error>;

export type ApiAction<P extends string, T> =
  ApiCallAction<P>
  | ApiCompletedAction<P, T>
  | ApiFailedAction<P>;