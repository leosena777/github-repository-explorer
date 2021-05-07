import { configureStore } from "@reduxjs/toolkit";
import RepositoryReducer from "./Repository.store";

export const store = configureStore({
  reducer: {
    repositories: RepositoryReducer,
  },
});
