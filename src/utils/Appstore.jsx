import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"
import moviesReducer from "./moviesSlice"
const appStore=configureStore(
    {
        reducer:
        {
            user:userReducer,
            movies:moviesReducer,
        }
    }
);
export default appStore;
  