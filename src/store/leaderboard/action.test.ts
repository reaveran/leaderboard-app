import {
  correctFetchDataFromJson,
  mockJson,
  sortedDataByNameAsc,
  sortedSearchResultByNameAsc,
  sortedSearchResultByScoreAsc,
  top10UserWithSearchedUser,
} from "@assets/testData";
import store from "@store/store";

import { fetchData, searchUser, sortData } from "./actions";

/**
 * since I think there is something wrong with the redux + redux thunk package (deprecated)
 * I will test the wether the state is correct
 * */

jest.mock("@assets/leaderboard.json", () => mockJson);
const mockStore = store;

describe("fetchData", () => {
  it("dispatch action and processes data correctly", () => {
    mockStore.dispatch(fetchData());
    const result = mockStore.getState().leaderboard.data;
    expect(result).toEqual(correctFetchDataFromJson);
  });
});

describe("searchUser", () => {
  it("dispatch action and return top 10 rank with user search and the user is in top 10", () => {
    mockStore.dispatch(searchUser("john", "score", "asc"));
    const searchedUser = mockStore.getState().leaderboard.searchedUser;
    const searchedResult = mockStore.getState().leaderboard.searchResult;

    expect(searchedUser).toEqual({
      bananas: 350,
      lastDayPlayed: "2020-05-10",
      longestStreak: 5,
      name: "John Smith",
      stars: 8,
      subscribed: true,
      uid: "00A2Bb9cdEf23HijKlmN4OpQrSt5",
      rank: 2,
    });

    expect(searchedResult).toEqual(top10UserWithSearchedUser);
  });

  it("dispatch action and return top 10 rank with user found but not in the top 10 and it should be in the bottom of the list", () => {
    mockStore.dispatch(searchUser("david", "score", "asc"));

    const user = {
      bananas: 50,
      lastDayPlayed: "2024-05-30",
      longestStreak: 9,
      name: "David Wilson",
      stars: 10,
      subscribed: true,
      uid: "00T0Vw3Xy4Za5Bc6De7Fg8HijKl9",
      rank: 13,
    };
    const searchedUser = mockStore.getState().leaderboard.searchedUser;
    const searchedResult = mockStore.getState().leaderboard.searchResult;
    expect(searchedUser).toEqual(user);

    expect(searchedResult.length).toEqual(10);
    expect(searchedResult[9]).toEqual(user);
  });

  it("dispatch action and return error user not found", () => {
    mockStore.dispatch(searchUser("testt", "score", "asc"));
    const error = mockStore.getState().leaderboard.error;
    expect(error).toEqual("This user name doesn't exist. Please specify an exisiting user name!");
  });
});

describe("sortData", () => {
  it("dispatch actions and sort the initial data correctly by name asc", () => {
    mockStore.dispatch(sortData("name", "asc", false));
    const result = mockStore.getState().leaderboard.data;
    expect(result).toEqual(sortedDataByNameAsc);
  });

  it("dispatch actions and sort the searched data (top 10) correctly by name asc", () => {
    mockStore.dispatch(searchUser("John", "score", "asc"));
    mockStore.dispatch(sortData("name", "asc", true));
    const result = mockStore.getState().leaderboard.searchResult;
    expect(result).toEqual(sortedSearchResultByNameAsc);
  });

  it("dispatch actions and sort the initial data correctly by score/rank asc", () => {
    mockStore.dispatch(sortData("score", "asc", false));
    const result = mockStore.getState().leaderboard.data;
    expect(result).toEqual(correctFetchDataFromJson);
  });

  it("dispatch actions and sort the searched data (top 10) correctly by score/rank asc", () => {
    mockStore.dispatch(searchUser("John", "score", "asc"));
    mockStore.dispatch(sortData("score", "asc", false));
    const result = mockStore.getState().leaderboard.searchResult;
    expect(result).toEqual(sortedSearchResultByScoreAsc);
  });
});
