import { ANIME_LIST } from '../../graphql/queries/animeList';
import { AnimeList } from '../../graphql/queries/__generated__/AnimeList';
import { MediaType } from '../../graphql/globalTypesFile';
import { apolloClient } from '../../graphql';

const getPageList = async (
  type: MediaType,
  page: number,
  perPage: number,
): Promise<AnimeList> => {
  let res = null;
  try {
    res = await apolloClient.query({
      query: ANIME_LIST,
      variables: { type: type, page: page, perPage: perPage },
    });
    if (res !== null) throw new Error(`Data not Found`);
  } catch (error) {
    console.error(error);
  }
  return res?.data;
};
export default getPageList;
