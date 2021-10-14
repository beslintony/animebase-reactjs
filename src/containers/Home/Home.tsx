import { AnimeLists, HeroSection } from '../../components';

import { PaperBackground } from './styles';
import React from 'react';
import { SearchQuerySelector } from '../../store/selectors';
import { useAppSelector } from '../../hooks';

export const Home: React.FC = () => {
  const query = useAppSelector(SearchQuerySelector);

  return (
    <PaperBackground>{query.length ? <AnimeLists /> : <HeroSection />}</PaperBackground>
  );
};
