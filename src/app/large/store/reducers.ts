import { createReducer, on } from '@ngrx/store';
import { IMovie, IMovieItem } from 'src/app/types';
import * as MoviesActions from './actions';

export interface IMoviesState {
  searchTerm: string;
  searchResults: IMovieItem[];
  favorites: IMovie[];
  isLoading: boolean;
  error: string | null;
  selectedMovieId: string | null;
  selectedMovie: IMovie | null;
}

export const initialState: IMoviesState = {
  searchTerm: '',
  searchResults: [],
  favorites: [],
  selectedMovieId: null,
  selectedMovie: null,
  isLoading: false,
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(
    MoviesActions.searchMovies,
    (state, { searchTerm }) => (
      {
        ...state,
        searchTerm,
        isLoading: true,
        error: null
      }
    )
  ),
  on(
    MoviesActions.searchMoviesSuccess,
    (state, { searchResults }) => (
      {
        ...state,
        searchResults,
        isLoading: false,
        error: null
      }
    )
  ),
  on(
    MoviesActions.searchMoviesFailure,
    (state, { error }) => (
      {
        ...state,
        isLoading: false,
        error
      }
    )
  ),
  on(
    MoviesActions.addToFavorites,
    (state, { movie }) => (
      {
        ...state,
        favorites: [...state.favorites, movie]
      }
    )
  ),
  on(
    MoviesActions.removeFromFavorites,
    (state, { movieId }) => (
      {
        ...state,
        favorites: state.favorites.filter(movie => movie.imdbID !== movieId)
      }
    )
  ),
  on(
    MoviesActions.fetchMovieById,
    (state, { movieId }) => (
      {
        ...state,
        selectedMovieId: movieId,
        isLoading: true,
        error: null
      }
    )
  ),
  on(
    MoviesActions.fetchMovieByIdSuccess,
    (state, { movie }) => (
      {
        ...state,
        selectedMovie: movie,
        isLoading: false,
        error: null
      }
    )
  ),
  on(
    MoviesActions.fetchMovieByIdFailure,
    (state, { error }) => (
      {
        ...state,
        isLoading: false,
        error
      }
    )
  )
);
