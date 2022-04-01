import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { decrement, increment, reset } from "./actions";

export const counterReducer = createReducer(0, {
  [increment.type]: (state: number, action: PayloadAction<number>) =>
    state + action.payload,
  [decrement.type]: (state: number, action: PayloadAction<number>) =>
    state - action.payload,
  [reset.type]: (state: number) => (state = 0),
});
