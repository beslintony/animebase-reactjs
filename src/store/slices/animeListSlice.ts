import { AnimeListVariables } from '../../graphql/querries/__generated__/AnimeList';
import { createSlice } from '@reduxjs/toolkit';
import { useWindowWidth } from '../../hooks';

// let perPageCard = 20;

// console.log('currentScreenWidth', currentScreenWidth);

const initialState: AnimeListVariables = {
  type: 'ANIME' as AnimeListVariables['type'],
  page: 0 as AnimeListVariables['page'],
  perPage: 20 as AnimeListVariables['perPage'],
};

const animeListSlice = createSlice({
  name: 'animeListVariables',
  initialState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
  },
});

export const { setType, setPage, setPerPage } = animeListSlice.actions;

export default animeListSlice.reducer;
