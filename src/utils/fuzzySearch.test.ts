import { userDataSample } from "@assets/testData";

import { fuzzySearch } from "./fuzzySearch";

describe("fuzzySearch", () => {
  it("should return the user whose name matches the query at the beginning of a word", () => {
    const result: User | undefined = fuzzySearch(userDataSample, "alice");
    expect(result?.name).toEqual("Alice Johnson");
  });

  it("should return the user whose name has the match word earlier (first name)", () => {
    const result: User | undefined = fuzzySearch(userDataSample, "clark");
    expect(result?.name).toEqual("Clarke Lee");
  });

  it("should be case insensitive", () => {
    const result: User | undefined = fuzzySearch(userDataSample, "CHAR");
    expect(result?.name).toEqual("Charlote Wilson");
  });

  it("should return undefined if no user matches the query", () => {
    const result: User | undefined = fuzzySearch(userDataSample, "test");
    expect(result).toBeUndefined();
  });
});
