import { HeroSection } from '../../components';
import { PaperBackground } from './styles';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <PaperBackground>
      <HeroSection />
    </PaperBackground>
  );
};
