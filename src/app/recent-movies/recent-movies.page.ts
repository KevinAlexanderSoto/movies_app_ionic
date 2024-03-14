import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../interfaces/apiInterfaces';
import { Router } from '@angular/router';
import { MOVIE_DETAIL_NAVIGATION_ROUTE } from '../navigation/navigation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'recent-movies.page.html',
  styleUrls: ['recent-movies.page.scss']
})
export class RecentMoviesPage implements OnInit {

  constructor(private moviesApiService: MoviesApiService, private route: Router) { }
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
  onMovieDetails(movieId: number): void {
    this.route.navigateByUrl(MOVIE_DETAIL_NAVIGATION_ROUTE + `/${movieId}`)
  }
  private getPopularMovies(): void {
    this.moviesApiService.getPoularMovies().subscribe(moviesResult => {
      this.popularMoviesArray = this.popularMoviesArray.concat(...moviesResult.results)
    })
  }

}
