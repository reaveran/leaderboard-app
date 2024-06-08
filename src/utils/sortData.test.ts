import {
  sortedUserDataSampleByNameAsc,
  sortedUserDataSampleByNameDesc,
  sortedUserDataSampleByScoreAsc,
  sortedUserDataSampleByScoreDesc,
  userDataSampleWithRank,
} from "@assets/testData";

import { sortUserData } from "./sortData";

describe("sortUserData", () => {
  it("should sort users by name in ascending order", () => {
    const sortedUsers = sortUserData(userDataSampleWithRank, "name", "asc");
    expect(sortedUsers).toEqual(sortedUserDataSampleByNameAsc);
  });

  it("should sort users by name in descending order", () => {
    const sortedUsers = sortUserData(userDataSampleWithRank, "name", "desc");
    expect(sortedUsers).toEqual(sortedUserDataSampleByNameDesc);
  });

  it("should sort users by rank in ascending order", () => {
    const sortedUsers = sortUserData(userDataSampleWithRank, "score", "asc");
    expect(sortedUsers).toEqual(sortedUserDataSampleByScoreAsc);
  });

  it("should sort users by rank in descending order", () => {
    const sortedUsers = sortUserData(userDataSampleWithRank, "score", "desc");
    expect(sortedUsers).toEqual(sortedUserDataSampleByScoreDesc);
  });
});
