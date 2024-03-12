import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootMovieResult } from '../interfaces/apiInterfaces';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(
    private httpCliente: HttpClient
  ) {

  }

  private executeMovieQuery<T>(query: string): Observable<T> {
    query = environment.ROOTMOVIEPATH + query;
    query = query + `?api_key=${environment.APIKEY}&primary_release_date.gte=2024-03-08&primary_release_date.lte=2024-03-08`
    return this.httpCliente.get<T>(query)
  }

  getRecentMovies(): Observable<RootMovieResult> {
    return this.executeMovieQuery<RootMovieResult>("discover/movie")
  }
}
