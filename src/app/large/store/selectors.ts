import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMoviesState } from './reducers';

export const selectMoviesState = createFeatureSelector<IMoviesState>('movies');

export const isLoadingSelector = createSelector(
  selectMoviesState,
  (state) => state.isLoading
);

export const searchTermSelector = createSelector(
  selectMoviesState,
  (state) => state.searchTerm
);

export const searchResultsSelector = createSelector(
  selectMoviesState,
  (state) => state.searchResults
);

export const favoritesSelector = createSelector(
  selectMoviesState,
  (state) => state.favorites
);

export const selectSelectedMovie = createSelector(
  selectMoviesState,
  (state) => state.selectedMovie
);

export const errorSelector = createSelector(
  selectMoviesState,
  (state) => state.error
);





// export const selectSearchTerm = (state: IMoviesState) => state.searchTerm;
// export const selectSearchResults = (state: IMoviesState) => state.searchResults;
// export const selectFavorites = (state: IMoviesState) => state.favorites;
// export const selectIsLoading = (state: IMoviesState) => state.isLoading;
// export const selectError = (state: IMoviesState) => state.error;
