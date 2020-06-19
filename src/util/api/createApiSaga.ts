import { call, put, takeEvery } from "redux-saga/effects";
import { ApiActions } from "./ApiActions";
import { ApiActionTypes } from "./ApiActionTypes";
import { ApiImpl } from "./ApiImpl";

export const createApiSaga =
  <P extends string, T>(actionTypes: ApiActionTypes<P>, actions: ApiActions<P, T>, impl: ApiImpl<T>) => {
    function* apiCallSaga() {
      try {
        const data = yield call(impl);

        yield put(actions.completed(data));
      } catch (error) {
        yield put(actions.failed(error));
      }
    }

    return function* apiSaga() {
      yield takeEvery(actionTypes.call, apiCallSaga);
    };
  };