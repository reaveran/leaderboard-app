// Need to separate into several file if there are a lot of type

interface User {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank?: number;
}

interface DropdownOption<T> {
  label: string;
  value: T;
}

type SortBy = "name" | "score";
type OrderBy = "asc" | "desc";

type DispatchTypes<T, P> = {
  type: T;
  payload: P;
};

declare module "*.png" {
  const value: string;
  export default value;
}
