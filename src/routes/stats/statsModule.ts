import { StatsModule } from "../../modules/stats";
import { statsApi } from "./statsApi";

export const statsModule = new StatsModule("stats");

export const statsSaga = statsModule.createSaga(statsApi);

export const statsReducer = statsModule.createReducer(statsModule.createState([]));