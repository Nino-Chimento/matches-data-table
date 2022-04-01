import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
