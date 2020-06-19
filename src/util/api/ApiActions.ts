import { ApiCallAction, ApiCompletedAction, ApiFailedAction } from "./ApiAction";

export type ApiActions<P extends string, T> = {
  call(): ApiCallAction<P>;

  completed(data: T): ApiCompletedAction<P, T>;

  failed(error: Error): ApiFailedAction<P>;
}