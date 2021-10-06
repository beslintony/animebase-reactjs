import { gql } from '@apollo/client';

export const ANIME_LIST = gql`
  query AnimeList($type: MediaType!, $page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type) {
        id
        idMal
        title {
          romaji
          english
          native
        }
        type
        status
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;
