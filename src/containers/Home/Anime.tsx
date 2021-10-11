import { AnimeLists } from '../../components';
import { MediaType } from '../../graphql/globalTypesFile';
import { PaperBackground } from './styles';
import React from 'react';

export const Anime: React.FC = () => {
  return (
    <PaperBackground>
      <AnimeLists displayType={'ANIME' as MediaType} />
    </PaperBackground>
  );
};
