import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'recent-movies.page.html',
  styleUrls: ['recent-movies.page.scss']
})
export class RecentMoviesPage implements OnInit {

  constructor(private moviesApiService: MoviesApiService) { }

  ngOnInit(): void {
    this.moviesApiService.getRecentMovies().subscribe(movies => {
      console.log(movies);
    })
  }

}
