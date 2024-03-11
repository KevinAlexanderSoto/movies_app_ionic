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

  getRecentMovies(): Observable<RootMovieResult> {
    return this.httpCliente.get<RootMovieResult>(environment.ROOTMOVIEPATH + "discover/movie?api_key=fa065d8318cff0090a97384d49a8ee30&primary_release_date.gte=2024-03-08&primary_release_date.lte=2024-03-08")
  }
}
