import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { LargeService } from '../data-access/large.service';
import { searchMovies, searchMoviesSuccess } from './actions';


@Injectable()
export class LargeEffects {
  constructor(private actions$: Actions, private largeService: LargeService) {
    actions$.subscribe(action => console.log(action));
  }

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(searchMovies),
    mergeMap(action => (
      this.largeService.searchMovies(action.searchTerm).pipe(
        map(movies => searchMoviesSuccess({ searchResults: movies, error: null })
        )
      ))
    ))
  );
}
