import { Dispatch } from "redux";

import { TOP_RANK } from "@config/constant";
import leaderboardData from "@assets/leaderboard.json";
import { fuzzySearch } from "@utils/fuzzySearch";
import { sortUserData } from "@utils/sortData";
import { AppState } from "@store/store";

import { setError, setIsLoading, setSearchResult } from "./mutations";
import { initialState } from "./reducer";
import { actions, DispatchParameter } from "./types";

export const fetchData = () => (dispatch: Dispatch) => {
  dispatch(setError(undefined));
  try {
    dispatch(setIsLoading(true));
    const data = Object.values(leaderboardData);
    // mapped out the rank on user
    const sortedData = [...data].sort((a, b) => {
      if (a.bananas === b.bananas) {
        // if the score are equal, sort by name
        // if name is empty push out to end of rank of the same bananas
        if (!a.name) return 1;
        if (!b.name) return -1;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return b.bananas - a.bananas;
    });
    const mappedData = sortedData.map((user, index) => ({ ...user, rank: index + 1 }));
    dispatch({
      type: actions.fetchData,
      payload: mappedData,
    });
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setError("Something went wrong, please try again.."));
    dispatch(setIsLoading(false));
  }
};

export const searchUser = (query: string, sortBy: SortBy, orderBy: OrderBy) => {
  return (dispatch: Dispatch, getState: () => AppState) => {
    try {
      dispatch(setIsLoading(true));

      const { data: allData } = getState().leaderboard;
      const data = [...allData].sort((a, b) => (a?.rank || 0) - (b?.rank || 0));
      const searchResult = data.slice(0, TOP_RANK);
      const selectedUser = fuzzySearch(data, query);

      if (selectedUser) {
        if (selectedUser?.rank && selectedUser?.rank > TOP_RANK) {
          searchResult.pop();
          searchResult.push(selectedUser);
        }
        const sortedData = sortUserData(searchResult, sortBy, orderBy);
        dispatch(setSearchResult(sortedData, selectedUser));
      } else {
        dispatch(setError("This user name doesn't exist. Please specify an exisiting user name!"));
      }
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setError("Something went wrong, please try again.."));
      dispatch(setIsLoading(false));
    }
  };
};

export const sortData =
  (sortBy: SortBy, orderBy: OrderBy, isSearchedData?: boolean) => (dispatch: Dispatch, getState: () => AppState) => {
    try {
      dispatch(setIsLoading(true));
      const { data: allData, searchResult } = getState().leaderboard;
      const data = isSearchedData && searchResult.length ? searchResult : allData;

      const sortedData = sortUserData(data, sortBy, orderBy);

      if (isSearchedData) {
        dispatch({
          type: actions.updateSearchList,
          payload: sortedData,
        });
      } else {
        dispatch({
          type: actions.fetchData,
          payload: sortedData,
        });
      }

      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setError("Something went wrong, please try again.."));
      dispatch(setIsLoading(false));
    }
  };
