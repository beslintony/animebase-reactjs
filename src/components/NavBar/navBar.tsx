import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
  console.log(query.length);

  useEffect(() => {
    query.length && setValue(query);
  }, [query]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ flexGrow: 1, boxShadow: 3 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
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
              display: { xs: 'none', sm: 'block' },
              textDecoration: 'none',
            }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
              ANIMEBASE
            </Link>
          </Typography>
          <SearchBar setOpen={setOpen} filter value={value} setValue={setValue} />
        </Toolbar>
        <FilterBox setOpen={setOpen} open={open} />
      </AppBar>
    </Box>
  );
};

export default NavBar;
