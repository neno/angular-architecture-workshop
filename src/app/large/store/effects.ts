import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs';
import { LargeService } from '../data-access/large.service';
import { searchMovieById, searchMovieByIdSuccess, searchMovies, searchMoviesSuccess } from './actions';


@Injectable()
export class LargeEffects {
  constructor(private actions$: Actions, private largeService: LargeService, private router: Router) {
    actions$.subscribe(action => console.log(action));
  }

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(searchMovies),
    mergeMap(action => (
      this.largeService.searchMovies(action.searchTerm).pipe(
        map(movies => searchMoviesSuccess({ searchResults: movies, error: null })),
        tap(() => this.router.navigate(['/large', 'search']))
      ))
    ))
  );

  searchMovieById$ = createEffect(() => this.actions$.pipe(
    ofType(searchMovieById),
    mergeMap(action => (
      this.largeService.getMovieById(action.movieId).pipe(
        map(movie => searchMovieByIdSuccess({ movie })),
        tap(() => {
          this.router.navigate(['/large', 'search', action.movieId])
        })
      ))
    ))
  );
}
