import ReduxLogger from 'redux-logger';
import animeListReducer from './slices/animeListSlice';
import { configureStore } from '@reduxjs/toolkit';
import searchQueryReducer from './slices/searchQuerySlice';

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(ReduxLogger);

export const store = configureStore({
  middleware,
  reducer: {
    animeList: animeListReducer,
    searchQuery: searchQueryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
