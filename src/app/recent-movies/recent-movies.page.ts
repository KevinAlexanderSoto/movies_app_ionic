import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../interfaces/apiInterfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'recent-movies.page.html',
  styleUrls: ['recent-movies.page.scss']
})
export class RecentMoviesPage implements OnInit {

  constructor(private moviesApiService: MoviesApiService) { }
  recentMoviesArray: Movie[] = [];
  popularMoviesArray: Movie[] = [];

  ngOnInit(): void {
    this.moviesApiService.getRecentMovies().subscribe(moviesResult => {
      this.recentMoviesArray = moviesResult.results
    })
    this.getPopularMovies();
  }

  onLoadMorePoularMovies(): void {
    this.getPopularMovies()
  }

  private getPopularMovies(): void {
    this.moviesApiService.getPoularMovies().subscribe(moviesResult => {
      this.popularMoviesArray = this.popularMoviesArray.concat(...moviesResult.results)
    })
  }

}
