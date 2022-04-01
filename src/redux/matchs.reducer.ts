import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MatchType } from "../Types/MatchTypes";
import { parseResponse } from "../utils/parseResponse";

const fetchData = async () => {
  matchLoading(true);
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
  matchLoading(true);
  const response = await fetchData();
  return response;
});

interface MatchesState {
  entities: [];
  loading: boolean;
}

const initialState = {
  entities: [],
  loading: false,
} as MatchesState;

// Then, handle actions in your reducers:
export const matchesReducer = createSlice({
  name: "matches",
  initialState,
  reducers: {
    matchesSuccess(state, action) {
      state.entities = action.payload;
      state.loading = false;
    },
    matchDelete(state, action) {
      state.entities = state.entities.filter(
        (match: MatchType) => match.id !== action.payload
      ) as never;
    },
    matchAdd(state, action) {
      state.entities.unshift(action.payload as never);
    },
    matchLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(matchesFetch.fulfilled, (state, action) => {
      state.entities = action.payload as never;
    });
  },
});

export const { matchDelete, matchAdd, matchLoading } = matchesReducer.actions;
