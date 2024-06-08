import { actions, DispatchParameter, State } from "./types";

export const setIsLoading = (data: State["isLoading"]): DispatchParameter => ({
  type: actions.loadingData,
  payload: data,
});

export const setError = (data: State["error"]): DispatchParameter => ({
  type: actions.setError,
  payload: data,
});

export const setSearchResult = (
  searchResult: State["searchResult"],
  searchedUser: State["searchedUser"]
): DispatchParameter => ({
  type: actions.searchUser,
  payload: { searchResult, searchedUser },
});
