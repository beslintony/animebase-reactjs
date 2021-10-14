import { AnimeLists } from '../components';
import { MediaType } from '../graphql/globalTypesFile';
import { PaperBackground } from './Home/styles';
import React from 'react';

export const Manga: React.FC = () => {
  return (
    <PaperBackground>
      <AnimeLists displayType={'MANGA' as MediaType} />
    </PaperBackground>
  );
};
