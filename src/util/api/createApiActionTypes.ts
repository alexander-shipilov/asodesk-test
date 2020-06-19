import { createPrefixed } from "../createPrefixed";
import { ApiActionTypes } from "./ApiActionTypes";

export const createApiActionTypes =
  <P extends string>(prefix: P): ApiActionTypes<P> => ({
    call: createPrefixed(prefix, "call"),

    completed: createPrefixed(prefix, "completed"),

    failed: createPrefixed(prefix, "failed")
  });
