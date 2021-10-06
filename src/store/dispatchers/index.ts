/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as AnimeListTypes from '../../graphql/querries/__generated__/AnimeList';

import { setPage, setPerPage, setType } from '../slices/animeListSlice';

import { Dispatch } from 'react';
import { setQuery } from '../slices/searchQuerySlice';

export const pageConfigActionDispatch = (dispatch: Dispatch) => ({
  setType: (type: AnimeListTypes.AnimeListVariables['type']) => dispatch(setType(type)),
  setPage: (page: AnimeListTypes.AnimeListVariables['page']) => dispatch(setPage(page)),
  setPerPage: (perPage: AnimeListTypes.AnimeListVariables['perPage']) =>
    dispatch(setPerPage(perPage)),
});

export const searchQueryActionDispatch = (dispatch: Dispatch) => ({
  setQuery: (query: string) => dispatch(setQuery(query)),
});
