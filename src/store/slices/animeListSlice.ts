import { AnimeListVariables } from '../../graphql/queries/__generated__/AnimeList';
import { createSlice } from '@reduxjs/toolkit';

let perPageCard = 20;

if (window.innerWidth > 1177) {
  perPageCard = 30;
} else if (window.innerWidth > 936 && window.innerHeight < 1177) {
  perPageCard = 28;
} else if (window.innerWidth > 693 && window.innerHeight < 936) {
  perPageCard = 27;
} else if (window.innerWidth > 451 && window.innerHeight < 693) {
  perPageCard = 30;
} else {
  perPageCard = 16;
}

const initialState: AnimeListVariables = {
  type: 'ANIME' as AnimeListVariables['type'],
  page: 0 as AnimeListVariables['page'],
  perPage: perPageCard as AnimeListVariables['perPage'],
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
