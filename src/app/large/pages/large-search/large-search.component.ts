import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MoviesActions from '../../store/actions';
import { isLoadingSelector, searchResultsSelector } from '../../store/selectors';

@Component({
  selector: 'app-large-search',
  templateUrl: './large-search.component.html',
})
export class LargeSearchComponent {

  isLoading$ = this.store.select(isLoadingSelector);
  searchResults$ = this.store.select(searchResultsSelector);

  constructor(private store: Store) { }

  onSearch(searchTerm: string) {
    this.store.dispatch(MoviesActions.searchMovies({ searchTerm }));
  }

  selectMovie(movieId: string) {
    this.store.dispatch(MoviesActions.searchMovieById({ movieId }));
  }
}
