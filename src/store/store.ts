import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

import leaderboardReducer from "./leaderboard/reducer";

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
});

const store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof rootReducer>;

export default store;
