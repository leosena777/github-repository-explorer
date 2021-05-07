import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/******  Async with createAsyncThunk *************/
// export const asyncLoadRepositories = createAsyncThunk(
//   "repositories/load",
//   async () => {
//     const request = await fetch(
//       "https://api.github.com/users/leosena777/repos"
//     );
//     const response = await request.json();
//     return response;
//   }
// );

// const configAsyncLoadRepositories = {
//   [asyncLoadRepositories.pending]: (state, action) => {
//     state.status = "loading";
//   },
//   [asyncLoadRepositories.fulfilled]: (state, action) => {
//     state.status = "succeeded";
//     // Add any fetched posts to the array
//     state.list = action.payload;
//   },
//   [asyncLoadRepositories.rejected]: (state, action) => {
//     state.status = "failed";
//     state.error = action.error.message;
//   },
// };

/******  Async with dispatch *************/
export const asyncLoadRepositories = () => {
  return async (dispatch) => {
    const request = await fetch(
      "https://api.github.com/users/leosena777/repos"
    );
    const response = await request.json();
    dispatch(loadRepositories(response));
  };
};

const initialState = {
  filter: "",
  status: "",
  error: "",
  list: [],
};

export const repositorySlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    //immet
    filter: (state, action) => {
      state.filter = action.payload;
    },
    loadRepositories: (state, action) => {
      state.list = action.payload;
    },
  },
  // extraReducers: { ...configAsyncLoadRepositories },
});

export const selectRepositories = (state) => state.repositories.list;
export const selectFilter = (state) => state.repositories.filter;

// actions
export const { filter, loadRepositories } = repositorySlice.actions;

// reducer
export default repositorySlice.reducer;
