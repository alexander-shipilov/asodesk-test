import { ApiActions } from "./ApiActions";
import { ApiActionTypes } from "./ApiActionTypes";

export const createApiActions =
  <P extends string, T>(actionTypes: ApiActionTypes<P>): ApiActions<P, T> => ({
    call: () => ({ type: actionTypes.call }),

    completed: (data: T) => ({ type: actionTypes.completed, payload: data }),

    failed: (error: Error) => ({ type: actionTypes.failed, payload: error })
  });