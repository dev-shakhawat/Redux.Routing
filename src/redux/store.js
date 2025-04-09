import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slices/counterSlice";
import calculateSlice  from "./slices/calculateSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    calculate: calculateSlice
  },
});
