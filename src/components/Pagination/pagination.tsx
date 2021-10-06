import * as AnimeListTypes from '../../graphql/querries/__generated__/AnimeList';

import { Link, Route, useLocation } from 'react-router-dom';
import { Pagination as MatPagination, PaginationItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { MediaType } from '../../graphql/globalTypesFile';
import React from 'react';
import { pageConfigActionDispatch } from '../../store/dispatchers';
import { typeSelector } from '../../store/selectors';

interface PagiantionProps {
  pageInfo: AnimeListTypes.AnimeList_Page_pageInfo | undefined | null;
}

const Pagination: React.FC<PagiantionProps> = ({ pageInfo }) => {
  const { setPage, setType } = pageConfigActionDispatch(useAppDispatch());
  const type = useAppSelector(typeSelector);
  const location = useLocation();

  if (location.pathname) {
    if (location.pathname === '/manga') {
      if (location.search === '') {
        setType('MANGA' as MediaType);
      }
    }

    if (location.pathname === '/anime') {
      if (location.search === '') {
        setType('ANIME' as MediaType);
      }
    }
  }

  return (
    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') ?? '1', 10);
        setPage(page);

        return (
          <MatPagination
            page={page}
            count={pageInfo?.lastPage as number}
            renderItem={(item) => {
              return (
                <PaginationItem
                  component={Link}
                  to={`/${type.toLowerCase()}${
                    item.page === 1 ? '' : `?page=${item.page}`
                  }`}
                  {...item}
                />
              );
            }}
          />
        );
      }}
    </Route>
  );
};

export default Pagination;
