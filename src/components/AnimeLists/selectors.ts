import {
  AnimeList,
  AnimeListVariables,
} from '../../graphql/querries/__generated__/AnimeList';

import { RootState } from '../../store/store';
import { createSelector } from 'reselect';

// export interface RootState {
//   animeListVariables: AnimeListVariables;
// }

const selectAnimeList = (state: RootState) => state.animeList;

export const makeSelectAnimeList = createSelector(selectAnimeList, (pageConfig) => ({
  pageConfig,
}));

export const pageSelector = createSelector(
  makeSelectAnimeList,
  (state) => state.pageConfig.page,
);
export const perPageSelector = createSelector(
  makeSelectAnimeList,
  (state) => state.pageConfig.perPage,
);
export const typeSelector = createSelector(
  makeSelectAnimeList,
  (state) => state.pageConfig.type,
);
