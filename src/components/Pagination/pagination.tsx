import * as AnimeListTypes from '../../graphql/querries/__generated__/AnimeList';

import { Link, Route } from 'react-router-dom';
import { Pagination as MatPagination, PaginationItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';

import React from 'react';
import { pageConfigActionDispatch } from '../AnimeLists/animeLists';
import { typeSelector } from '../AnimeLists/selectors';

interface PagiantionProps {
  pageInfo: AnimeListTypes.AnimeList_Page_pageInfo | undefined | null;
}

const Pagination: React.FC<PagiantionProps> = ({ pageInfo }) => {
  const { setPage } = pageConfigActionDispatch(useAppDispatch());
  const type = useAppSelector(typeSelector);

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
