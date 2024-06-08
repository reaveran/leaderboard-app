import { actions, DispatchParameter, State } from "./types";

export const initialState: State = {
  data: [],
  isLoading: false,
  searchResult: [],
  searchedUser: undefined,
};

const leaderboardReducer = (state = initialState, action: DispatchParameter): State => {
  switch (action.type) {
    case actions.fetchData:
      return {
        ...state,
        data: action.payload,
      };
    case actions.loadingData:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.searchUser:
      return {
        ...state,
        searchResult: action.payload.searchResult,
        searchedUser: action.payload.searchedUser,
      };
    case actions.setError:
      return {
        ...state,
        error: action.payload,
      };
    case actions.sortData:
      return {
        ...state,
        data: action.payload,
      };
    case actions.updateSearchList:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
