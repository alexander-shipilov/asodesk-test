import { combineReducers, Reducer } from "redux";
import { AppState } from "../modules/app";
import { statsModule, statsReducer } from "../routes/stats";

export const createReducer = (): Reducer<AppState> => combineReducers({
  [statsModule.prefix]: statsReducer
});
