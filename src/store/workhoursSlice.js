import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWorkhours } from "../api/jira/JiraAPI";

export const fetchWorkHours = createAsyncThunk(
  "workhours/fetchWorkHours",
  async function (params, { rejectWithValue }) {
    try {
      const data = await getWorkhours(params.fromDate, params.toDate);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const workhoursSlice = createSlice({
  name: "workhours",
  initialState: {
    workhours: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchWorkHours.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWorkHours.fulfilled]: (state, action) => {
      state.status = "completed";
      state.workhours = action.payload;
    },
    [fetchWorkHours.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default workhoursSlice.reducer;
