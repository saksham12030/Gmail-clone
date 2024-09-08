import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./appslice";

const store = configureStore({
  reducer: {
    appslice: appReducer,
  },
});
export default store;