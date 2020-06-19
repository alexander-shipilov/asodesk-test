import { ApiCallActionType, ApiCompletedActionType, ApiFailedActionType } from "./ApiActionType";

export type ApiActionTypes<P extends string> = {
  call: ApiCallActionType<P>;

  completed: ApiCompletedActionType<P>;

  failed: ApiFailedActionType<P>;
}