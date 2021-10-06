import { gql } from '@apollo/client';

export const ANIME_LIST = gql`
  query AnimeList($search: String, $type: MediaType!, $page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type, search: $search) {
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
