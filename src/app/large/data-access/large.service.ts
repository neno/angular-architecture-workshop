import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMovie, IMovieItem } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class LargeService {
  private readonly baseUrl = 'http://www.omdbapi.com/?apikey=a6ab2e65';

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<IMovieItem[]> {
    return this.http.get<IMovieItem[]>(`${this.baseUrl}&s=${searchTerm}`).pipe(
      map((data: any) => data.Search)
    )
  }

  getMovieById(id: string): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.baseUrl}&i=${id}`);
  }
}
