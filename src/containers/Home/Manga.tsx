import { AnimeLists } from '../../components';
import { MediaType } from '../../graphql/globalTypesFile';
import { PaperBackground } from './styles';
import React from 'react';

export const Manga: React.FC = () => {
  return (
    <PaperBackground>
      <AnimeLists displayType={'MANGA' as MediaType} />
    </PaperBackground>
  );
};
