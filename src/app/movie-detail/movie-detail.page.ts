import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  detailTitle: string | null = '';
  movieId: string | null = '0';
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _moviesApiService: MoviesApiService
  ) { }

  ngOnInit() {
    this.movieId = this._route.snapshot.paramMap.get("id");
    if (this.movieId != null) {
      this._moviesApiService.getMovieDetails(this.movieId).subscribe((movieDetail) => {
        this.detailTitle = movieDetail.title;

      });
    }
  }

}
