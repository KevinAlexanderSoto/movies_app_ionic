import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootMovieResult } from '../interfaces/apiInterfaces';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  private popularPage = 0;
  constructor(
    private httpCliente: HttpClient
  ) {

  }

  getRecentMovies(): Observable<RootMovieResult> {
    return new MovieQueryBuilder(this.httpCliente).addQuery("discover/movie?").addApiKey().addDateFilter().build();
  }

  getPoularMovies(): Observable<RootMovieResult> {
    this.popularPage++
    return new MovieQueryBuilder(this.httpCliente).addQuery(`discover/movie?sort_by=popularity.desc&page=${this.popularPage}`).addApiKey().addDateFilter().build();
  }
}

export class MovieQueryBuilder {
  constructor(
    private httpCliente: HttpClient
  ) {

  }
  private query = environment.ROOTMOVIEPATH

  addQuery(query: string): MovieQueryBuilder {
    this.query = this.query + query
    return this
  }

  addApiKey(): MovieQueryBuilder {
    this.query = this.query + `&api_key=${environment.APIKEY}`
    return this
  }

  addDateFilter(): MovieQueryBuilder {
    this.query = this.query + `&primary_release_date.gte=2024-03-08&primary_release_date.lte=2024-03-08`
    return this
  }

  build<T>(): Observable<T> {
    return this.httpCliente.get<T>(this.query)
  }

}
