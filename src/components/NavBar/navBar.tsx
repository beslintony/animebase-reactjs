import {
  pageConfigActionDispatch,
  searchQueryActionDispatch,
} from '../../store/dispatchers';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(pink[600], 0.15),
  '&:hover': {
    boxShadow: 2,
    // backgroundColor: alpha(pink[600], 0.25),
  },
  marginLeft: 0,
  width: '100%',
  display: 'flex',

  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FilterIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'relative',
  pointerEvents: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const NavBar: React.FC = () => {
  const { setQuery } = searchQueryActionDispatch(useAppDispatch());
  const { setPage } = pageConfigActionDispatch(useAppDispatch());

  const [value, setValue] = useState('');

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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            ANIMEBASE
          </Typography>
          <Search sx={{ boxShadow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  setQuery(value);
                  setPage(1);
                }
              }}
            />
            <FilterIconWrapper
              onClick={() => {
                console.log('123');
              }}>
              <FilterListIcon />
            </FilterIconWrapper>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
