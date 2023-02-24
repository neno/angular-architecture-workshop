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
    (state, { movie }) => {
      if (state.favorites.find(favorite => favorite.imdbID === movie.imdbID)) {
        return state;
      }
      return {  ...state, favorites: [...state.favorites, movie] };
    }
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
    MoviesActions.searchMovieById,
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
    MoviesActions.searchMovieByIdSuccess,
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
    MoviesActions.searchMovieByIdFailure,
    (state, { error }) => (
      {
        ...state,
        isLoading: false,
        error
      }
    )
  ),
  on(
    MoviesActions.selectMovieById,
    (state, { movieId }) => (
      {
        ...state,
        selectedMovie: state.favorites.find(movie => movie.imdbID === movieId) ?? null,
        selectedMovieId: movieId,
        isLoading: false,
        error: null
      }
    )
  ),
);
