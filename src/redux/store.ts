import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter.reducer";
import { matchesReducer } from "./matchs.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  matches: matchesReducer.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
