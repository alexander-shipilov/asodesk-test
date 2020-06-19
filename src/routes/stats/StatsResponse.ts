import { StatsDataPosition } from "../../modules/stats";

export type StatsResponseRank = number | null;

export type StatsResponseResult = "ok" | string;

export type StatsResponseInvalidPosition = { position: "-", change: null };

export type StatsResponsePosition = StatsDataPosition | StatsResponseInvalidPosition;

export type StatsResponseIn = { count: number, full: boolean };

export type StatsResponseData = {
  best_rank: StatsResponseRank,
  canStartCampaign: number,
  color: number,
  countryCode: string,
  custom_traffic_score: any,
  favorite: boolean,
  id: number,
  in_name: StatsResponseIn,
  in_subtitle: StatsResponseIn,
  ipad_best_rank: StatsResponseRank,
  ipad_position_info: StatsResponsePosition,
  ipad_total_apps: number,
  isAppstore: boolean,
  isCompleted: boolean,
  is_clustered_search_result: false,
  is_keywordstats_outdated: false,
  keyword: string,
  note: string,
  position_info: StatsResponsePosition,
  searchads_popularity: number,
  suggestions_count: number,
  timestamp: string,
  total_apps: number,
  translation: string,
  translation_from: string,
  updateDate: string,
  updateDateIpad: string,
  users_per_day: number
};

export interface StatsResponse {
  data: StatsResponseData[],
  tabs: any[],
  has_available_keywords: boolean,
  pages: number,
  recordsTotal: number,
  recordsFiltered: number,
  result: StatsResponseResult
}