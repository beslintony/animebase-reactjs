import * as AnimeListTypes from '../../graphql/queries/__generated__/AnimeList';

import { Card, CardMedia } from '@mui/material';

import { Link } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';

const CardMediaContainer = styled('div')`
  // backgroundColor: linear-gradient(
  //   to bottom,
  //   rgba(0, 0, 0, 0) 41%,
  //   rgba(0, 0, 0, 0.65) 100%,
  //   black
  // );
  // position: relative;

  animation: animateImage 1s;
  @keyframes animateImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`;

const StatusOverlay = styled('div')`
  color: white;
  background-color: darkblue;
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  left: 3px;
  bottom: 230px;
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
`;

const OverlayContainer = styled('div')`
  display: flex;
  position: relative;
`;

const CardContentContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;

  padding: 2px;
  width: 100%;

  background: rgba(0.1, 0.1, 0.1, 0.6);
  text-decoration: none;
  &: hover {
    background: rgba(0.1, 0.1, 0.1, 1);
  }
`;

const CardContentTitle = styled('div')`
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 0.5rem;
  margin: 1px;
  text-decoration: none;
  word-wrap: word-break;
  &: hover {
    color: white;
  }
`;

interface animeListProps {
  anime: AnimeListTypes.AnimeList_Page_media | undefined;
}

const AnimeList: React.FC<animeListProps> = ({ anime }) => {
  // const page = useAppSelector(pageSelector);
  // const perPage = useAppSelector(perPageSelector);
  // const type = useAppSelector(typeSelector);

  // const {
  //   pageConfig: { page },
  // } = useAppSelector(makeSelectAnimeList);
  // const {
  //   pageConfig: { perPage },
  // } = useAppSelector(makeSelectAnimeList);
  // const {
  //   pageConfig: { type },
  // } = useAppSelector(makeSelectAnimeList);

  // console.log('page', page);

  // console.log('clgPerpage', perPage);
  // console.log('clgType', type);

  const title: string | undefined | null =
    anime?.title?.english ?? anime?.title?.romaji ?? anime?.title?.native;

  return (
    <>
      <Card
        sx={{
          width: 210,
          boxShadow: 5,
        }}>
        <Link to={`/${anime?.type?.toLowerCase()}/${anime?.id}`}>
          <CardMediaContainer>
            <CardMedia
              component="img"
              height="260"
              image={anime?.coverImage?.extraLarge as string}
              sx={{ maxWidth: 310, zIndex: -100 }}
            />
          </CardMediaContainer>
          <OverlayContainer>
            <StatusOverlay>{anime?.status}</StatusOverlay>
            <CardContentContainer>
              <CardContentTitle>
                {title && title?.length > 18 ? title?.substr(0, 18) + '\u2026' : title}
              </CardContentTitle>
            </CardContentContainer>
          </OverlayContainer>
        </Link>
      </Card>
    </>
  );
};

export default AnimeList;
