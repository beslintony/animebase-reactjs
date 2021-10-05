import * as AnimeListTypes from '../../graphql/querries/__generated__/AnimeList';

import { AnimeList, Loading, Pagination, SectionTitle } from '..';
import { pageSelector, perPageSelector, typeSelector } from './selectors';
import { setPage, setPerPage, setType } from './animeListSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { ANIME_LIST } from '../../graphql/querries/animeList';
import { AnimeListVariables } from '../../graphql/querries/__generated__/AnimeList';
import { Dispatch } from 'redux';
import { Grid } from '@mui/material';
import { MediaType } from '../../graphql/globalTypesFile';
import React from 'react';
import sectionTitle from '../SectionTitle/sectionTitle';
import { styled } from '@mui/material/styles';
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
  margin: '1px',
  maxWidth: '1200px',
});

export const pageConfigActionDispatch = (dispatch: Dispatch) => ({
  setType: (type: AnimeListTypes.AnimeListVariables['type']) => dispatch(setType(type)),
  setPage: (page: AnimeListTypes.AnimeListVariables['page']) => dispatch(setPage(page)),
  setPerPage: (perPage: AnimeListTypes.AnimeListVariables['perPage']) =>
    dispatch(setPerPage(perPage)),
});

const AnimeLists: React.FC = () => {
  const { setType, setPage, setPerPage } = pageConfigActionDispatch(useAppDispatch());

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
  console.log(data);

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

  // const { setPage } = actionDispatch(useAppDispatch());

  // setPage(12);
  // setType('ANIME' as MediaType);
  // setPerPage(36);

  return (
    <>
      <main>
        <SectionTitle title="Anime List" link="/viewmore" />
        <AnimeGrid container spacing={2}>
          {data?.Page?.media?.map((anime) => (
            <Grid item key={anime?.id} xs={12} sm={6} md={4} lg={3}>
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
