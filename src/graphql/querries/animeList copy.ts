// import { gql } from '@apollo/client';

// export const ANIME_LIST = gql`
//   query AnimeList($page: Int!, $perPage: Int!) {
//     Page(page: $page, perPage: $perPage) {
//       media {
//         id
//         idMal
//         title {
//           romaji
//           english
//           native
//         }
//         type
//         format
//         status
//         description
//         startDate {
//           year
//           month
//           day
//         }
//         endDate {
//           year
//           month
//           day
//         }
//         coverImage {
//           extraLarge
//           large
//           medium
//           color
//         }
//         tags {
//           id
//           name
//           description
//           category
//           rank
//           isAdult
//           userId
//         }
//         recommendations {
//           edges {
//             node {
//               id
//             }
//           }
//           nodes {
//             id
//           }
//           pageInfo {
//             total
//             perPage
//             currentPage
//             lastPage
//             hasNextPage
//           }
//         }
//       }
//       pageInfo {
//         total
//         perPage
//         currentPage
//         lastPage
//         hasNextPage
//       }
//     }
//   }
// `;
