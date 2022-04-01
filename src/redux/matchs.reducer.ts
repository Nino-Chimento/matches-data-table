import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { parseResponse } from "../utils/parseResponse";

const fetchData = async () => {
  try {
    const response = await fetch("https://www.dontouch.ch/json/cc.json");
    const json = await response.json();
    const arrayValue = Object.values(json.doc[0].data.matches);
    return parseResponse(arrayValue.slice(0, 20));
  } catch (error) {
    console.log("error", error);
  }
};

export const matchesFetch = createAsyncThunk("matches/success", async () => {
  const response = await fetchData();

  return response;
});

interface MatchesState {
  entities: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  entities: [],
  loading: "idle",
} as MatchesState;

// Then, handle actions in your reducers:
export const matchesReducer = createSlice({
  name: "matches",
  initialState,
  reducers: {
    matchesSuccess(state, action) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(matchesFetch.fulfilled, (state, action) => {
      state.entities = action.payload as never;
    });
  },
});
