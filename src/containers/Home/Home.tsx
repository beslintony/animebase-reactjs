import { AnimeLists, HeroSection } from '../../components';

import { Paper } from '@mui/material';
import { SearchQuerySelector } from '../../store/selectors';
import { useAppSelector } from '../../hooks';

export const Home: React.FC = () => {
  const query = useAppSelector(SearchQuerySelector);

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // minHeight: '100vh',
        // background: '#212121',
      }}>
      {query.length ? <AnimeLists /> : <HeroSection />}
    </Paper>
  );
};
