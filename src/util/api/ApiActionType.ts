import { Prefixed } from "../Prefixed";

export type ApiCallActionType<P extends string> = Prefixed<P, "call">;

export type ApiCompletedActionType<P extends string> = Prefixed<P, "completed">;

export type ApiFailedActionType<P extends string> = Prefixed<P, "failed">;

export type ApiActionType<P extends string> =
  ApiCallActionType<P>
  | ApiCompletedActionType<P>
  | ApiFailedActionType<P>;
