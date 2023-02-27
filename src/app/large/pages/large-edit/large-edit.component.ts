import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { IAppState, IMovie } from 'src/app/types';
import * as MoviesActions from '../../store/actions';
import { selectSelectedMovie } from '../../store/selectors';

@Component({
  selector: 'app-large-edit',
  templateUrl: './large-edit.component.html',
  styleUrls: ['./large-edit.component.css']
})
export class LargeEditComponent implements OnInit {

  movie$!: Observable<IMovie | null>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {
    this.form = this.fb.group({
      imdbID: [''],
      Title: [''],
      Year: [''],
      Runtime: [''],
      Genre: [''],
      Actors: [''],
      Plot: [''],
      Poster: [''],
    });
  }

  ngOnInit() {
    this.movie$ = this.store.select(selectSelectedMovie)
    this.resetFormValues();
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
  }
}
