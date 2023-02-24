import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/types';
import { favoritesSelector } from '../../store/selectors';
import * as MoviesActions from '../../store/actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-large-favorites',
  templateUrl: './large-favorites.component.html',
})
export class LargeFavoritesComponent {
  favorites$ = this.store.select(favoritesSelector);

  constructor(private store: Store<IAppState>, private router: Router) { }

  selectMovie(movieId: string) {
    this.store.dispatch(MoviesActions.selectMovieById({ movieId }));
    this.router.navigate(['large', 'favorites', movieId]);
  }
}
