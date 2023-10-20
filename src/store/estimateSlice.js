import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  STATUS_COMPLETED,
  STATUS_FAILED,
  STATUS_NOT_STARTED,
} from "../config/data/EstimatorConsts";
import { EntityTypes } from "../config/data/EntityTypes";

import {
  getEntities,
  getEntityCount,
  getEntityCustomFields,
} from "../api/trujay/TrujayAPI";

export const getEstimate = createAsyncThunk(
  "estimate/getEstimate",
  async function (appKey, { rejectWithValue, dispatch, getState }) {
    try {
      let entities;

      for (const type of getState().estimate.entityTypes) {
        if (type.isSelected) {
          dispatch(setStatus(`Fetching ${type.title} entities`));
          let page = 1;

          do {
            entities = await getEntities(appKey, page, type.id);

            for (const entity of entities) {
              dispatch(setStatus(`Count ${entity.entity}`));

              const count = await getEntityCount(appKey, entity.id);
              if (count.total > 0) {
                const customFields = await getEntityCustomFields(
                  appKey,
                  entity.id
                );
                dispatch(
                  setEstimate({
                    entityType: type.title,
                    title: entity.entity,
                    id: entity.id,
                    total: count.total,
                    customFields: customFields,
                  })
                );
              }
            }
            page++;
          } while (entities.length !== 0);
        }
      }
      return [];
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const estimateSlice = createSlice({
  name: "estimate",
  initialState: {
    estimate: [],
    entityTypes: EntityTypes,
    status: STATUS_NOT_STARTED,
    error: null,
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setEstimate(state, action) {
      state.estimate.push(action.payload);
    },
    clearEstimate(state, action) {
      state.estimate = [];
    },
    toggleEntityTypeSelected(state, action) {
      const toggledRecord = state.entityTypes.find(
        (type) => type.id === action.payload
      );
      toggledRecord.isSelected = !toggledRecord.isSelected;
    },
  },
  extraReducers: {
    [getEstimate.fulfilled]: (state, action) => {
      state.status = STATUS_COMPLETED;
    },
    [getEstimate.rejected]: (state, action) => {
      state.status = STATUS_FAILED;
      state.error = action.payload;
    },
  },
});

export const { setStatus, setEstimate, clearEstimate, toggleEntityTypeSelected } =
  estimateSlice.actions;

export default estimateSlice.reducer;
