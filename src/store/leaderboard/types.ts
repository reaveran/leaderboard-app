export enum actions {
  fetchData = "FETCH_DATA",
  searchUser = "SEARCH_USER",
  sortData = "SORT_DATA",
  loadingData = "LOADING_DATA",
  setError = "SET_ERROR",
  updateSearchList = "UPDATE_SEARCH_LIST",
}

export interface State {
  data: User[];
  error?: string;
  isLoading: boolean;
  searchResult: User[];
  searchedUser?: User;
}

export type DispatchParameter =
  | DispatchTypes<typeof actions.fetchData, User[]>
  | DispatchTypes<typeof actions.sortData, User[]>
  | DispatchTypes<typeof actions.updateSearchList, User[]>
  | DispatchTypes<typeof actions.loadingData, boolean>
  | DispatchTypes<typeof actions.setError, string | undefined>
  | DispatchTypes<typeof actions.searchUser, { searchResult: User[]; searchedUser: User | undefined }>;
