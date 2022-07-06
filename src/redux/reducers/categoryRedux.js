import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    categoryStart: (state) => {
      state.isFetching = true;
    },
    categorySuccess: (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    },
    categoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { categoryStart, categorySuccess, categoryFailure } =
  userSlice.actions;
export default userSlice.reducer;
