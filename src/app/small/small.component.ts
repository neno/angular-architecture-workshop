import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, filter, map, Observable, switchMap, tap } from 'rxjs';
import { IMovie, IMovieItem } from '../types';

type TabType = 'search' | 'favorites';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
})
export class SmallComponent {
  private favoriteMovies$ = new BehaviorSubject<IMovie[]>([]);
  private readonly baseUrl = 'http://www.omdbapi.com/?apikey=a6ab2e65';

  activeTab$ = new BehaviorSubject<TabType>('search');
  searchTerm$ = new BehaviorSubject<string>('');
  selectedMovie$ = new BehaviorSubject<IMovie | null>(null);
  myFavoriteMovies$ = this.favoriteMovies$.asObservable();

  searchResults$ = this.searchTerm$.pipe(
    tap(() => this.selectedMovie$.next(null)),
    filter((searchTerm) => !!searchTerm),
    distinctUntilChanged(),
    switchMap((searchTerm) => this.searchMovies(searchTerm))
  );

  favoritesCount$ = this.favoriteMovies$.pipe(
    map((movies) => movies.length)
  );

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<IMovieItem[]> {
    return this.http.get<IMovieItem[]>(`${this.baseUrl}&s=${searchTerm}`).pipe(
      map((data: any) => data.Search)
    );
  }

  activateTab(tab: TabType) {
    this.selectedMovie$.next(null);
    this.activeTab$.next(tab);
  }

  onSearch(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }

  selectMovie(movieId: string) {
    this.setMovieById(movieId);
  }

  setMovieById(id: string): void {
    console.log('setMovieById', id);
    this.http.get<IMovie>(`${this.baseUrl}&i=${id}`).subscribe(
      (movie) => this.selectedMovie$.next(movie)
    );
  }

  addMovie(movie: IMovie) {
    if (!this.favoriteMovies$.value.some((m) => m.imdbID === movie.imdbID)) {
      this.favoriteMovies$.next([...this.favoriteMovies$.value, movie]);
    }
  }

  removeMovie(movieId: string) {
    this.favoriteMovies$.next(this.favoriteMovies$.value.filter((m) => m.imdbID !== movieId));
  }

  updateMovie(movie: IMovie) {
    this.favoriteMovies$.next(this.favoriteMovies$.value.map((m) => m.imdbID === movie.imdbID ? movie : m));
  }
}
