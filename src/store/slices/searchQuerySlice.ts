import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
