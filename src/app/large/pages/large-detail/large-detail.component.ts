import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, IMovie } from 'src/app/types';
import { isMovieFavorite, selectSelectedMovie } from '../../store/selectors';
import * as MoviesActions from '../../store/actions';

@Component({
  selector: 'app-large-detail',
  templateUrl: './large-detail.component.html',
})
export class LargeDetailComponent {
  movie$ = this.store.select(selectSelectedMovie);
  isFavorite$ = this.store.select(isMovieFavorite);

  constructor(private store: Store<IAppState>) { }

  addToFavorites(movie: IMovie) {
    this.store.dispatch(MoviesActions.addToFavorites({ movie }));
  }
  removeFromFavorites(movieId: string) {
    this.store.dispatch(MoviesActions.removeFromFavorites({ movieId }));
  }
}
