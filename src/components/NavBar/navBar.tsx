import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FilterBox from '../FilterBox/filterBox';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SearchBar } from '..';
import { SearchQuerySelector } from '../../store/selectors';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { searchQueryActionDispatch } from '../../store/dispatchers';

const NavBar: React.FC = () => {
  const { setQuery } = searchQueryActionDispatch(useAppDispatch());

  const query = useAppSelector(SearchQuerySelector);

  const [value, setValue] = useState('');

  const [open, setOpen] = useState(false);

  const location = useLocation();

  // get the URL Parameter after the keyword ="?search"
  if (location.pathname === '/browse' && location.search.includes('?search=')) {
    const URLQuery = location.search.slice(8);
    setQuery(URLQuery);
  }

  useEffect(() => {
    query.length && setValue(query);
  }, [query]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ flexGrow: 1, boxShadow: 3 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => {
              setQuery('');
              setValue('');
            }}
            sx={{
              flexGrow: 1,
              display: { sm: 'block' },
              textDecoration: 'none',
            }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              <div style={{ display: 'flex', boxShadow: '3' }}>
                <div
                  style={{
                    background: '#ff4a4a',
                    padding: '4px 1px 4px 4px',
                  }}>
                  ANIME
                </div>
                <div
                  style={{
                    background: '#1c4b41',
                    color: 'WHITE',
                    padding: '4px 4px 4px 1px',
                  }}>
                  BASE
                </div>
              </div>
            </Link>
          </Typography>
          {location.pathname !== '/' && (
            <SearchBar setOpen={setOpen} filter value={value} setValue={setValue} />
          )}
        </Toolbar>
        <FilterBox setOpen={setOpen} open={open} />
      </AppBar>
    </Box>
  );
};

export default NavBar;
