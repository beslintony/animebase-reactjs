import { AnimeLists } from '../../components';
import { PaperBackground } from './styles';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <PaperBackground>
      <AnimeLists />
    </PaperBackground>
  );
};
