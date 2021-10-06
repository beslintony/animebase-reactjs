import * as AnimeListTypes from '../../graphql/querries/__generated__/AnimeList';

import { AnimeList, Loading, Pagination, SectionTitle } from '..';
import {
  pageSelector,
  perPageSelector,
  typeSelector,
} from '../../store/selectors/animeListSelectors';
import { setPage, setPerPage, setType } from '../../store/slices/animeListSlice';

import { ANIME_LIST } from '../../graphql/querries/animeList';
import { Dispatch } from 'redux';
import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../hooks';
import { useQuery } from '@apollo/client';

const PaginationContatiner = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3rem',
  marginBottom: '1rem',
  width: '100%',
});

const AnimeGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px',
});

export const pageConfigActionDispatch = (dispatch: Dispatch) => ({
  setType: (type: AnimeListTypes.AnimeListVariables['type']) => dispatch(setType(type)),
  setPage: (page: AnimeListTypes.AnimeListVariables['page']) => dispatch(setPage(page)),
  setPerPage: (perPage: AnimeListTypes.AnimeListVariables['perPage']) =>
    dispatch(setPerPage(perPage)),
});

const AnimeLists: React.FC = () => {
  const page = useAppSelector(pageSelector);
  const perPage = useAppSelector(perPageSelector);
  const type = useAppSelector(typeSelector);

  const { loading, data, error } = useQuery<
    AnimeListTypes.AnimeList,
    AnimeListTypes.AnimeListVariables
  >(ANIME_LIST, {
    variables: {
      type: type as AnimeListTypes.AnimeListVariables['type'],
      page: page,
      perPage: perPage,
    },
  });
  console.log('PAGE_LIST_DATA', data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <p>An Error occured! </p>
      </div>
    );
  }

  return (
    <>
      <main>
        <SectionTitle title="Anime List" link="/viewmore" />
        <AnimeGrid container spacing={2} gap={2}>
          {data?.Page?.media?.map((anime) => (
            <Grid item key={anime?.id}>
              <AnimeList anime={anime as AnimeListTypes.AnimeList_Page_media} />
            </Grid>
          ))}
        </AnimeGrid>
        <PaginationContatiner container alignContent="center" justifyContent="center">
          <Pagination
            pageInfo={data?.Page?.pageInfo as AnimeListTypes.AnimeList_Page_pageInfo}
          />
        </PaginationContatiner>
      </main>
    </>
  );
};

export default AnimeLists;
