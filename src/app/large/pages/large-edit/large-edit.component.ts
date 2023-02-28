import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { IAppState, IMovie } from 'src/app/types';
import * as MoviesActions from '../../store/actions';
import { selectSelectedMovie } from '../../store/selectors';

const formFields = {
  imdbID: [''],
  Title: [''],
  Year: [''],
  Runtime: [''],
  Genre: [''],
  Actors: [''],
  Plot: [''],
  Poster: [''],
};

@Component({
  selector: 'app-large-edit',
  templateUrl: './large-edit.component.html',
  styleUrls: ['./large-edit.component.css']
})
export class LargeEditComponent implements OnInit, OnDestroy {

  movie$!: Observable<IMovie | null>;
  form: FormGroup;
  destroy$ = new Subject<boolean>();

  constructor(private fb: FormBuilder, private store: Store<IAppState>, private router: Router) {
    this.form = this.fb.group(formFields);
  }

  ngOnInit() {
    this.movie$ = this.store.select(selectSelectedMovie)
    this.movie$.pipe(takeUntil(this.destroy$)).subscribe(
      movie => {
        if (movie) {
          this.form.patchValue(movie);
        }
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getEditData(){
    this.movie$ = this.store.select(selectSelectedMovie);
  }

  resetFormValues() {
    this.movie$.pipe(take(1)).subscribe(movie => {
      if (movie) {
        this.form.patchValue(movie);
      }
    });
  }

  save() {
    this.store.dispatch(MoviesActions.updateMovie({ movie: this.form.value }));
  }

  cancel() {
    this.resetFormValues()
  }

  delete(movieId: string) {
    this.store.dispatch(MoviesActions.removeFromFavorites({ movieId }));
    this.router.navigate(['large', 'favorites']);
  }
}
