import { RootState } from "./store";

export const selectorCounter = (store: RootState) => store.counter;
export const selectorMatches = (store: RootState) => store.matches.entities;
export const selectorMatchesLoading = (store: RootState) =>
  store.matches.loading;
