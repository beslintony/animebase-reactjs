/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus } from "./../../globalTypesFile";

// ====================================================
// GraphQL query operation: Search
// ====================================================

export interface Search_Page_media_title {
  __typename: "MediaTitle";
  /**
   * The romanization of the native language title
   */
  romaji: string | null;
  /**
   * The official english title
   */
  english: string | null;
  /**
   * Official title in it's native language
   */
  native: string | null;
}

export interface Search_Page_media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at its largest size. If this size isn't available, large will be provided instead.
   */
  extraLarge: string | null;
  /**
   * The cover image url of the media at a large size
   */
  large: string | null;
  /**
   * The cover image url of the media at medium size
   */
  medium: string | null;
  /**
   * Average #hex color of cover image
   */
  color: string | null;
}

export interface Search_Page_media {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The mal id of the media
   */
  idMal: number | null;
  /**
   * The official titles of the media in various languages
   */
  title: Search_Page_media_title | null;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * The cover images of the media
   */
  coverImage: Search_Page_media_coverImage | null;
}

export interface Search_Page_pageInfo {
  __typename: "PageInfo";
  /**
   * The total number of items
   */
  total: number | null;
  /**
   * The count on a page
   */
  perPage: number | null;
  /**
   * The current page
   */
  currentPage: number | null;
  /**
   * The last page
   */
  lastPage: number | null;
  /**
   * If there is another page
   */
  hasNextPage: boolean | null;
}

export interface Search_Page {
  __typename: "Page";
  media: (Search_Page_media | null)[] | null;
  /**
   * The pagination information
   */
  pageInfo: Search_Page_pageInfo | null;
}

export interface Search {
  Page: Search_Page | null;
}

export interface SearchVariables {
  search: string;
  page: number;
  perPage: number;
}
