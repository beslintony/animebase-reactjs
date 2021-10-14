import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { SxProps, Theme } from '@mui/system';
import {
  pageConfigActionDispatch,
  searchQueryActionDispatch,
} from '../../store/dispatchers';

import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { StyledComponent } from '@emotion/styled';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks';
import { useHistory } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    boxShadow: 2,
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

const FilterIcon = styled(FilterListIcon)(({ theme }) => ({
  margin: theme.spacing(0.5),
  cursor: 'pointer',
  '&:hover': {
    color: 'grey',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
      fontWeight: 200,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      fontWeight: 150,
    },
  },
}));

interface SearchBarProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  filter?: boolean;
  styles?: SxProps<Theme>;
  inputStyles?: SxProps<Theme> | any;
  searchIconFontSize?: 'inherit' | 'large' | 'medium' | 'small';
  placeholderText?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setValue,
  value,
  setOpen,
  filter,
  styles,
  inputStyles,
  searchIconFontSize,
  placeholderText,
}) => {
  const { setQuery } = searchQueryActionDispatch(useAppDispatch());
  const { setPage } = pageConfigActionDispatch(useAppDispatch());

  const history = useHistory();

  return (
    <Search sx={{ boxShadow: 1, ...styles }}>
      <SearchIconWrapper>
        <SearchIcon fontSize={searchIconFontSize ?? 'medium'} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholderText ?? 'Search…'}
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        sx={{ ...inputStyles }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setQuery(value);
            setPage(1);
            history.push({
              pathname: '/browse',
              search: `?search=${value}`,
            });
          }
        }}
      />
      {setOpen && filter && (
        <FilterIcon
          onClick={() => {
            setOpen(true);
          }}
        />
      )}
    </Search>
  );
};

export default SearchBar;
