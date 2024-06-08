import { AppState } from "@store/store";

export const leaderboardListSelector = (state: AppState) => state.leaderboard.data;
export const searchListSelector = (state: AppState) => state.leaderboard.searchResult;
export const searchedUserSelector = (state: AppState) => state.leaderboard.searchedUser;
export const isLeaderboardLoadingSelector = (state: AppState) => state.leaderboard.isLoading;
export const errorLeaderboardSelector = (state: AppState) => state.leaderboard.error;
