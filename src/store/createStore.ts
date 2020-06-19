import { applyMiddleware, compose, createStore as createReduxStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { AppState } from "../modules/app";
import { statsSaga } from "../routes/stats";
import { createReducer } from "./createReducer";

export const createStore = (initialState: AppState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );

  sagaMiddleware.run(statsSaga);

  return store;
};
