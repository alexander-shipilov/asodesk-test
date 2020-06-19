import { StatsApi, StatsData, StatsDataPosition } from "../../modules/stats";
import data from "./mocks/data-stats.json";
import { StatsResponse, StatsResponseData, StatsResponsePosition } from "./StatsResponse";

const { random } = Math;

const isPosition = (value: StatsResponsePosition): value is StatsDataPosition => typeof value.position === "number";

const normalizeResponseData = (data: StatsResponseData): StatsData => ({
  id: data.id,
  color: data.color,
  keyword: data.keyword,
  suggestionsCount: +data.suggestions_count || 0,
  totalApps: data.total_apps,
  usersPerDay: data.users_per_day,
  position: isPosition(data.position_info) ? data.position_info : null
});

const parseResponse = (response: StatsResponse): StatsData[] => response.data.map(normalizeResponseData);

export const statsApi: StatsApi = {
  fetch: (): Promise<StatsData[]> => new Promise((resolve) => setTimeout(() => resolve(), 500 + random() * 200))
    .then(() => parseResponse(data as StatsResponse))
};