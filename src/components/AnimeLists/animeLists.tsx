import * as AnimeListTypes from '../../graphql/querries/__generated__/AnimeList';

import { AnimeList, Loading, Pagination, SectionTitle } from '..';
import {
  SearchQuerySelector,
  pageSelector,
  perPageSelector,
  typeSelector,
} from '../../store/selectors';

import { ANIME_LIST } from '../../graphql/querries/animeList';
import { Grid } from '@mui/material';
import NoResultsFound from '../NoResultsFound/noResultsFound';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../hooks';
import { useQuery } from '@apollo/client';

const PaginationContatiner = styled(Grid)({
  display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  marginTop: '3rem',
  marginBottom: '1rem',
  width: '100%',
});

const AnimeGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minWidth: '1200px',
  minHeight: '80vh',
});

const Page = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'initial',
  alignItems: 'display-between',
  maxWidth: '1200px',
});

const AnimeLists: React.FC = () => {
  const page = useAppSelector(pageSelector);
  const perPage = useAppSelector(perPageSelector);
  const type = useAppSelector(typeSelector);
  const query = useAppSelector(SearchQuerySelector);

  const { loading, data, error } = useQuery<
    AnimeListTypes.AnimeList,
    AnimeListTypes.AnimeListVariables
  >(ANIME_LIST, {
    variables: {
      search: query.length ? query : null,
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
      {data?.Page?.pageInfo?.total ? (
        <Page>
          <SectionTitle
            title={type.charAt(0) + type.slice(1).toLowerCase() + ' List'}
            link="/viewmore"
          />
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
        </Page>
      ) : (
        <NoResultsFound />
      )}
    </>
  );
};

export default AnimeLists;
