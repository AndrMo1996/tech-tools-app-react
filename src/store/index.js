import { configureStore } from "@reduxjs/toolkit";

import workhoursReducer from "./workhoursSlice";
import estimateReducer from "./estimateSlice";
import subtasksReducer from "./subtasksSlice";

export default configureStore({
  reducer: {
    workhours: workhoursReducer,
    estimate: estimateReducer,
    subtasks: subtasksReducer
  },
});
