import { RootState } from "./store";

export const selectorCounter = (store: RootState) => store.counter;
