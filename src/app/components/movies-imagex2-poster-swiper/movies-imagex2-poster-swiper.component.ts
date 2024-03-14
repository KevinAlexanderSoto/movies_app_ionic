import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/apiInterfaces';

@Component({
  selector: 'app-movies-imagex2-poster-swiper',
  templateUrl: './movies-imagex2-poster-swiper.component.html',
  styleUrls: ['./movies-imagex2-poster-swiper.component.scss'],
})
export class MoviesImagex2PosterSwiperComponent implements OnInit {

  @Input() moviesArray: Movie[] = [];

  @Output() onLoadMoreClick = new EventEmitter();

  @Output() onMoviewDetailClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onLoadMore(): void {
    this.onLoadMoreClick.emit();
  }
  onMovieDetail(movieId: number): void {
    this.onMoviewDetailClick.emit(movieId);
  }
}
